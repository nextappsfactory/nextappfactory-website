import AppPageTemplate from '@/components/AppPageTemplate'

export default function StockLensPage() {
  return (
    <AppPageTemplate app={{
      name: 'StockLens',
      tagline: 'Smart stock tracking and portfolio analysis at a glance.',
      description: 'StockLens is the clearest way to watch your investments. Track your entire portfolio in real time, set price alerts, and analyze market trends with beautiful charts — all in one clean, fast app built natively for iOS.',
      icon: '📊',
      gradient: 'linear-gradient(135deg, #0EA5E9, #6366F1)',
      accentColor: '#0EA5E9',
      lightBg: '#EFF6FF',
      category: 'Finance',
      homeUrl: 'http://stocklens.hugeappfactory.com',
      privacyUrl: 'http://stocklens.hugeappfactory.com/privacy',
      supportUrl: 'http://stocklens.hugeappfactory.com/support',
      features: [
        { icon: '📈', title: 'Real-Time Quotes', desc: 'Live stock prices and market data updated instantly so you never miss a move.' },
        { icon: '📂', title: 'Portfolio Tracking', desc: 'Track all your holdings in one place and see your total performance at a glance.' },
        { icon: '🔔', title: 'Price Alerts', desc: 'Set a target price and get notified the moment a stock hits it.' },
        { icon: '📉', title: 'Charts & Analytics', desc: 'Beautiful, interactive charts to analyze price history and trends over time.' },
        { icon: '🔍', title: 'Smart Search', desc: 'Find any stock, ETF, or fund instantly by ticker symbol or company name.' },
        { icon: '🗂', title: 'Custom Watchlists', desc: 'Organize stocks into named watchlists to stay focused on what matters.' },
      ],
      pricing: {
        free: [
          'Real-time stock quotes',
          'Up to 10 watchlist items',
          'Basic portfolio tracking',
          'Supported by non-intrusive ads',
        ],
        paid: {
          price: '$4.99',
          label: 'One-time purchase',
          perks: [
            'Everything in Free',
            'Unlimited watchlist items',
            'Price alerts (unlimited)',
            'Advanced chart indicators',
            'Ad-free experience',
          ],
        },
      },
    }} />
  )
}
