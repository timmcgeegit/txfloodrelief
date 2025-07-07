const CACHE_NAME = 'flood-relief-v1';
const STATIC_CACHE_NAME = 'flood-relief-static-v1';
const DATA_CACHE_NAME = 'flood-relief-data-v1';

// Essential files to cache for offline functionality
const STATIC_FILES = [
  '/',
  '/get-help',
  '/get-help/shelter',
  '/get-help/food-water',
  '/get-help/financial',
  '/give-help',
  '/find-someone',
  '/offline',
  '/manifest.json',
  '/favicon.svg',
  '/icon-192.svg',
  '/icon-512.svg'
];

// Data files to cache
const DATA_FILES = [
  '/src/lib/data/shelters.json',
  '/src/lib/data/food-sites.json',
  '/src/lib/data/financial-assistance.json',
  '/src/lib/data/contacts.json'
];

// Install event - cache essential files
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE_NAME).then(cache => {
        return cache.addAll(STATIC_FILES);
      }),
      caches.open(DATA_CACHE_NAME).then(cache => {
        return cache.addAll(DATA_FILES);
      })
    ])
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE_NAME && 
              cacheName !== DATA_CACHE_NAME && 
              cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle API requests and data files
  if (url.pathname.includes('/api/') || url.pathname.includes('.json')) {
    event.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => {
        return cache.match(request).then(response => {
          if (response) {
            // Serve from cache
            return response;
          }
          // Try network and update cache
          return fetch(request).then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // Return cached version if network fails
            return cache.match(request);
          });
        });
      })
    );
    return;
  }

  // Handle page requests
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.open(STATIC_CACHE_NAME).then(cache => {
        return cache.match(request).then(response => {
          if (response) {
            return response;
          }
          return fetch(request).catch(() => {
            // Return offline page if specific page not cached
            return cache.match('/offline') || cache.match('/');
          });
        });
      })
    );
    return;
  }

  // Handle other requests (CSS, JS, images, etc.)
  event.respondWith(
    caches.match(request).then(response => {
      if (response) {
        return response;
      }
      return fetch(request).then(networkResponse => {
        // Cache successful responses
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, responseClone);
          });
        }
        return networkResponse;
      });
    })
  );
});

// Handle push notifications
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Emergency alert from Texas Hill Country Flood Relief',
    icon: '/icon-192.svg',
    badge: '/favicon.svg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Resources',
        icon: '/favicon.svg'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/favicon.svg'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Emergency Alert', options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Background sync for offline actions
self.addEventListener('sync', event => {
  if (event.tag === 'emergency-sync') {
    event.waitUntil(
      // Sync any offline actions when connection is restored
      syncEmergencyData()
    );
  }
});

async function syncEmergencyData() {
  try {
    // Refresh critical data when back online
    const cache = await caches.open(DATA_CACHE_NAME);
    const requests = DATA_FILES.map(file => fetch(file));
    const responses = await Promise.all(requests);
    
    responses.forEach((response, index) => {
      if (response.ok) {
        cache.put(DATA_FILES[index], response.clone());
      }
    });
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}