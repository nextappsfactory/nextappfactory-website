import AppPageTemplate from '@/components/AppPageTemplate'

export default function TVRemotePage() {
  return (
    <AppPageTemplate app={{
      name: 'Universal Remote',
      tagline: 'Control any TV or device from your phone.',
      description: 'Universal Remote turns your iPhone into a smart remote for virtually any TV, streaming box, or home theater device. Connect over Wi-Fi or infrared and control your entire entertainment setup from one beautifully simple app.',
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
      features: [
        { icon: '📡', title: 'Wi-Fi Control', desc: 'Control Samsung, LG, Sony, Roku, Apple TV, and more over your home Wi-Fi network.' },
        { icon: '🔦', title: 'IR Blaster Support', desc: 'Works with IR-capable devices for legacy TVs, cable boxes, and AV receivers.' },
        { icon: '🎛', title: 'Full Remote Layout', desc: 'All the buttons you need — power, volume, channels, inputs, navigation, and more.' },
        { icon: '⚡', title: 'Quick Controls', desc: 'Swipe up for volume, swipe left/right for channels. Fast access without looking.' },
        { icon: '🎨', title: 'Custom Layout', desc: 'Rearrange, resize, and hide buttons to build the perfect remote for how you watch.' },
        { icon: '📱', title: 'Multi-Device', desc: 'Switch between multiple TVs or devices instantly — great for living rooms and bedrooms.' },
      ],
      pricing: {
        free: [
          'Control 1 device',
          'Basic remote layout',
          'Wi-Fi control',
          'Volume & channel controls',
        ],
        paid: {
          price: '$2.99',
          label: 'One-time purchase',
          perks: [
            'Everything in Free',
            'Unlimited devices',
            'Custom remote layout',
            'Quick swipe gestures',
            'Ad-free experience',
          ],
        },
      },
    }} />
  )
}
