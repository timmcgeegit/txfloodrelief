# Texas Hill Country Flood Relief Website

**Emergency resource website for flood victims in the Texas Hill Country.**

This is a Progressive Web App (PWA) that provides critical emergency resources, built with SvelteKit and optimized for mobile devices and offline access during crisis situations.

## 🚨 Emergency Features

- **📱 Installable PWA**: Add to home screen on any device
- **🌐 Offline Access**: Critical emergency contacts work without internet
- **🔔 Push Notifications**: Emergency alerts and resource updates
- **⚡ Fast Loading**: Optimized for poor network conditions
- **🆘 Emergency First**: Three clear action paths - Get Help, Give Help, Find Someone

## 🎯 Core Philosophy

- **Simple**: Minimize cognitive load for stressed users
- **Fast**: Must load on poor mobile connections 
- **Action-focused**: Clear paths to emergency resources
- **Maintainable**: Volunteers can update without technical expertise
- **Offline-capable**: Essential information available without internet

## 🛠 Tech Stack

- **Framework**: SvelteKit with Svelte 5
- **Styling**: Tailwind CSS 4 + shadcn-svelte
- **PWA**: Service Worker + Web App Manifest
- **Notifications**: Push notifications with offline support
- **Data**: Static JSON files (no database required)
- **Deployment**: Vercel
- **Package Manager**: pnpm

## 🏗 Project Structure

```
src/
├── routes/
│   ├── +layout.svelte          # Main layout with PWA setup
│   ├── +page.svelte            # Homepage with action cards
│   ├── offline/                # Offline fallback page
│   ├── settings/               # PWA settings and notifications
│   ├── get-help/               # Emergency resources
│   │   ├── shelter/            # Emergency shelters
│   │   ├── food-water/         # Food distribution
│   │   └── financial/          # FEMA/SBA assistance
│   ├── give-help/              # Donation/volunteer info
│   └── find-someone/           # Reunification resources
├── lib/
│   ├── components/ui/          # shadcn-svelte components
│   ├── data/                   # JSON data files
│   └── utils/
│       └── notifications.js    # PWA notification system
└── static/
    ├── sw.js                   # Service Worker
    ├── manifest.json           # PWA manifest
    └── icon-*.svg              # App icons
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd flood-relief

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Development

```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Run linting
pnpm run lint
```

## 📱 PWA Features

### Installation
- **Mobile**: "Add to Home Screen" in browser menu
- **Desktop**: Install icon in address bar
- **Shortcuts**: Quick access to Get Help, Give Help, Find Someone

### Offline Support
- **9 critical pages** cached for offline access
- **Emergency contacts** always available (911, FEMA, SBA, etc.)
- **Offline fallback page** with essential emergency information
- **Background sync** refreshes data when connection restored

### Push Notifications
- **Smart permission flow** (requests after 10 seconds)
- **Emergency alerts** with high priority and vibration
- **Resource updates** for shelter capacity, new food sites
- **Weather alerts** with severity levels
- **User control** via settings page

## 📊 Data Management

### JSON Data Files
```
src/lib/data/
├── shelters.json              # Emergency shelter information
├── food-sites.json            # Food distribution locations  
├── financial-assistance.json  # FEMA/SBA/legal aid programs
├── contacts.json              # Emergency contact directory
└── resources.json             # Additional resources
```

### Updating Content
1. Edit appropriate JSON file in `src/lib/data/`
2. Update `lastUpdated` timestamp
3. Commit changes
4. Auto-deployment triggers within ~45 seconds

## 🎨 Design System

### Emergency Color Palette
- **Emergency Red**: #dc2626 (urgent alerts, 911)
- **Safety Blue**: #3b82f6 (resources, information)
- **Support Green**: #16a34a (help/donation actions)
- **Warning Orange**: #ea580c (offline status, cautions)

### Typography
- **Minimum font size**: 14px (outdoor mobile viewing)
- **Base size**: 16px
- **High contrast ratios** for emergency conditions

### Mobile-First Design
- **Touch targets**: Minimum 44x44px
- **Emergency contacts**: One-tap calling
- **Simple navigation**: Bottom nav with emergency access

## 🧪 Testing

### PWA Testing Checklist
- [ ] Install app via "Add to Home Screen"
- [ ] Test offline functionality (disconnect internet)
- [ ] Verify emergency contacts work offline
- [ ] Test notification permission flow
- [ ] Check Service Worker registration
- [ ] Validate manifest with web.dev tools

### Cross-Browser Testing
- **Chrome**: Full PWA support ✅
- **Edge**: Full PWA support ✅  
- **Safari**: Basic PWA support (limited notifications) ⚠️
- **Firefox**: Limited PWA support ⚠️

### Performance Requirements
- **Page load**: <3 seconds on 3G
- **Offline load**: <1 second from cache
- **PWA overhead**: <15KB total

## 📖 Documentation

### Main Documentation
- **`CLAUDE.md`**: Complete project documentation with PWA details
- **`.claude/`**: Development session logs and architectural decisions

### Key Documentation Files
- **`.claude/development-log.md`**: Session tracking and progress
- **`.claude/decisions.md`**: Architectural decision records
- **`.claude/pwa-implementation.md`**: Complete PWA technical guide
- **`.claude/session-notes.md`**: Quick reference for current state

## 🚨 Emergency Procedures

### If Site Goes Down
1. Check Vercel status page
2. Rollback to previous deployment
3. Deploy static backup to GitHub Pages

### Quick Content Updates
1. Edit JSON files directly in GitHub
2. Commit triggers auto-deploy
3. Changes live in ~45 seconds

### Emergency Push Notifications
```javascript
import { showEmergencyAlert } from '$lib/utils/notifications.js';

// High-priority emergency alert
showEmergencyAlert(
  'Flash flood warning: Seek higher ground immediately',
  '/updates'
);
```

## 📋 Content Verification

Some organizations in the data files require manual verification. See `organization-verification-needed.md` for:
- Shelter locations and contact verification
- Food distribution site confirmation
- Hours of operation validation

## 🤝 Contributing

### For Volunteers (Content Updates)
1. Edit JSON files in `src/lib/data/`
2. Keep emergency contact information current
3. Verify organization details regularly
4. Update timestamps when making changes

### For Developers
1. Follow Svelte 5 syntax throughout
2. Maintain PWA functionality
3. Test offline capabilities
4. Keep documentation updated
5. Prioritize performance and accessibility

### Emergency Contact Updates
- Verify phone numbers work
- Check organization operating hours
- Confirm website URLs
- Update capacity information

## 📞 Emergency Contacts

**Always Available (Cached Offline)**:
- Emergency: 911
- Kerr County Emergency: 830-315-2430
- FEMA Disaster Assistance: 800-621-3362
- Camp Mystic Hotline: 830-258-1111

## 📈 Performance Metrics

- **Build Time**: ~4.69s
- **PWA Overhead**: <15KB
- **Cached Pages**: 9 critical pages
- **Offline Contacts**: 15+ emergency numbers
- **Load Time**: <3s on 3G networks

## 🔒 Security & Privacy

- **No user data collection**
- **No analytics tracking**
- **Local-only notifications**
- **Static file deployment**
- **No database or user accounts**

---

## 📝 License

This project is built for emergency relief purposes. Use freely to help flood victims and communities in crisis.

---

**Remember**: This site saves lives. Keep it simple, fast, and accurate.

For technical support or emergency content updates, see the contact information in the main documentation.