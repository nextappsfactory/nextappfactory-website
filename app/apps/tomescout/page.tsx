import AppPageTemplate from '@/components/AppPageTemplate'

export default function TomeScoutPage() {
  return (
    <AppPageTemplate app={{
      name: 'TomeScout',
      tagline: 'Find, list, and flip used books for profit.',
      description: 'TomeScout is the smart book reseller\'s companion. Scan any book\'s barcode, instantly see buyback prices across major platforms, and know whether it\'s worth buying before you leave the shelf. Built for thrift store hunters, library sale crawlers, and anyone turning books into cash.',
      icon: '📚',
      gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
      accentColor: '#F59E0B',
      lightBg: '#FFFBEB',
      category: 'Books & Resale',
      homeUrl: 'http://tomescout.nextappfactory.com',
      privacyUrl: 'http://tomescout.nextappfactory.com/privacy',
      supportUrl: 'http://tomescout.nextappfactory.com/support',
      contactEmail: 'contact@tomescout.nextappfactory.com',
      features: [
        { icon: '📷', title: 'Barcode Scanner', desc: 'Point your camera at any ISBN barcode and get instant resale data in under a second.' },
        { icon: '💰', title: 'Buyback Prices', desc: 'See what Amazon, eBay, BookFinder, and other platforms will pay for each book right now.' },
        { icon: '📈', title: 'Profit Calculator', desc: 'Enter what you paid and instantly see your estimated profit after fees and shipping.' },
        { icon: '📦', title: 'Inventory Tracker', desc: 'Log every book you buy and track which ones have sold, shipped, or are still in stock.' },
        { icon: '🔍', title: 'Manual Search', desc: 'Search by title, author, or ISBN when the barcode is damaged or missing.' },
        { icon: '🔒', title: 'Private by Default', desc: 'Your inventory and scan history stay on your device. No account required to get started.' },
      ],
      pricing: {
        free: [
          'Up to 50 scans per month',
          'Live buyback price lookup',
          'Basic profit calculator',
          'Manual ISBN search',
        ],
        paid: {
          price: '$4.99',
          label: 'One-time purchase',
          perks: [
            'Everything in Free',
            'Unlimited scans',
            'Full inventory manager',
            'Scan history & export',
            'Ad-free experience',
          ],
        },
      },
    }} />
  )
}
