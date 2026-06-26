import AppPageTemplate from '@/components/AppPageTemplate'

export default function TVRemotePage() {
  return (
    <AppPageTemplate app={{
      name: 'Universal Remote',
      tagline: 'Turn your phone into the only TV remote you need.',
      description: 'Universal Remote turns your iPhone into a smart remote for your TV. It finds your TV on Wi-Fi and pairs with a code shown on screen — no settings to change. Navigate with a D-pad or swipe trackpad, type with the phone keyboard, launch and search inside 50+ apps, switch between multiple TVs in a tap, and set a sleep timer or bedtime lock. No ads, no accounts, nothing leaves your phone.',
      icon: '📺',
      iconImage: '/tvremote/icon.png',
      gradient: 'linear-gradient(135deg, #6366F1, #4338CA)',
      accentColor: '#6366F1',
      lightBg: '#EEF2FF',
      category: 'Utilities',
      homeUrl: 'http://tvremote.nextappfactory.com',
      privacyUrl: 'http://tvremote.nextappfactory.com/privacy',
      supportUrl: 'http://tvremote.nextappfactory.com/support',
      contactEmail: 'admin@nextappfactory.com',
      screenshots: [
        '/tvremote/remote.png',
        '/tvremote/apps.png',
        '/tvremote/bedtime.png',
        '/tvremote/pairing.png',
      ],
      features: [
        { icon: '📡', title: 'Wi-Fi pairing, no setup', desc: 'Finds Android TV, Roku, Samsung, LG and Fire TV on your network and pairs with an on-screen code — no TV settings to change.' },
        { icon: '🕹', title: 'D-pad & swipe trackpad', desc: 'Navigate with a glossy D-pad or a real touch trackpad, plus a number pad, volume, channels, inputs and media keys.' },
        { icon: '🔎', title: 'Apps & search', desc: 'Open Netflix, YouTube, Prime, Disney+ and 50+ apps — and run a search straight inside them from your phone.' },
        { icon: '🔀', title: 'Multiple TVs', desc: 'Save every TV, switch with one tap, and nickname each one like “Living Room” or “Bedroom.”' },
        { icon: '🌙', title: 'Sleep timer & Bedtime Lock', desc: 'Turn the TV off after a set time — and keep it off behind a parent PIN, even if the kids grab the real remote.' },
        { icon: '🔒', title: 'Private by design', desc: 'No ads, no accounts, no tracking. Everything stays on your phone and your local network.' },
      ],
      pricing: {
        free: [
          'Control one TV',
          'D-pad, trackpad & number pad',
          'Launch apps & search',
          'Volume, channels & inputs',
        ],
        paid: {
          price: '$29.99',
          label: 'Lifetime — or $4.99/year, 14-day free trial',
          perks: [
            'Everything in Free',
            'Unlimited TVs + one-tap switching',
            'Sleep timer & Bedtime Lock',
            'Cast web, video & IPTV to your TV',
            'No ads, ever',
          ],
        },
      },
    }} />
  )
}
