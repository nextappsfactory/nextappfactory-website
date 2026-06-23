import AppPageTemplate from '@/components/AppPageTemplate'

export default function DoyumPage() {
  return (
    <AppPageTemplate app={{
      name: 'Doyum AI',
      tagline: 'AI-powered calorie tracking. Just snap a photo.',
      description: 'Doyum makes nutrition tracking effortless. Take a photo of any meal and our AI instantly identifies the food and logs the calories, macros, and nutrients. No more manual entry — just eat, snap, and stay on track.',
      icon: '🥗',
      iconImage: '/doyum/icon.png',
      gradient: 'linear-gradient(135deg, #33CDBE, #FF6B6B)',
      accentColor: '#FF6B6B',
      lightBg: '#FFF1F1',
      category: 'Health & Fitness',
      screenshots: ['/doyum/today.png', '/doyum/paywall.png', '/doyum/water.png', '/doyum/welcome.png'],
      homeUrl: 'http://doyumai.nextappfactory.com',
      privacyUrl: 'http://doyumai.nextappfactory.com/privacy',
      supportUrl: 'http://doyumai.nextappfactory.com/support',
      contactEmail: 'admin@nextappfactory.com',
      features: [
        { icon: '📸', title: 'Photo Logging', desc: 'Snap a photo of your meal and AI instantly identifies the food and estimates calories.' },
        { icon: '🧠', title: 'AI Recognition', desc: 'Trained on thousands of foods — from home-cooked meals to restaurant dishes.' },
        { icon: '📊', title: 'Macro Tracking', desc: 'Automatically logs calories, protein, carbs, and fat for every meal.' },
        { icon: '📅', title: 'Daily Dashboard', desc: 'See your full day at a glance — meals logged, calories remaining, and macro balance.' },
        { icon: '🎯', title: 'Custom Goals', desc: 'Set your own calorie and macro targets based on your health goals.' },
        { icon: '📈', title: 'Progress History', desc: 'Track your nutrition over time with weekly and monthly summaries.' },
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
