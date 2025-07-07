#!/usr/bin/env node

/**
 * Style System Validator for Texas Hill Country Flood Relief
 * 
 * This script validates that components are using the new shadcn-svelte
 * color system instead of old color classes and patterns.
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Color classes that should no longer be used
const DEPRECATED_CLASSES = [
  'text-primary-blue',
  'bg-primary-blue',
  'border-primary-blue',
  'text-primary-light',
  'bg-primary-light',
  'border-primary-light',
  'text-emergency',
  'bg-emergency',
  'border-emergency',
  'hover:bg-primary-blue',
  'hover:text-primary-blue',
  'hover:bg-primary-light',
  'hover:text-primary-light',
  'hover:bg-emergency',
  'hover:text-emergency',
  // Emergency color variants that don't exist
  'bg-emergency-50',
  'bg-emergency-500',
  'border-emergency-500',
  'text-emergency-900',
  'border-emergency-500/20'
];

// Emoji patterns that should be replaced with Lucide icons
// Using descriptive names instead of actual emojis to avoid encoding issues
const EMOJI_PATTERNS = [
  { emoji: '🆘', description: 'SOS emoji', suggestion: 'AlertTriangle' },
  { emoji: '🤝', description: 'Handshake emoji', suggestion: 'HandHeart' },
  { emoji: '🔍', description: 'Search emoji', suggestion: 'Search' },
  { emoji: '🚨', description: 'Siren emoji', suggestion: 'AlertTriangle' },
  { emoji: '⚠️', description: 'Warning emoji', suggestion: 'AlertTriangle' },
  { emoji: '📱', description: 'Mobile phone emoji', suggestion: 'Smartphone' },
  { emoji: '📞', description: 'Phone emoji', suggestion: 'Phone' },
  { emoji: '✉️', description: 'Email emoji', suggestion: 'Mail' },
  { emoji: '🏠', description: 'House emoji', suggestion: 'Home' },
  { emoji: '🏢', description: 'Building emoji', suggestion: 'Building' },
  { emoji: '🏫', description: 'School emoji', suggestion: 'GraduationCap' },
  { emoji: '🎭', description: 'Theater emoji', suggestion: 'Users' },
  { emoji: '💰', description: 'Money bag emoji', suggestion: 'DollarSign' },
  { emoji: '💵', description: 'Dollar bill emoji', suggestion: 'DollarSign' },
  { emoji: '💳', description: 'Credit card emoji', suggestion: 'CreditCard' },
  { emoji: '📦', description: 'Package emoji', suggestion: 'Package' },
  { emoji: '🐾', description: 'Paw prints emoji', suggestion: 'Heart' },
  { emoji: '✅', description: 'Check mark emoji', suggestion: 'CheckCircle' },
  { emoji: '✓', description: 'Check emoji', suggestion: 'Check' },
  { emoji: '✗', description: 'X mark emoji', suggestion: 'X' },
  { emoji: '⭐', description: 'Star emoji', suggestion: 'Star' },
  { emoji: '🏥', description: 'Hospital emoji', suggestion: 'Heart' },
  { emoji: '🙋', description: 'Raising hand emoji', suggestion: 'Users' },
  { emoji: '🩸', description: 'Blood drop emoji', suggestion: 'Droplets' },
  { emoji: '🏛️', description: 'Government building emoji', suggestion: 'Building2' },
  { emoji: '📋', description: 'Clipboard emoji', suggestion: 'FileText' },
  { emoji: '🏦', description: 'Bank emoji', suggestion: 'Landmark' },
  { emoji: '🛡️', description: 'Shield emoji', suggestion: 'Shield' }
];

// Color usage patterns that should use semantic variants
const INLINE_COLOR_PATTERNS = [
  { pattern: /class="[^"]*bg-red-\d+/, suggestion: 'Use variant="destructive" or bg-destructive' },
  { pattern: /class="[^"]*bg-blue-\d+/, suggestion: 'Use variant="default" or bg-primary/bg-secondary' },
  { pattern: /class="[^"]*bg-green-\d+/, suggestion: 'Use variant="success" or bg-success' },
  { pattern: /class="[^"]*bg-orange-\d+/, suggestion: 'Use variant="warning" or bg-warning' },
  { pattern: /class="[^"]*text-red-\d+/, suggestion: 'Use text-destructive' },
  { pattern: /class="[^"]*text-blue-\d+/, suggestion: 'Use text-primary or text-secondary' },
  { pattern: /class="[^"]*text-green-\d+/, suggestion: 'Use text-success' },
  { pattern: /class="[^"]*text-orange-\d+/, suggestion: 'Use text-warning' }
];

let totalIssues = 0;
let totalFiles = 0;

// Safely encode emojis to avoid Unicode issues
function safeEmojiDisplay(emoji) {
  try {
    // Convert emoji to Unicode escape sequence for safe display
    return emoji.split('').map(char => {
      const code = char.codePointAt(0);
      if (code > 127) {
        return `U+${code.toString(16).toUpperCase()}`;
      }
      return char;
    }).join('');
  } catch (e) {
    return '[EMOJI]';
  }
}

function findSvelteFiles(dir, files = []) {
  const items = readdirSync(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      findSvelteFiles(fullPath, files);
    } else if (extname(item) === '.svelte') {
      files.push(fullPath);
    }
  }

  return files;
}

function validateFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const relativePath = filePath.replace(projectRoot + '/', '');
  const issues = [];

  // Check for deprecated color classes
  for (const deprecatedClass of DEPRECATED_CLASSES) {
    const regex = new RegExp(`\\b${deprecatedClass}\\b`, 'g');
    const matches = content.match(regex);
    if (matches) {
      const lineNumbers = getLineNumbers(content, deprecatedClass);
      issues.push({
        type: 'deprecated-class',
        class: deprecatedClass,
        lines: lineNumbers,
        suggestion: getSuggestionForClass(deprecatedClass)
      });
    }
  }

  // Check for emojis
  for (const { emoji, description, suggestion } of EMOJI_PATTERNS) {
    if (content.includes(emoji)) {
      const lineNumbers = getLineNumbers(content, emoji);
      issues.push({
        type: 'emoji-usage',
        emoji,
        description,
        lines: lineNumbers,
        suggestion
      });
    }
  }

  // Check for inline color patterns
  for (const { pattern, suggestion } of INLINE_COLOR_PATTERNS) {
    const matches = content.match(pattern);
    if (matches) {
      issues.push({
        type: 'inline-color',
        pattern: pattern.toString(),
        suggestion
      });
    }
  }

  if (issues.length > 0) {
    console.log(`\nFile: ${relativePath}`);
    console.log('-'.repeat(relativePath.length + 6));

    for (const issue of issues) {
      totalIssues++;

      switch (issue.type) {
        case 'deprecated-class':
          console.log(`[DEPRECATED] Class: ${issue.class}`);
          console.log(`  Lines: ${issue.lines.join(', ')}`);
          console.log(`  Fix: ${issue.suggestion}`);
          break;

        case 'emoji-usage':
          console.log(`[EMOJI] Found: ${issue.description} (${safeEmojiDisplay(issue.emoji)})`);
          console.log(`  Lines: ${issue.lines.join(', ')}`);
          console.log(`  Fix: Replace with <${issue.suggestion} class="h-4 w-4" />`);
          break;

        case 'inline-color':
          console.log(`[COLOR] Hardcoded color pattern detected`);
          console.log(`  Fix: ${issue.suggestion}`);
          break;
      }
      console.log();
    }
  }

  return issues.length;
}

function getLineNumbers(content, searchTerm) {
  const lines = content.split('\n');
  const lineNumbers = [];

  lines.forEach((line, index) => {
    if (line.includes(searchTerm)) {
      lineNumbers.push(index + 1);
    }
  });

  return lineNumbers;
}

function getSuggestionForClass(deprecatedClass) {
  const suggestions = {
    'text-primary-blue': 'Use text-primary',
    'bg-primary-blue': 'Use bg-primary or variant="default"',
    'border-primary-blue': 'Use border-primary',
    'text-primary-light': 'Use text-secondary',
    'bg-primary-light': 'Use bg-secondary or variant="secondary"',
    'border-primary-light': 'Use border-secondary',
    'text-emergency': 'Use text-destructive',
    'bg-emergency': 'Use bg-destructive or variant="destructive"',
    'border-emergency': 'Use border-destructive',
    'hover:bg-primary-blue': 'Use hover:bg-primary',
    'hover:text-primary-blue': 'Use hover:text-primary',
    'hover:bg-primary-light': 'Use hover:bg-secondary',
    'hover:text-primary-light': 'Use hover:text-secondary',
    'hover:bg-emergency': 'Use hover:bg-destructive',
    'hover:text-emergency': 'Use hover:text-destructive',
    'bg-emergency-50': 'Use bg-destructive/10',
    'bg-emergency-500': 'Use bg-destructive',
    'border-emergency-500': 'Use border-destructive',
    'text-emergency-900': 'Use text-destructive',
    'border-emergency-500/20': 'Use border-destructive/20'
  };

  return suggestions[deprecatedClass] || 'Update to use semantic color system';
}

function main() {
  console.log('Texas Hill Country Flood Relief - Style System Validator');
  console.log('='.repeat(60));
  console.log('Checking for deprecated color classes, emojis, and patterns...\n');

  const srcDir = join(projectRoot, 'src');
  const svelteFiles = findSvelteFiles(srcDir);

  totalFiles = svelteFiles.length;

  for (const file of svelteFiles) {
    validateFile(file);
  }

  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`Files scanned: ${totalFiles}`);
  console.log(`Issues found: ${totalIssues}`);

  if (totalIssues === 0) {
    console.log('SUCCESS: All files are using the modern style system!');
  } else {
    console.log(`\nNEXT STEPS:`);
    console.log('1. Replace deprecated color classes with semantic variants');
    console.log('2. Convert emojis to Lucide icons');
    console.log('3. Use component variants instead of hardcoded colors');
    console.log('4. Refer to STYLE_GUIDE.md for usage examples');
  }

  console.log('\nRESOURCES:');
  console.log('• Style Guide: ./STYLE_GUIDE.md');
  console.log('• Component Reference: ./COMPONENT_REFERENCE.md');
  console.log('• Lucide Icons: https://lucide.dev/icons/');

  // Exit with error code if issues found (for CI/CD)
  process.exit(totalIssues > 0 ? 1 : 0);
}

main();
