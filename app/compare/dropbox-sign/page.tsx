import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const rows = [
  { feature: `Templates included`, ziggy: `Unlimited` },
  { feature: `Documents per month`, ziggy: `Unlimited` },
  { feature: `Drag-drop editor`, ziggy: true },
  { feature: `E-signatures`, ziggy: true },
  { feature: `Audit trail`, ziggy: true },
  { feature: `Email notifications`, ziggy: true },
  { feature: `Bulk send`, ziggy: true },
  { feature: `Custom branding`, ziggy: true },
  { feature: `Team management`, ziggy: true },
  { feature: `API access`, ziggy: true },
  { feature: `Priority support`, ziggy: true },
]
const reasons = [
  `Save money every month — Dropbox Sign charges $20/mo. ZiggyDocs starts at $15/mo.`,
  `ZiggyDocs is built for how small businesses actually operate — not enterprise workflows.`,
  `Get up and running in under an hour. No lengthy onboarding required.`,
  `ZiggyDocs integrates natively with all 9 other ZiggyTech apps. No API setup needed.`,
]

export default function ComparePage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="relative overflow-hidden pt-20 pb-20 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7c3aed]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#2d2d2d] rounded-full px-4 py-1.5 text-sm text-[#b3b3b3] mb-8">ZiggyDocs vs Dropbox Sign</div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-[#7c3aed]">ZiggyDocs</span> vs <span className="text-[#b3b3b3]">Dropbox Sign</span>
          </h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto mb-10">The honest comparison. Same core features. Better pricing for small teams.</p>
          <Link href="https://app.ziggydocs.com/signup" className="bg-[#7c3aed] text-white rounded-xl px-8 py-4 font-semibold text-lg hover:opacity-90 inline-block">Try ZiggyDocs Free</Link>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#111111] border-y border-[#2d2d2d]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">The verdict</h2>
          <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl p-6">
            <p className="text-[#b3b3b3] leading-relaxed">Dropbox Sign starts at $20/mo but limits you to 5 documents per month on the lowest tier. ZiggyDocs gives you 30 docs/month at $15, or unlimited for $25, plus native ZiggyTech Suite sync.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-[#111111] border-2 border-[#7c3aed]/40 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="px-3 py-1 bg-[#7c3aed] text-white text-xs font-bold rounded-full uppercase">Recommended</span></div>
              <p className="text-xl font-bold text-white mb-2">ZiggyDocs</p>
              <p className="text-5xl font-bold text-[#7c3aed] mb-1">$15<span className="text-xl text-[#b3b3b3]">/mo</span></p>
              <p className="text-sm text-[#7c3aed] mt-2">Full ZiggyTech Suite integration</p>
            </div>
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 text-center">
              <p className="text-xl font-bold text-white mb-2">Dropbox Sign</p>
              <p className="text-5xl font-bold text-white mb-1">$20<span className="text-xl text-[#b3b3b3]">/mo</span></p>
              <p className="text-sm text-[#b3b3b3] mt-2">No suite integration</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">Why teams switch to ZiggyDocs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {reasons.map((r, i) => <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 hover:border-[#7c3aed]/30 transition-colors"><p className="text-[#b3b3b3] text-sm leading-relaxed">{r}</p></div>)}
          </div>
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden mb-16">
            <div className="grid grid-cols-3 bg-[#1a1a1a] border-b border-[#1f1f1f]">
              <div className="p-4 text-sm font-semibold text-[#b3b3b3]">Feature</div>
              <div className="p-4 text-sm font-semibold text-[#7c3aed] text-center">ZiggyDocs</div>
              <div className="p-4 text-sm font-semibold text-[#b3b3b3] text-center">Dropbox Sign</div>
            </div>
            {rows.map((r) => (
              <div key={r.feature} className="grid grid-cols-3 border-b border-[#1f1f1f] last:border-0">
                <div className="p-4 text-sm text-[#b3b3b3]">{r.feature}</div>
                <div className="p-4 text-center">
                  {typeof r.ziggy === 'boolean' ? <svg className="w-5 h-5 text-[#7c3aed] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> : <span className="text-sm text-[#7c3aed] font-medium">{r.ziggy}</span>}
                </div>
                <div className="p-4 text-center">
                  <svg className="w-5 h-5 text-[#555] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center py-12 bg-[#111111] rounded-2xl border border-[#1f1f1f]">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to make the switch?</h2>
            <p className="text-[#b3b3b3] mb-8">14-day free trial. No credit card. Cancel anytime.</p>
            <Link href="https://app.ziggydocs.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#7c3aed] text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all">Try ZiggyDocs Free</Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
