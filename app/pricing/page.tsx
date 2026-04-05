'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const starterFeatures = [
  `5 document templates`,
  `30 documents/month`,
  `Drag-drop field editor`,
  `E-signatures (all devices)`,
  `Audit trail and certificate`,
  `Email notifications`,
  `PDF download`,
  `Email support`,
]
const proFeatures = [
  `Everything in Starter`,
  `Unlimited templates`,
  `Unlimited documents`,
  `Bulk send`,
  `Custom branding`,
  `Team management`,
  `Advanced audit trail`,
  `Priority support`,
  `API access`,
]
const compRows = [
  { feature: `Templates included`, starter: `5 templates`, pro: `Unlimited` },
  { feature: `Documents per month`, starter: `30 docs/mo`, pro: `Unlimited` },
  { feature: `Drag-drop editor`, starter: true, pro: true },
  { feature: `E-signatures`, starter: true, pro: true },
  { feature: `Audit trail`, starter: true, pro: true },
  { feature: `Email notifications`, starter: true, pro: true },
  { feature: `Bulk send`, starter: false, pro: true },
  { feature: `Custom branding`, starter: false, pro: true },
  { feature: `Team management`, starter: false, pro: true },
  { feature: `API access`, starter: false, pro: true },
  { feature: `Priority support`, starter: false, pro: true },
]
const faqs = [
  { q: `Are ZiggyDocs signatures legally binding?`, a: `Yes. ZiggyDocs e-signatures comply with the ESIGN Act and UETA in the US, and eIDAS in the EU. Every document includes a tamper-evident audit trail with timestamps and IP addresses.` },
  { q: `Does the recipient need an account to sign?`, a: `No. Recipients receive a unique signing link via email. They can sign from any device without creating an account or installing software.` },
  { q: `Are there per-document fees?`, a: `No. Starter includes 30 documents per month at a flat $15/mo. Pro includes unlimited documents at $25/mo. No per-envelope fees, ever.` },
  { q: `Can I use my own branding?`, a: `Pro plan users can fully white-label ZiggyDocs — custom logo, brand colors, custom email sender name, and optionally a custom signing page domain.` },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7c3aed] mb-4">Pricing</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Simple, honest pricing</h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto">No seat traps. No hidden fees. Just a price that works.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8">
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Starter</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-6xl font-bold text-white">$15</span><span className="text-[#b3b3b3] mb-2 text-lg">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">5 templates · 30 docs/month</p>
              <Link href="https://app.ziggydocs.com/signup" className="block w-full text-center px-6 py-3.5 bg-[#7c3aed]/10 border border-[#7c3aed]/30 text-[#7c3aed] rounded-xl font-semibold hover:bg-[#7c3aed]/20 transition-all mb-6">Start free trial</Link>
              <ul className="space-y-3">{starterFeatures.map((f) => <li key={f} className="flex items-start gap-3 text-[#b3b3b3] text-sm"><svg className="w-4 h-4 text-[#7c3aed] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>{f}</li>)}</ul>
            </div>
            <div className="bg-[#111111] border-2 border-[#7c3aed]/40 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-6"><span className="px-3 py-1 bg-[#7c3aed] text-white text-xs font-bold rounded-full uppercase">Most Popular</span></div>
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-6xl font-bold text-white">$25</span><span className="text-[#b3b3b3] mb-2 text-lg">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">Unlimited templates · Unlimited docs</p>
              <Link href="https://app.ziggydocs.com/signup" className="block w-full text-center px-6 py-3.5 bg-[#7c3aed] text-white rounded-xl font-semibold hover:opacity-90 transition-all mb-6">Start free trial</Link>
              <ul className="space-y-3">{proFeatures.map((f) => <li key={f} className="flex items-start gap-3 text-[#b3b3b3] text-sm"><svg className="w-4 h-4 text-[#7c3aed] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>{f}</li>)}</ul>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Feature comparison</h2>
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden mb-16">
            <div className="grid grid-cols-3 bg-[#1a1a1a] border-b border-[#1f1f1f]">
              <div className="p-4 text-sm font-semibold text-[#b3b3b3]">Feature</div>
              <div className="p-4 text-sm font-semibold text-white text-center">Starter</div>
              <div className="p-4 text-sm font-semibold text-[#7c3aed] text-center">Pro</div>
            </div>
            {compRows.map((r) => (
              <div key={r.feature} className="grid grid-cols-3 border-b border-[#1f1f1f] last:border-0 hover:bg-[#151515]">
                <div className="p-4 text-sm text-[#b3b3b3]">{r.feature}</div>
                <div className="p-4 text-center">
                  {typeof r.starter === 'boolean' ? (r.starter ? <svg className="w-5 h-5 text-[#7c3aed] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> : <svg className="w-5 h-5 text-[#555] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>) : <span className="text-sm text-[#b3b3b3]">{r.starter}</span>}
                </div>
                <div className="p-4 text-center">
                  {typeof r.pro === 'boolean' ? (r.pro ? <svg className="w-5 h-5 text-[#7c3aed] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> : <svg className="w-5 h-5 text-[#555] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>) : <span className="text-sm text-[#7c3aed] font-medium">{r.pro}</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 mb-8 text-center">
            <p className="text-[#b3b3b3] text-sm mb-2">vs the competition</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div><p className="text-[#b3b3b3] text-sm">DocuSign</p><p className="text-2xl font-bold text-white">$45<span className="text-base text-[#b3b3b3]">/mo</span></p></div>
              <div><p className="text-[#7c3aed] text-sm font-medium">ZiggyDocs</p><p className="text-2xl font-bold text-[#7c3aed]">$15<span className="text-base text-[#b3b3b3]">/mo</span></p></div>
              <div><p className="text-[#b3b3b3] text-sm">Dropbox Sign</p><p className="text-2xl font-bold text-white">$20<span className="text-base text-[#b3b3b3]">/mo</span></p></div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Pricing FAQ</h2>
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-white font-semibold pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#7c3aed] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && <div className="px-6 pb-6"><p className="text-[#b3b3b3] leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Start your free trial today</h2>
          <p className="text-xl text-[#b3b3b3] mb-8">14 days free. No credit card required.</p>
          <Link href="https://app.ziggydocs.com/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-[#7c3aed] text-white rounded-xl font-bold text-xl hover:opacity-90 transition-all">Start Free Trial</Link>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
