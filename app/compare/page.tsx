import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ZiggyDocs vs DocuSign vs HelloSign — Full Feature Comparison 2026",
  description:
    "How does ZiggyDocs compare to DocuSign and HelloSign? Side-by-side feature comparison, pricing breakdown, and why the ZiggyTech Business Suite changes everything.",
  keywords: [
    "ZiggyDocs vs DocuSign",
    "ZiggyDocs vs HelloSign",
    "DocuSign alternative",
    "HelloSign alternative",
    "best docs software",
    "DocuSign vs HelloSign",
  ],
  openGraph: {
    title: "ZiggyDocs vs DocuSign vs HelloSign — 2026 Comparison",
    description: "ZiggyDocs at $29/mo vs DocuSign at $45/mo vs HelloSign at $25/mo. Full feature comparison.",
    url: "https://ziggydocs.com/compare",
  },
};

const accent = "#7c3aed";
const bg = "#0a0a0a";
const cardBg = "#111111";
const muted = "#a1a1aa";
const borderColor = "#1f1f1f";

export default function ComparePage() {
  return (
    <div style={{ background: bg, minHeight: "100vh", color: "#ffffff", fontFamily: "system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: "88px 24px 64px", textAlign: "center", borderBottom: `1px solid ${borderColor}` }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: `${accent}18`, border: `1px solid ${accent}40`, borderRadius: "100px", padding: "6px 18px", fontSize: "13px", color: accent, fontWeight: 600, marginBottom: "24px" }}>
            Feature Comparison 2026
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px" }}>
            <span style={{ color: accent }}>ZiggyDocs</span> vs DocuSign vs HelloSign
          </h1>
          <p style={{ fontSize: "20px", color: muted, lineHeight: 1.6, marginBottom: "40px" }}>
            E-sign and document management for modern businesses. See exactly how the tools compare — feature by feature, dollar by dollar.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="https://app.ziggydocs.com/signup" style={{ background: accent, color: "#000", padding: "14px 28px", borderRadius: "10px", fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>
              Try ZiggyDocs Free →
            </Link>
            <Link href="/pricing" style={{ background: "transparent", color: "#ffffff", border: `1px solid ${borderColor}`, padding: "14px 28px", borderRadius: "10px", fontWeight: 600, fontSize: "16px", textDecoration: "none" }}>
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Price Comparison Cards */}
      <section style={{ padding: "64px 24px", borderBottom: `1px solid ${borderColor}` }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, textAlign: "center", marginBottom: "40px" }}>
            The price difference is <span style={{ color: accent }}>significant</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {/* ZiggyX Card */}
            <div style={{ background: cardBg, border: `2px solid ${accent}`, borderRadius: "16px", padding: "32px 24px", textAlign: "center", position: "relative" }}>
              <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: accent, color: "#000", fontSize: "12px", fontWeight: 700, padding: "4px 14px", borderRadius: "100px" }}>RECOMMENDED</div>
              <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>ZiggyDocs</div>
              <div style={{ fontSize: "42px", fontWeight: 800, color: accent, marginBottom: "4px" }}>$29/mo</div>
              <div style={{ fontSize: "14px", color: muted, marginBottom: "20px" }}>flat rate, all features included</div>
              <div style={{ fontSize: "14px", color: muted }}>✅ Full ZiggyTech Suite access</div>
            </div>
            {/* Comp1 Card */}
            <div style={{ background: cardBg, border: `1px solid ${borderColor}`, borderRadius: "16px", padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>DocuSign</div>
              <div style={{ fontSize: "42px", fontWeight: 800, color: "#ffffff", marginBottom: "4px" }}>$45/mo</div>
              <div style={{ fontSize: "14px", color: muted, marginBottom: "20px" }}>base plan</div>
              <div style={{ fontSize: "14px", color: muted }}>❌ No suite integration</div>
            </div>
            {/* Comp2 Card */}
            <div style={{ background: cardBg, border: `1px solid ${borderColor}`, borderRadius: "16px", padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>HelloSign</div>
              <div style={{ fontSize: "42px", fontWeight: 800, color: "#ffffff", marginBottom: "4px" }}>$25/mo</div>
              <div style={{ fontSize: "14px", color: muted, marginBottom: "20px" }}>base plan</div>
              <div style={{ fontSize: "14px", color: muted }}>❌ No suite integration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Table */}
      <section style={{ padding: "64px 24px", borderBottom: `1px solid ${borderColor}` }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, textAlign: "center", marginBottom: "40px" }}>
            Feature-by-feature comparison
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: cardBg, borderRadius: "16px", overflow: "hidden" }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${borderColor}` }}>
                  <th style={{ padding: "16px", textAlign: "left", color: muted, fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Feature</th>
                  <th style={{ padding: "16px", textAlign: "center", color: accent, fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>ZiggyDocs</th>
                  <th style={{ padding: "16px", textAlign: "center", color: muted, fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>DocuSign</th>
                  <th style={{ padding: "16px", textAlign: "center", color: muted, fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>HelloSign</th>
                </tr>
              </thead>
              <tbody>
                
                  <tr style={{ borderBottom: "1px solid #1f1f1f" }}>
                    <td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Starting price</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600, fontSize: "15px" }}>$29/mo</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>$45/mo</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>$25/mo</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #1f1f1f" }}>
                    <td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Unlimited documents</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600, fontSize: "15px" }}>✅</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>❌ Capped by plan</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>❌ Capped by plan</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #1f1f1f" }}>
                    <td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Document templates</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600, fontSize: "15px" }}>✅</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #1f1f1f" }}>
                    <td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Bulk send</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600, fontSize: "15px" }}>✅</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅ (Enterprise)</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅ (higher tiers)</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #1f1f1f" }}>
                    <td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Audit trail</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600, fontSize: "15px" }}>✅</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #1f1f1f" }}>
                    <td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Zapier integration</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600, fontSize: "15px" }}>✅</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>✅</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #1f1f1f" }}>
                    <td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>CRM sync (ZiggyHQ)</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600, fontSize: "15px" }}>✅ Native</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>❌</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>❌</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #1f1f1f" }}>
                    <td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Client portal</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600, fontSize: "15px" }}>✅ Via ZiggyNexus</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>❌</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>❌</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #1f1f1f" }}>
                    <td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>ZiggyTech Suite integration</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600, fontSize: "15px" }}>✅ Native</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>❌</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>❌</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #1f1f1f" }}>
                    <td style={{ padding: "14px 16px", color: "#a1a1aa", fontSize: "15px" }}>Setup time</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#ffffff", fontWeight: 600, fontSize: "15px" }}>Minutes</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>Hours</td>
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "#a1a1aa", fontSize: "14px" }}>Hours</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Suite Integration Section */}
      <section style={{ padding: "64px 24px", borderBottom: `1px solid ${borderColor}` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "13px", color: accent, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>THE REAL DIFFERENCE</div>
          <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "24px", lineHeight: 1.2 }}>
            DocuSign and HelloSign are <span style={{ color: accent }}>standalone tools</span>.<br/>
            ZiggyDocs is part of something bigger.
          </h2>
          <p style={{ fontSize: "18px", color: muted, lineHeight: 1.7, marginBottom: "40px" }}>
            ZiggyDocs connects to ZiggyHQ CRM so contracts auto-populate client data, and to ZiggyNexus so clients can sign from their portal.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "40px" }}>
            {% for tool in ["ZiggyHQ", "ZiggyDocs", "ZiggySchedule", "ZiggyPayroll", "ZiggyPitch", "ZiggyHR", "ZiggyReviews", "ZiggyInvoice", "ZiggyIntake", "ZiggyNexus"] if tool != "ZiggyDocs" %}
            <div style={{ background: cardBg, border: `1px solid ${borderColor}`, borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#ffffff", textAlign: "left" }}>
              ✅ {tool}
            </div>
            {% endfor %}
          </div>
          <Link href="https://ziggytechventures.com" style={{ color: accent, fontSize: "15px", textDecoration: "none", fontWeight: 600 }}>
            See the full ZiggyTech Business Suite →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 800, marginBottom: "16px" }}>
            Ready to make the switch?
          </h2>
          <p style={{ fontSize: "18px", color: muted, marginBottom: "40px" }}>
            Start your free trial. No credit card required. Cancel anytime.
          </p>
          <Link href="https://app.ziggydocs.com/signup" style={{ background: accent, color: "#000", padding: "18px 40px", borderRadius: "12px", fontWeight: 700, fontSize: "18px", textDecoration: "none", display: "inline-block" }}>
            Try ZiggyDocs Free →
          </Link>
        </div>
      </section>

    </div>
  );
}
