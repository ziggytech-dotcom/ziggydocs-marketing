import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const features = [
  { title: `Drag-Drop Field Editor`, desc: `Place signature fields, date fields, initials, and text inputs anywhere on your document.`, bullets: [`Signature fields`, `Date auto-fill fields`, `Initial fields`, `Text input boxes`, `Checkbox fields`, `Multi-page support`] },
  { title: `E-Signatures`, desc: `Legally binding electronic signatures with full audit trail. Signers complete documents from any device — no account required.`, bullets: [`No-account signing`, `Mobile-friendly`, `Draw, type, or upload signature`, `Email verification`, `ESIGN and UETA compliant`, `eIDAS compliant (EU)`] },
  { title: `Audit Trail`, desc: `Every action logged with timestamps, IP addresses, and email verification. Court-admissible audit trails.`, bullets: [`Timestamped actions`, `IP address logging`, `Email verification`, `Downloadable PDF certificate`, `Tamper-evident hash`, `Third-party verifiable`] },
  { title: `Bulk Send`, desc: `Send the same document to hundreds of recipients at once. Each gets their own unique signing link.`, bullets: [`CSV recipient upload`, `Unique links per recipient`, `Progress tracking`, `Auto-send signed copies`, `Bulk download`, `Status at a glance`] },
  { title: `Custom Branding`, desc: `Replace ZiggyDocs branding with your logo, colors, and custom email domain.`, bullets: [`Custom logo`, `Brand color themes`, `Custom email sender`, `Branded email templates`, `Custom signing page domain`, `Remove ZiggyDocs watermark`] },
  { title: `Templates`, desc: `Save your most-used documents as templates. Reuse NDAs, contracts, and proposals in seconds.`, bullets: [`Save any doc as template`, `Pre-configured fields`, `Signer role templates`, `Template sharing`, `Template analytics`, `One-click send`] },
]

export default function FeaturesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7c3aed]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7c3aed] mb-4">Features</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Everything ZiggyDocs can do</h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto mb-8">Every feature explained. No fluff.</p>
          <Link href="https://app.ziggydocs.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#7c3aed] text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all">
            Start Free Trial — 14 days free
          </Link>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {features.map((f, i) => (
            <div key={f.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-start`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">{f.title}</h2>
                <p className="text-lg text-[#b3b3b3] leading-relaxed mb-6">{f.desc}</p>
                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[#b3b3b3]">
                      <div className="w-5 h-5 rounded-full bg-[#7c3aed]/20 border border-[#7c3aed]/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-[#111111] border border-[#1f1f1f] rounded-2xl aspect-video flex items-center justify-center">
                <p className="text-[#555] text-sm">Screenshot coming soon</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to see it in action?</h2>
          <p className="text-xl text-[#b3b3b3] mb-8">14-day free trial. No credit card required.</p>
          <Link href="https://app.ziggydocs.com/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-[#7c3aed] text-white rounded-xl font-bold text-xl hover:opacity-90 transition-all">Start Free Trial</Link>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
