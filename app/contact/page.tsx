import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-36 pb-16 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-3">Reach Out</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Contact Us</h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Questions, feedback, partnership ideas, or just want to say hi — we read every email.
        </p>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-[#e8e8f0] rounded-3xl p-8 shadow-sm mb-6">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-[#e8e8f0] bg-gray-50 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-indigo-300 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#e8e8f0] bg-gray-50 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-indigo-300 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-[#e8e8f0] bg-gray-50 text-gray-500 text-sm focus:outline-none focus:border-indigo-300 transition-colors">
                  <option value="">Select a topic…</option>
                  <option>General inquiry</option>
                  <option>App support</option>
                  <option>Partnership or collaboration</option>
                  <option>Press or media</option>
                  <option>Bug report</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us what's on your mind…"
                  className="w-full px-4 py-3 rounded-xl border border-[#e8e8f0] bg-gray-50 text-gray-900 placeholder-gray-300 text-sm focus:outline-none focus:border-indigo-300 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-sm font-semibold text-white shadow-md transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Alternate contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-[#e8e8f0] rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <span className="text-xl">📧</span>
              <div>
                <div className="font-semibold text-gray-900 text-sm mb-0.5">Email directly</div>
                <a href="mailto:admin@hugeappfactory.com" className="text-sm text-indigo-500 hover:underline">
                  admin@hugeappfactory.com
                </a>
              </div>
            </div>
            <div className="bg-white border border-[#e8e8f0] rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <span className="text-xl">⏱</span>
              <div>
                <div className="font-semibold text-gray-900 text-sm mb-0.5">Response time</div>
                <div className="text-sm text-gray-500">Usually within 1–2 business days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
