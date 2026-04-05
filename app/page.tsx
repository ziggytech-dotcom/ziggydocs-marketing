'use client'
import Link from 'next/link'
import { useState } from 'react'

const features = [
  { title: 'E-Signatures', desc: 'Send documents for signature in seconds. Legally binding, mobile-friendly, and delivered instantly to any inbox.' },
  { title: 'Drag-Drop Fields', desc: 'Place signature, date, initials, and text fields anywhere on your document with a simple drag-and-drop editor.' },
  { title: 'Audit Trail', desc: 'Every action is timestamped and logged — who signed, when, and from where. Full legal compliance out of the box.' },
  { title: 'Bulk Send', desc: 'Send the same document to hundreds of signers at once. Perfect for NDAs, onboarding packets, and policy updates.' },
  { title: 'Templates', desc: 'Save your most-used documents as templates. One click to send a contract you have used a hundred times before.' },
  { title: 'Custom Branding', desc: 'Your logo, your colors, your domain. Signers see your brand, not ours. Pro plan includes full white-labeling.' },
]

const faqs = [
  { q: 'Are ZiggyDocs signatures legally binding?', a: 'Yes. ZiggyDocs signatures comply with the ESIGN Act and eIDAS regulations, making them legally binding in the US, EU, and most countries worldwide.' },
  { q: 'Is there a limit on how many documents I can send?', a: 'No. Unlike DocuSign which caps envelopes, ZiggyDocs gives you unlimited documents on every plan. Send as many as you need.' },
  { q: 'Can I use my own domain for signing pages?', a: 'Yes. Pro plan includes custom domain support so signers see your brand, not ZiggyDocs, on the signing page.' },
  { q: 'How does the free trial work?', a: '14 days of full Pro access. No credit card required. After 14 days, choose a plan or your account moves to read-only.' },
  { q: 'Can I integrate ZiggyDocs with my other tools?', a: 'Yes. Zapier, Resend for email notifications, and ZiggyHQ for CRM sync. Webhook support for custom integrations.' },
  { q: 'How is my document data protected?', a: 'All documents are encrypted at rest and in transit. Row-level security means no document is ever accessible to other users. 2FA available.' },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-2xl tracking-tight">
              <span style={{ color: '#ff1744' }}>Ziggy</span><span style={{ color: '#7c3aed' }}>Docs</span>
            </Link>
            <div className="hidden md:flex items-center gap-1 text-xs text-[#b3b3b3]">
              {[['Features', '/features'], ['Pricing', '/pricing'], ['Templates', '/templates'], ['Suite', '/suite'], ['vs DocuSign', '/compare/docusign'], ['vs HelloSign', '/compare/hellosign']].map(([label, href]) => (
                <Link key={label} href={href} className="px-3 py-2 hover:text-white transition-colors rounded-lg hover:bg-[#1a1a1a]">{label}</Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Link href="https://app.ziggydocs.com/login" className="hidden md:block text-sm text-[#b3b3b3] hover:text-white transition-colors">Sign In</Link>
              <Link href="https://app.ziggydocs.com/signup" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7c3aed] text-white rounded-xl font-semibold text-sm hover:bg-[#7c3aed]/90 hover:scale-105 transition-all">Start Free Trial</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4 bg-[#0a0a0a]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#7c3aed]/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#7c3aed] text-xs font-semibold uppercase tracking-widest mb-8">
            ZiggyDocs — E-Signatures
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            E-signatures without<br />
            <span style={{ color: '#7c3aed' }}>the enterprise price.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#b3b3b3] max-w-3xl mx-auto leading-relaxed mb-10">
            DocuSign wanted $45/month with envelope limits. We built ZiggyDocs to give you unlimited documents for $15/month. No per-envelope fees. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="https://app.ziggydocs.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7c3aed] text-white rounded-xl font-semibold text-lg hover:bg-[#7c3aed]/90 hover:scale-105 transition-all">
              Start Free Trial
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/features" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#7c3aed]/10 border border-[#7c3aed]/30 text-[#7c3aed] rounded-xl font-semibold text-lg hover:bg-[#7c3aed]/20 transition-all">
              See Features
            </Link>
          </div>
          <p className="text-sm text-[#b3b3b3]/60">14-day free trial · No credit card required · Cancel anytime</p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-[#1f1f1f]">
            {['$15/mo — 70% less than DocuSign', 'Unlimited documents', 'Legally binding in 190+ countries', 'Set up in under 5 minutes'].map((fact) => (
              <div key={fact} className="flex items-center gap-2 text-sm text-[#b3b3b3]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product preview placeholder */}
      <section className="py-16 px-4 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl border border-[#1f1f1f] overflow-hidden bg-[#111111]" style={{ aspectRatio: '16/9' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <p className="text-white font-semibold text-lg">Product demo coming soon</p>
                <p className="text-[#b3b3b3] text-sm mt-1">See ZiggyDocs in action</p>
                <Link href="https://app.ziggydocs.com/signup" className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-[#7c3aed] text-white rounded-lg text-sm font-medium hover:bg-[#7c3aed]/90 transition-colors">Start free trial instead</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0c0a14] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7c3aed] mb-3">Features</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Everything you need to close deals faster.</h2>
            <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto leading-relaxed">From NDAs to full contracts — ZiggyDocs handles the entire signing workflow so you can focus on the work, not the paperwork.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 md:p-8 hover:border-[#7c3aed]/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.08)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 flex items-center justify-center mb-5 group-hover:bg-[#7c3aed]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-[#b3b3b3] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/features" className="inline-flex items-center gap-2 px-8 py-4 bg-[#7c3aed]/10 border border-[#7c3aed]/30 text-[#7c3aed] rounded-xl font-semibold hover:bg-[#7c3aed]/20 transition-all">View all features</Link>
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#0c080f] via-[#140b20] to-[#0c080f]">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#7c3aed]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#0ea5e9]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7c3aed] mb-4">Our story</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">We built this because we needed it</h2>
          <div className="space-y-6 text-lg text-[#b3b3b3] leading-relaxed">
            <p>DocuSign wanted $45/month with envelope limits. We were burning envelopes on NDAs, proposals, and onboarding docs just running a small agency. The math never made sense.</p>
            <p>We built ZiggyDocs to solve the problem simply: unlimited documents, no per-envelope nonsense, and a UI that does not feel like it was built in 2009. Starting at $15/month.</p>
            <p className="text-white font-medium">That&apos;s ZiggyDocs. Built by people who hated the alternative.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '$15/mo', label: 'Starting price', color: '#7c3aed' },
              { value: 'Unlimited', label: 'Documents', color: '#0ea5e9' },
              { value: 'No limits', label: 'No envelope caps', color: '#f97316' },
              { value: '14 days', label: 'Free to try', color: '#10b981' },
            ].map((item, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-center hover:border-[#7c3aed]/30 transition-colors">
                <p className="text-2xl font-bold mb-1" style={{ color: item.color }}>{item.value}</p>
                <p className="text-sm text-[#b3b3b3]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0d0d0d] via-[#0a0810] to-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7c3aed] mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, honest pricing</h2>
          <p className="text-lg text-[#b3b3b3] mb-12 max-w-2xl mx-auto leading-relaxed">DocuSign charges $45/mo with envelope caps. We give you unlimited documents from $15/mo. No hidden fees. No surprises.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 text-left">
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Starter</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-5xl font-bold text-white">$15</span><span className="text-[#b3b3b3] mb-2">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">1 user · Unlimited documents</p>
              <Link href="https://app.ziggydocs.com/signup" className="block w-full text-center px-6 py-3 bg-[#7c3aed]/10 border border-[#7c3aed]/30 text-[#7c3aed] rounded-xl font-semibold hover:bg-[#7c3aed]/20 transition-all">Start free trial</Link>
            </div>
            <div className="bg-[#111111] border-2 border-[#7c3aed]/40 rounded-2xl p-8 text-left relative shadow-[0_0_40px_rgba(124,58,237,0.12)]">
              <div className="absolute -top-3 left-6"><span className="px-3 py-1 bg-[#7c3aed] text-white text-xs font-bold rounded-full uppercase tracking-wide">Most Popular</span></div>
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-1"><span className="text-5xl font-bold text-white">$25</span><span className="text-[#b3b3b3] mb-2">/mo</span></div>
              <p className="text-sm text-[#b3b3b3] mb-6">5 users · Custom branding · Custom domain</p>
              <Link href="https://app.ziggydocs.com/signup" className="block w-full text-center px-6 py-3 bg-[#7c3aed] text-white rounded-xl font-semibold hover:bg-[#7c3aed]/90 transition-all">Start free trial</Link>
            </div>
          </div>
          <Link href="/pricing" className="inline-flex items-center gap-2 text-[#7c3aed] hover:underline font-medium">
            View full pricing and compare plans
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-4 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7c3aed] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Common questions</h2>
            <p className="text-lg text-[#b3b3b3]">Everything you need to know before you start.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#7c3aed]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#7c3aed] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-[#b3b3b3] mt-8">More questions? <Link href="/faq" className="text-[#7c3aed] hover:underline">View full FAQ</Link></p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#0c080f] via-[#120c1e] to-[#0c080f]">
        <div className="absolute inset-0 bg-[#7c3aed]/4 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Stop paying per envelope.<br /><span style={{ color: '#7c3aed' }}>Switch to unlimited.</span></h2>
          <p className="text-xl text-[#b3b3b3] mb-10 leading-relaxed">14 days free. No credit card. Send your first document in minutes.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://app.ziggydocs.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#7c3aed] text-white rounded-xl font-bold text-xl hover:bg-[#7c3aed]/90 hover:scale-105 transition-all shadow-[0_0_40px_rgba(124,58,237,0.3)]">
              Start Free Trial
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#7c3aed]/10 border border-[#7c3aed]/30 text-[#7c3aed] rounded-xl font-bold text-xl hover:bg-[#7c3aed]/20 transition-all">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1f1f1f] py-12 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-white mb-4"><span style={{ color: '#ff1744' }}>Ziggy</span><span style={{ color: '#7c3aed' }}>Docs</span></p>
              <p className="text-sm text-[#b3b3b3] leading-relaxed">Unlimited e-signatures for teams and freelancers.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Product</p>
              {[['Features', '/features'], ['Pricing', '/pricing'], ['Templates', '/templates'], ['Suite', '/suite'], ['Changelog', '/changelog'], ['Security', '/security']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Compare</p>
              {[['vs DocuSign', '/compare/docusign'], ['vs HelloSign', '/compare/hellosign'], ['FAQ', '/faq'], ['Blog', '/blog']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Legal</p>
              {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Cookie Policy', '/cookies']].map(([label, href]) => (
                <Link key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div className="border-t border-[#1f1f1f] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#b3b3b3]">© 2026 ZiggyTech Ventures LLC</p>
            <Link href="https://ziggybusiness.com" className="text-sm text-[#b3b3b3] hover:text-white transition-colors">Part of the ZiggyTech Business Suite →</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
