import AppPageTemplate from '@/components/AppPageTemplate'

export default function FlipScoutPage() {
  return (
    <AppPageTemplate app={{
      name: 'FlipScout',
      tagline: 'Find, evaluate, and profit from real estate flip opportunities.',
      description: 'FlipScout puts the tools of a professional house flipper in your pocket. Scan properties, calculate repair costs, estimate your after-repair value, and know instantly whether a deal is worth pursuing — all before you leave the driveway.',
      icon: '🏠',
      gradient: 'linear-gradient(135deg, #10B981, #059669)',
      accentColor: '#10B981',
      lightBg: '#ECFDF5',
      category: 'Real Estate',
      homeUrl: 'http://flipscout.nextappfactory.com',
      privacyUrl: 'http://flipscout.nextappfactory.com/privacy',
      supportUrl: 'http://flipscout.nextappfactory.com/support',
      contactEmail: 'contact@flipscout.nextappfactory.com',
      features: [
        { icon: '📸', title: 'Property Scanner', desc: 'Use your camera to photograph and log properties on the spot.' },
        { icon: '💰', title: 'Profit Calculator', desc: 'Enter purchase price, repair costs, and ARV to instantly see your estimated profit.' },
        { icon: '📊', title: 'ROI Analysis', desc: 'Instant return-on-investment breakdowns for every deal you scout.' },
        { icon: '📋', title: 'Inventory Manager', desc: 'Track every property you have in progress with status updates and notes.' },
        { icon: '🗺', title: 'Deal Finder', desc: 'Browse potential flip opportunities in your target neighborhood.' },
        { icon: '🔐', title: 'Apple Sign-In', desc: 'Secure, private authentication. Your deal data stays yours.' },
      ],
      pricing: {
        free: [
          'Up to 5 saved properties',
          'Profit calculator',
          'Basic ROI analysis',
          'Camera property logging',
        ],
        paid: {
          price: '$6.99',
          label: 'One-time purchase',
          perks: [
            'Everything in Free',
            'Unlimited saved properties',
            'Advanced ROI reports',
            'Deal comparison view',
            'Export to PDF',
          ],
        },
      },
    }} />
  )
}
