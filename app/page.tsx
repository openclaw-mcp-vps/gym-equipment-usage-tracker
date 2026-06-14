export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          IoT + Manual Logging
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Stop Guessing When Your{' '}
          <span className="text-[#58a6ff]">Gym Equipment</span> Needs Service
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          GymTrack monitors equipment usage in real time, predicts maintenance windows before breakdowns happen, and keeps your members happy with zero downtime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial — $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📡</div>
            <h3 className="text-white font-semibold mb-2">IoT Sensor Integration</h3>
            <p className="text-[#8b949e] text-sm">Connect sensors to treadmills, bikes, and weight machines for automatic usage tracking.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🔧</div>
            <h3 className="text-white font-semibold mb-2">Predictive Maintenance</h3>
            <p className="text-[#8b949e] text-sm">AI-powered alerts tell you exactly when each piece of equipment needs servicing.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📊</div>
            <h3 className="text-white font-semibold mb-2">Usage Analytics</h3>
            <p className="text-[#8b949e] text-sm">See peak hours, most-used machines, and utilization rates across your entire facility.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full">
            MOST POPULAR
          </span>
          <h3 className="text-white text-xl font-bold mb-2">Pro Plan</h3>
          <div className="text-5xl font-bold text-white mb-1">
            $19<span className="text-2xl text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-8">Per gym location. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited equipment tracking',
              'IoT sensor support (up to 50 devices)',
              'Predictive maintenance alerts',
              'Usage analytics dashboard',
              'Email & SMS notifications',
              'CSV export & reporting',
              'Priority support',
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Free
          </a>
          <p className="text-[#8b949e] text-xs mt-4">14-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Do I need IoT sensors to use GymTrack?</h3>
            <p className="text-[#8b949e] text-sm">No. You can log equipment usage manually through our dashboard. IoT sensors are optional and enhance automation, but the app works fully without them.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does predictive maintenance work?</h3>
            <p className="text-[#8b949e] text-sm">GymTrack tracks cumulative usage hours and cycles per machine. Based on manufacturer guidelines and your historical data, it alerts you before equipment is likely to fail.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I manage multiple gym locations?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Each location is billed at $19/mo and gets its own dashboard. You can switch between locations from a single account with a unified overview.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>&copy; {new Date().getFullYear()} GymTrack. All rights reserved.</p>
      </footer>
    </main>
  )
}
