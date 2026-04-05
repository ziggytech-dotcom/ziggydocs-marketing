'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const faqs = [
  { q: `Are ZiggyDocs signatures legally binding?`, a: `Yes. ZiggyDocs e-signatures comply with the ESIGN Act and UETA in the US, and eIDAS in the EU. Every document includes a tamper-evident audit trail with timestamps and IP addresses.` },
  { q: `Does the recipient need an account to sign?`, a: `No. Recipients receive a unique signing link via email. They can sign from any device without creating an account or installing software.` },
  { q: `Are there per-document fees?`, a: `No. Starter includes 30 documents per month at a flat $15/mo. Pro includes unlimited documents at $25/mo. No per-envelope fees, ever.` },
  { q: `Can I use my own branding?`, a: `Pro plan users can fully white-label ZiggyDocs — custom logo, brand colors, custom email sender name, and optionally a custom signing page domain.` },
  { q: `How do I know when a document has been signed?`, a: `You receive an email notification immediately when signed. Real-time status is in your dashboard. The completed document is automatically sent to all parties.` },
  { q: `Can I send the same contract to multiple people at once?`, a: `Yes — use Bulk Send (Pro plan). Upload a CSV of recipients and ZiggyDocs sends each person their own unique signing link. Track completion in real time.` },
]

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7c3aed] mb-4">FAQ</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Frequently asked questions</h1>
          <p className="text-xl text-[#b3b3b3]">Everything you need to know about ZiggyDocs.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3 mb-16">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#7c3aed]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#7c3aed] flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {open === i && <div className="px-6 md:px-8 pb-6 md:pb-8"><p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
          <div className="bg-[#111111] border border-[#7c3aed]/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Still have questions?</h2>
            <p className="text-[#b3b3b3] mb-6">Our team is happy to help.</p>
            <Link href="https://app.ziggydocs.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#7c3aed] text-white rounded-xl font-semibold hover:opacity-90 transition-all">Start Free Trial</Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
