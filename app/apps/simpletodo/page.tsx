import AppPageTemplate from '@/components/AppPageTemplate'

export default function SimpleTodoPage() {
  return (
    <AppPageTemplate app={{
      name: 'Simple-toDo',
      tagline: 'Minimal, distraction-free task management for focused people.',
      description: 'Simple-toDo is the to-do app that gets out of your way. No accounts, no sync setup, no onboarding wizard — just open the app and add a task. Built with SwiftUI for a native, snappy feel, and designed to respect your focus.',
      icon: '✅',
      gradient: 'linear-gradient(135deg, #A855F7, #7C3AED)',
      accentColor: '#A855F7',
      lightBg: '#FAF5FF',
      category: 'Productivity',
      homeUrl: 'http://simpletodo.hugeappfactory.com',
      privacyUrl: 'http://simpletodo.hugeappfactory.com/privacy',
      supportUrl: 'http://simpletodo.hugeappfactory.com/support',
      features: [
        { icon: '⚡', title: 'Lightning Fast', desc: 'Open the app, add a task, done. Zero friction from start to finish.' },
        { icon: '🎨', title: 'Beautiful UI', desc: 'Thoughtfully designed with SwiftUI for a truly native iOS feel.' },
        { icon: '🔒', title: 'Private by Default', desc: 'Your tasks stay on your device. No account or internet required.' },
        { icon: '📋', title: 'Lists & Folders', desc: 'Organize tasks into lists and folders to keep projects separate.' },
        { icon: '🔔', title: 'Reminders', desc: 'Set due dates and reminders so nothing slips through the cracks.' },
        { icon: '🌙', title: 'Dark Mode', desc: 'Looks stunning in both light and dark mode — follows your system setting.' },
      ],
    }} />
  )
}
