import AppPageTemplate from '@/components/AppPageTemplate'

export default function TruthOrDarePage() {
  return (
    <AppPageTemplate app={{
      name: 'Truth or Dare',
      tagline: 'The ultimate party game with 500+ prompts across 5 categories.',
      description: 'Truth or Dare brings the classic party game to life with 500+ hand-crafted prompts across 5 categories. Add your friends, pick a category, and let the cards fly — with smooth animations, multiplayer support, and a one-time upgrade to remove ads forever.',
      icon: '🎲',
      gradient: 'linear-gradient(135deg, #F43F5E, #E11D48)',
      accentColor: '#F43F5E',
      lightBg: '#FFF1F2',
      category: 'Games',
      homeUrl: 'http://truthordare.hugeappfactory.com',
      privacyUrl: 'http://truthordare.hugeappfactory.com/privacy',
      supportUrl: 'http://truthordare.hugeappfactory.com/support',
      features: [
        { icon: '🎭', title: '500+ Prompts', desc: '50 Truths + 50 Dares across 5 categories — always fresh, never boring.' },
        { icon: '👥', title: 'Unlimited Players', desc: 'Add as many players as you want and take turns seamlessly.' },
        { icon: '🗂', title: '5 Categories', desc: 'Family, Friends, Party, Romantic, and Extreme — pick the right vibe.' },
        { icon: '🃏', title: 'Card Flip Animation', desc: 'Satisfying card-flip reveal with smooth, buttery animations.' },
        { icon: '🌙', title: 'Dark Mode', desc: 'Looks great day or night — perfect for late-night game sessions.' },
        { icon: '🛒', title: 'Remove Ads', desc: 'One-time $2.99 purchase removes all ads forever. No subscription.' },
      ],
      pricing: {
        free: [
          'All 500+ prompts',
          'All 5 categories',
          'Unlimited players',
          'Card flip animations',
          'Supported by ads',
        ],
        paid: {
          price: '$2.99',
          label: 'Remove Ads — one time',
          perks: [
            'Everything in Free',
            '100% ad-free forever',
            'No banner or interstitial ads',
            'Supports ongoing development',
          ],
        },
      },
    }} />
  )
}
