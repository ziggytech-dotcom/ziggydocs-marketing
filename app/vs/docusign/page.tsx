import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ZiggyDocs vs DocuSign — Save $26/mo. No Envelope Limits.",
  description:
    "Compare ZiggyDocs vs DocuSign. ZiggyDocs is $19/mo with unlimited documents. DocuSign charges $45/mo with only 10 envelopes. Switch today.",
  openGraph: {
    title: "ZiggyDocs vs DocuSign — Save $26/mo. No Envelope Limits.",
    description: "Stop paying $45/mo for 10 envelopes. ZiggyDocs gives you unlimited documents for $19/mo.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const comparison = [
  { feature: "Monthly price", ziggydocs: "$19/mo", competitor: "$45/mo (Personal)" },
  { feature: "Documents per month", ziggydocs: "Unlimited", competitor: "10 envelopes only" },
  { feature: "Per-user fees", ziggydocs: "None", competitor: "Yes — expensive" },
  { feature: "Templates", ziggydocs: "✓ Unlimited", competitor: "✓ Included" },
  { feature: "Mobile signing", ziggydocs: "✓ Included", competitor: "✓ Included" },
  { feature: "Auto-reminders", ziggydocs: "✓ Included", competitor: "✓ Included" },
  { feature: "Audit trail", ziggydocs: "✓ Included", competitor: "✓ Included" },
  { feature: "Certificate of completion", ziggydocs: "✓ Included", competitor: "✓ Included" },
  { feature: "API access", ziggydocs: "Coming soon", competitor: "✓ (Enterprise)" },
  { feature: "Integrations", ziggydocs: "Core integrations", competitor: "300+ integrations" },
  { feature: "Annual savings vs $19/mo", ziggydocs: "—", competitor: "Pay $312+ more/yr" },
];

export default function VsDocuSignPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#0f0a0a" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ padding: "5rem 1.5rem 3rem", textAlign: "center", maxWidth: "900px", margin: "0 auto", width: "100%" }}>
        <div
          style={{
            display: "inline-block",
            background: "rgba(124,58,237,0.12)",
            border: "1px solid rgba(124,58,237,0.3)",
            borderRadius: "999px",
            padding: "0.375rem 1rem",
            marginBottom: "1.5rem",
            fontSize: "0.875rem",
            color: "#a78bfa",
            fontWeight: 500,
          }}
        >
          ZiggyDocs vs DocuSign
        </div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.1 }}>
          Stop paying <span style={{ color: "#ff1744" }}>$45/mo</span> for 10 envelopes.
        </h1>
        <p style={{ color: "#a1a1aa", fontSize: "1.125rem", lineHeight: 1.6, marginBottom: "2rem", maxWidth: "620px", margin: "0 auto 2rem" }}>
          DocuSign&apos;s Personal plan costs $45/mo and limits you to just 10 envelopes per month. ZiggyDocs gives you truly unlimited documents for $19/mo.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://app.ziggydocs.com/signup"
            style={{ background: "#7c3aed", color: "#fff", padding: "0.875rem 2rem", borderRadius: "0.5rem", fontWeight: 700, textDecoration: "none", display: "inline-block" }}
          >
            Switch to ZiggyDocs Free →
          </a>
        </div>
      </section>

      {/* Pain points */}
      <section style={{ padding: "4rem 1.5rem", borderTop: "1px solid #27272a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, marginBottom: "2rem", textAlign: "center" }}>
            Why people leave DocuSign
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {[
              { icon: "💸", title: "$45/mo just to start", desc: "DocuSign's Personal plan costs $45/month — that's $540/year before you've sent a single extra envelope." },
              { icon: "📦", title: "10 envelope limit", desc: "The basic plan caps you at 10 envelopes per month. If you send 11, you're locked out or forced to upgrade." },
              { icon: "👥", title: "Per-user pricing", desc: "Need a team? DocuSign charges per user. Costs stack up fast." },
              { icon: "🔧", title: "Overly complex", desc: "DocuSign is built for enterprise. If you're a small business, you're paying for features you'll never use." },
            ].map((pain, i) => (
              <div key={i} style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: "0.75rem", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{pain.icon}</div>
                <div style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{pain.title}</div>
                <p style={{ color: "#a1a1aa", fontSize: "0.9375rem", lineHeight: 1.6, margin: 0 }}>{pain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: "5rem 1.5rem", borderTop: "1px solid #27272a", background: "rgba(24,24,27,0.3)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, marginBottom: "2.5rem", textAlign: "center" }}>
            Feature-by-feature comparison
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9375rem" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "1rem", color: "#a1a1aa", fontWeight: 600, borderBottom: "1px solid #27272a" }}>Feature</th>
                  <th style={{ textAlign: "center", padding: "1rem", color: "#7c3aed", fontWeight: 700, borderBottom: "1px solid #27272a" }}>ZiggyDocs</th>
                  <th style={{ textAlign: "center", padding: "1rem", color: "#a1a1aa", fontWeight: 600, borderBottom: "1px solid #27272a" }}>DocuSign Personal</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #27272a", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}>
                    <td style={{ padding: "0.875rem 1rem", color: "#d4d4d8" }}>{row.feature}</td>
                    <td style={{ padding: "0.875rem 1rem", textAlign: "center", color: "#a78bfa", fontWeight: 600 }}>{row.ziggydocs}</td>
                    <td style={{ padding: "0.875rem 1rem", textAlign: "center", color: "#a1a1aa" }}>{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing visual comparison */}
      <section style={{ padding: "5rem 1.5rem", borderTop: "1px solid #27272a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, marginBottom: "2.5rem", textAlign: "center" }}>
            The math is simple
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: "0.75rem", padding: "2rem", textAlign: "center" }}>
              <div style={{ color: "#a1a1aa", fontSize: "0.875rem", marginBottom: "0.5rem", fontWeight: 600 }}>DOCUSIGN PERSONAL</div>
              <div style={{ fontSize: "3rem", fontWeight: 700, color: "#ff1744" }}>$45</div>
              <div style={{ color: "#a1a1aa", marginBottom: "1rem" }}>/month · 10 envelopes</div>
              <div style={{ color: "#a1a1aa", fontSize: "0.875rem" }}>$540/year for 120 envelopes</div>
            </div>
            <div
              style={{
                background: "#18181b",
                border: "1px solid rgba(124,58,237,0.5)",
                borderRadius: "0.75rem",
                padding: "2rem",
                textAlign: "center",
                boxShadow: "0 0 30px rgba(124,58,237,0.12)",
              }}
            >
              <div style={{ color: "#7c3aed", fontSize: "0.875rem", marginBottom: "0.5rem", fontWeight: 600 }}>ZIGGYDOCS</div>
              <div style={{ fontSize: "3rem", fontWeight: 700, color: "#7c3aed" }}>$19</div>
              <div style={{ color: "#a1a1aa", marginBottom: "1rem" }}>/month · Unlimited documents</div>
              <div style={{ color: "#a1a1aa", fontSize: "0.875rem" }}>$228/year for unlimited</div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#7c3aed" }}>Save $312/year switching to ZiggyDocs</div>
          </div>
        </div>
      </section>

      {/* How to switch */}
      <section style={{ padding: "5rem 1.5rem", borderTop: "1px solid #27272a", background: "rgba(24,24,27,0.3)" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 700, marginBottom: "2.5rem", textAlign: "center" }}>
            How to switch from DocuSign
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { step: "1", title: "Download your documents", desc: "Export and save all your completed documents from DocuSign before you close your account." },
              { step: "2", title: "Start your ZiggyDocs trial", desc: "Sign up at app.ziggydocs.com — free for 14 days, no credit card needed." },
              { step: "3", title: "Rebuild your templates", desc: "Upload your most-used documents and set up your templates in ZiggyDocs. Takes about 20 minutes." },
              { step: "4", title: "Send your first document", desc: "Start sending immediately. Your recipients don't need a ZiggyDocs account — they sign via email link." },
              { step: "5", title: "Cancel DocuSign", desc: "Once you're set up, cancel your DocuSign subscription. No need to overlap — the switch is that easy." },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    background: "#7c3aed",
                    color: "#fff",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    flexShrink: 0,
                    fontSize: "0.9375rem",
                  }}
                >
                  {s.step}
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: "0.375rem" }}>{s.title}</div>
                  <p style={{ color: "#a1a1aa", fontSize: "0.9375rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "5rem 1.5rem",
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(255,23,68,0.06) 100%)",
          borderTop: "1px solid #27272a",
        }}
      >
        <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem" }}>
          Ready to switch?
        </h2>
        <p style={{ color: "#a1a1aa", fontSize: "1.125rem", marginBottom: "2rem" }}>
          Start your free trial. Switch in minutes. Save $312/year.
        </p>
        <a
          href="https://app.ziggydocs.com/signup"
          style={{ background: "#7c3aed", color: "#fff", padding: "1rem 2.5rem", borderRadius: "0.5rem", fontWeight: 700, fontSize: "1.0625rem", textDecoration: "none", display: "inline-block" }}
        >
          Start Free Trial →
        </a>
        <div style={{ marginTop: "1.5rem" }}>
          <Link href="/vs/hellosign" style={{ color: "#7c3aed", textDecoration: "none", fontSize: "0.9375rem" }}>
            Compare with Dropbox Sign instead →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
