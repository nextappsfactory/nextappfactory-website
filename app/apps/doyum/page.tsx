import AppPageTemplate from '@/components/AppPageTemplate'

export default function DoyumPage() {
  return (
    <AppPageTemplate app={{
      name: 'Doyum AI',
      tagline: 'AI-powered calorie tracking, together. Snap, log, share.',
      description: 'Doyum makes nutrition tracking effortless — and social. Take a photo of any meal and our AI instantly identifies the food and logs the calories, macros, and nutrients. Then share Moments with friends, join groups, and keep each other on track. No more manual entry, no more going it alone.',
      icon: '🥗',
      iconImage: '/doyum/icon.png',
      gradient: 'linear-gradient(135deg, #33CDBE, #FF6B6B)',
      accentColor: '#FF6B6B',
      lightBg: '#FFF1F1',
      category: 'Health & Fitness',
      screenshots: ['/doyum/today.png', '/doyum/paywall.png', '/doyum/water.png', '/doyum/welcome.png'],
      homeUrl: 'https://doyum.ai',
      privacyUrl: 'https://doyum.ai/privacy',
      supportUrl: 'https://doyum.ai/support',
      contactEmail: 'admin@nextappfactory.com',
      features: [
        { icon: '📸', title: 'Photo Logging', desc: 'Snap a photo of your meal and AI instantly identifies the food and estimates calories.' },
        { icon: '🧠', title: 'AI Recognition', desc: 'Trained on thousands of foods — from home-cooked meals to restaurant dishes.' },
        { icon: '📊', title: 'Macro Tracking', desc: 'Automatically logs calories, protein, carbs, and fat for every meal.' },
        { icon: '📅', title: 'Daily Dashboard', desc: 'See your full day at a glance — meals logged, calories remaining, and macro balance.' },
        { icon: '🎯', title: 'Custom Goals', desc: 'Set your own calorie and macro targets based on your health goals.' },
        { icon: '📈', title: 'Progress History', desc: 'Track your nutrition over time with weekly and monthly summaries.' },
        { icon: '✨', title: 'Moments', desc: 'Share photos of your meals and milestones, and react and reply to your friends’ posts.' },
        { icon: '👥', title: 'Groups & Friends', desc: 'Follow friends, join groups, and chat one-on-one to keep each other accountable.' },
        { icon: '🌍', title: '29 Languages', desc: 'The whole app speaks your language — and friends’ posts are translated automatically.' },
      ],
      pricing: {
        free: [
          'AI photo food recognition',
          'Up to 5 logs per day',
          'Calorie tracking',
          'Daily summary',
        ],
        paid: {
          price: '$3.99',
          label: 'One-time purchase',
          perks: [
            'Everything in Free',
            'Unlimited daily logs',
            'Full macro breakdown',
            'Weekly & monthly history',
            'Ad-free experience',
          ],
        },
      },
    }} />
  )
}
