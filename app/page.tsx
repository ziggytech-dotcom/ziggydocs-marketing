import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ZiggyDocs — E-Sign for $19/mo. Unlimited Documents.",
  description:
    "Send contracts, get them signed, store them securely. No envelope limits. No per-user fees. Start your 14-day free trial today.",
  openGraph: {
    title: "ZiggyDocs — E-Sign for $19/mo. Unlimited Documents.",
    description: "Send contracts, get them signed, store them securely. No envelope limits. No per-user fees.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const features = [
  {
    icon: "∞",
    title: "Unlimited Documents",
    desc: "Send and receive as many documents as you need. No envelope limits, ever.",
  },
  {
    icon: "⊹",
    title: "Drag-and-Drop Fields",
    desc: "Place signature, date, initials, and text fields with a simple drag-and-drop editor.",
  },
  {
    icon: "📱",
    title: "Mobile Signing",
    desc: "Signers can review and sign from any smartphone or tablet — no app download needed.",
  },
  {
    icon: "🔔",
    title: "Auto-Reminders",
    desc: "Automated follow-up emails nudge signers so you never have to chase anyone manually.",
  },
  {
    icon: "🛡",
    title: "Certificate of Completion",
    desc: "Every signed document includes a legally binding audit trail and certificate.",
  },
  {
    icon: "◫",
    title: "Templates",
    desc: "Save your most-used documents as templates and send in seconds — not minutes.",
  },
];

const comparisonData = [
  { feature: "Monthly price", ziggydocs: "$19/mo", docusign: "$45/mo", hellosign: "$25/mo" },
  { feature: "Documents per month", ziggydocs: "Unlimited", docusign: "10 (Personal)", hellosign: "10 (Essentials)" },
  { feature: "Templates", ziggydocs: "✓ Included", docusign: "✓ Included", hellosign: "✓ Included" },
  { feature: "Mobile signing", ziggydocs: "✓ Included", docusign: "✓ Included", hellosign: "✓ Included" },
  { feature: "Auto-reminders", ziggydocs: "✓ Included", docusign: "✓ Included", hellosign: "✓ Included" },
  { feature: "Audit trail", ziggydocs: "✓ Included", docusign: "✓ Included", hellosign: "✓ Included" },
  { feature: "Per-user fees", ziggydocs: "✗ None", docusign: "✓ Yes", hellosign: "✓ Yes" },
  { feature: "Free trial", ziggydocs: "14 days", docusign: "30 days", hellosign: "30 days" },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#0f0a0a" }}>
      <Navbar />

      {/* ─── HERO ─── */}
      <section
        style={{
          padding: "6rem 1.5rem 4rem",
          textAlign: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(124, 58, 237, 0.12)",
            border: "1px solid rgba(124, 58, 237, 0.3)",
            borderRadius: "999px",
            padding: "0.375rem 1rem",
            marginBottom: "1.5rem",
            fontSize: "0.875rem",
            color: "#a78bfa",
            fontWeight: 500,
          }}
        >
          ✦ The affordable DocuSign alternative
        </div>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          DocuSign for <span style={{ color: "#7c3aed" }}>$19/mo.</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
            color: "#a1a1aa",
            maxWidth: "640px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.6,
          }}
        >
          Send contracts, get them signed, store them securely.{" "}
          <strong style={{ color: "#fff" }}>No envelope limits.</strong>{" "}
          <strong style={{ color: "#fff" }}>No per-user fees.</strong>
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://app.ziggydocs.com/signup"
            style={{
              background: "#7c3aed",
              color: "#fff",
              padding: "0.875rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: 700,
              fontSize: "1.0625rem",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Start Free Trial →
          </a>
          <Link
            href="/features"
            style={{
              border: "1px solid #27272a",
              color: "#fff",
              padding: "0.875rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: 600,
              fontSize: "1.0625rem",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            See Features
          </Link>
        </div>

        {/* App mockup */}
        <div
          style={{
            marginTop: "4rem",
            background: "#18181b",
            border: "1px solid #27272a",
            borderRadius: "1rem",
            padding: "2rem",
            maxWidth: "800px",
            margin: "4rem auto 0",
            boxShadow: "0 0 60px rgba(124, 58, 237, 0.12)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
            <div style={{ flex: 1, background: "#27272a", borderRadius: "4px", height: "24px", marginLeft: "1rem" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "1rem", minHeight: "280px" }}>
            <div style={{ background: "#0f0a0a", borderRadius: "0.5rem", padding: "1rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <div style={{ color: "#7c3aed", fontSize: "0.75rem", fontWeight: 600, marginBottom: "0.5rem" }}>DOCUMENTS</div>
                {["Service Agreement.pdf", "NDA_Client.pdf", "Invoice_March.pdf"].map((name, i) => (
                  <div key={i} style={{ padding: "0.5rem", borderRadius: "0.375rem", marginBottom: "0.25rem", background: i === 0 ? "rgba(124,58,237,0.15)" : "transparent", color: i === 0 ? "#fff" : "#a1a1aa", fontSize: "0.8125rem" }}>{name}</div>
                ))}
              </div>
            </div>
            <div style={{ background: "#0f0a0a", borderRadius: "0.5rem", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ height: "8px", background: "#27272a", borderRadius: "4px", width: "60%" }} />
              <div style={{ height: "8px", background: "#27272a", borderRadius: "4px", width: "80%" }} />
              <div style={{ height: "8px", background: "#27272a", borderRadius: "4px", width: "45%" }} />
              <div style={{ flex: 1 }} />
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <div style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.4)", borderRadius: "0.375rem", padding: "0.5rem 1rem", fontSize: "0.8125rem", color: "#a78bfa" }}>Signature Field</div>
                <div style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.4)", borderRadius: "0.375rem", padding: "0.5rem 1rem", fontSize: "0.8125rem", color: "#a78bfa" }}>Date Field</div>
              </div>
              <div style={{ background: "#7c3aed", borderRadius: "0.375rem", padding: "0.625rem 1rem", fontSize: "0.875rem", color: "#fff", fontWeight: 600, textAlign: "center", display: "inline-block", alignSelf: "flex-start" }}>Send for Signature →</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <div
        style={{
          borderTop: "1px solid #27272a",
          borderBottom: "1px solid #27272a",
          padding: "1rem 1.5rem",
          textAlign: "center",
          color: "#a1a1aa",
          fontSize: "0.9375rem",
        }}
      >
        <span style={{ marginRight: "1.5rem" }}>✓ 14-day free trial</span>
        <span style={{ marginRight: "1.5rem" }}>✓ No credit card required</span>
        <span>✓ Cancel anytime</span>
      </div>

      {/* ─── PROBLEM / SOLUTION ─── */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, marginBottom: "3rem" }}>
          The old way vs. the <span style={{ color: "#7c3aed" }}>ZiggyDocs</span> way
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {/* Old way */}
          <div style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: "0.75rem", padding: "2rem" }}>
            <div style={{ color: "#ff1744", fontWeight: 700, fontSize: "1.125rem", marginBottom: "1.5rem" }}>✗ The Old Way (DocuSign)</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                "$45+/mo just to get started",
                "Only 10 envelopes/month on basic plan",
                "Pay extra for each additional user",
                "Complex setup and learning curve",
                "Overpay for features you never use",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", color: "#a1a1aa", fontSize: "0.9375rem" }}>
                  <span style={{ color: "#ff1744", flexShrink: 0 }}>✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ZiggyDocs way */}
          <div
            style={{
              background: "#18181b",
              border: "1px solid rgba(124, 58, 237, 0.5)",
              borderRadius: "0.75rem",
              padding: "2rem",
              boxShadow: "0 0 30px rgba(124,58,237,0.1)",
            }}
          >
            <div style={{ color: "#7c3aed", fontWeight: 700, fontSize: "1.125rem", marginBottom: "1.5rem" }}>✓ The ZiggyDocs Way</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                "$19/mo flat — no surprises",
                "Truly unlimited documents",
                "No per-user fees, ever",
                "Up and running in minutes",
                "Everything you need, nothing you don't",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", color: "#a1a1aa", fontSize: "0.9375rem" }}>
                  <span style={{ color: "#7c3aed", flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ─── */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: "#0f0a0a",
          borderTop: "1px solid #27272a",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, marginBottom: "1rem" }}>
              Everything you need to get signed
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: "1.125rem" }}>
              Professional e-signature tools — included at one flat price.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "#18181b",
                  border: "1px solid #27272a",
                  borderRadius: "0.75rem",
                  padding: "1.75rem",
                  transition: "border-color 0.2s",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: "1.0625rem", marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ color: "#a1a1aa", fontSize: "0.9375rem", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEEP FEATURE: TEMPLATES ─── */}
      <section style={{ padding: "5rem 1.5rem", borderTop: "1px solid #27272a" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ color: "#7c3aed", fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Templates</div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
              Send in seconds, not minutes
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: "1.0625rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Build a library of your most-used documents — service agreements, NDAs, onboarding forms — and send them with a single click. Customize per client, then send.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {["Create unlimited templates", "Pre-fill fields per recipient", "Share templates with your team", "Track which template was used"].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.625rem", color: "#a1a1aa", fontSize: "0.9375rem" }}>
                  <span style={{ color: "#7c3aed" }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <a href="https://app.ziggydocs.com/signup" className="btn-primary" style={{ background: "#7c3aed", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", fontWeight: 600, textDecoration: "none", display: "inline-block" }}>
              Start Free Trial →
            </a>
          </div>

          {/* Screenshot placeholder */}
          <div
            style={{
              background: "#18181b",
              border: "1px solid #27272a",
              borderRadius: "0.75rem",
              padding: "2rem",
              minHeight: "320px",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <div style={{ color: "#a1a1aa", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>My Templates</div>
            {["Service Agreement", "NDA — Standard", "Project Proposal", "Contractor Agreement", "Client Onboarding"].map((name, i) => (
              <div key={i} style={{ background: "#0f0a0a", border: "1px solid #27272a", borderRadius: "0.5rem", padding: "0.875rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ color: "#fff", fontSize: "0.9375rem", fontWeight: 500 }}>{name}</div>
                  <div style={{ color: "#a1a1aa", fontSize: "0.75rem" }}>Last used 2d ago</div>
                </div>
                <div style={{ background: "#7c3aed", color: "#fff", padding: "0.375rem 0.875rem", borderRadius: "0.375rem", fontSize: "0.8125rem", fontWeight: 600 }}>Send</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEEP FEATURE: AUDIT TRAIL ─── */}
      <section style={{ padding: "5rem 1.5rem", background: "#0f0a0a", borderTop: "1px solid #27272a" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Certificate placeholder */}
          <div
            style={{
              background: "#18181b",
              border: "1px solid #27272a",
              borderRadius: "0.75rem",
              padding: "2rem",
              minHeight: "320px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🛡</div>
              <div style={{ fontWeight: 700, fontSize: "1.125rem" }}>Certificate of Completion</div>
              <div style={{ color: "#a1a1aa", fontSize: "0.875rem" }}>Service Agreement.pdf</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Document sent", time: "Mar 28, 2026 9:14 AM PST", icon: "📤" },
                { label: "Document opened", time: "Mar 28, 2026 9:22 AM PST", icon: "👁" },
                { label: "Signature added", time: "Mar 28, 2026 9:25 AM PST", icon: "✍️" },
                { label: "Document completed", time: "Mar 28, 2026 9:25 AM PST", icon: "✅" },
              ].map((event, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.875rem" }}>
                  <span>{event.icon}</span>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 500 }}>{event.label}</div>
                    <div style={{ color: "#a1a1aa" }}>{event.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ color: "#7c3aed", fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Security & Compliance</div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
              Every signature is legally binding
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: "1.0625rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              ZiggyDocs captures a complete audit trail for every document — timestamps, IP addresses, and signer identity. Every completed document comes with a Certificate of Completion.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {["Compliant with ESIGN Act & UETA", "Tamper-evident documents", "Timestamped audit trail", "Secure cloud storage"].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.625rem", color: "#a1a1aa", fontSize: "0.9375rem" }}>
                  <span style={{ color: "#7c3aed" }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section style={{ padding: "5rem 1.5rem", borderTop: "1px solid #27272a" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Simple, honest pricing</h2>
          <p style={{ color: "#a1a1aa", fontSize: "1.125rem", marginBottom: "3rem" }}>One plan. Everything included.</p>

          <div
            style={{
              background: "#18181b",
              border: "1px solid rgba(124,58,237,0.5)",
              borderRadius: "1rem",
              padding: "2.5rem",
              boxShadow: "0 0 40px rgba(124,58,237,0.12)",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "3.5rem", fontWeight: 700 }}>$19</span>
              <span style={{ color: "#a1a1aa", fontSize: "1.125rem" }}>/month</span>
            </div>
            <div style={{ color: "#a1a1aa", marginBottom: "2rem", fontSize: "0.9375rem" }}>14-day free trial · No credit card required</div>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.75rem", textAlign: "left" }}>
              {[
                "Unlimited documents",
                "Unlimited signers",
                "Drag-and-drop field editor",
                "Reusable templates",
                "Mobile signing",
                "Auto-reminders",
                "Certificate of completion",
                "Audit trail",
                "Secure cloud storage",
                "Email support",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", color: "#d4d4d8", fontSize: "0.9375rem" }}>
                  <span style={{ color: "#7c3aed" }}>✓</span> {item}
                </li>
              ))}
            </ul>

            <a
              href="https://app.ziggydocs.com/signup"
              style={{
                display: "block",
                background: "#7c3aed",
                color: "#fff",
                padding: "1rem",
                borderRadius: "0.5rem",
                fontWeight: 700,
                fontSize: "1.0625rem",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Start Free Trial →
            </a>
          </div>

          <div
            style={{
              background: "#18181b",
              border: "1px solid #27272a",
              borderRadius: "0.75rem",
              padding: "1.25rem 1.5rem",
              fontSize: "0.9375rem",
              color: "#a1a1aa",
            }}
          >
            Using other tools?{" "}
            <a href="https://ziggybusiness.com" style={{ color: "#7c3aed", textDecoration: "none", fontWeight: 600 }}>
              Add ZiggyDocs to your ZiggyTech suite →
            </a>
          </div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section style={{ padding: "5rem 1.5rem", background: "#0f0a0a", borderTop: "1px solid #27272a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, marginBottom: "3rem" }}>
            How we compare
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9375rem" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "0.875rem 1rem", color: "#a1a1aa", fontWeight: 600, borderBottom: "1px solid #27272a" }}>Feature</th>
                  <th style={{ textAlign: "center", padding: "0.875rem 1rem", color: "#7c3aed", fontWeight: 700, borderBottom: "1px solid #27272a" }}>ZiggyDocs</th>
                  <th style={{ textAlign: "center", padding: "0.875rem 1rem", color: "#a1a1aa", fontWeight: 600, borderBottom: "1px solid #27272a" }}>DocuSign</th>
                  <th style={{ textAlign: "center", padding: "0.875rem 1rem", color: "#a1a1aa", fontWeight: 600, borderBottom: "1px solid #27272a" }}>Dropbox Sign</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #27272a" }}>
                    <td style={{ padding: "0.875rem 1rem", color: "#d4d4d8" }}>{row.feature}</td>
                    <td style={{ padding: "0.875rem 1rem", textAlign: "center", color: "#a78bfa", fontWeight: 600 }}>{row.ziggydocs}</td>
                    <td style={{ padding: "0.875rem 1rem", textAlign: "center", color: "#a1a1aa" }}>{row.docusign}</td>
                    <td style={{ padding: "0.875rem 1rem", textAlign: "center", color: "#a1a1aa" }}>{row.hellosign}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/vs/docusign" style={{ color: "#7c3aed", textDecoration: "none", fontSize: "0.9375rem", fontWeight: 600 }}>
              Full DocuSign comparison →
            </Link>
            <Link href="/vs/hellosign" style={{ color: "#7c3aed", textDecoration: "none", fontSize: "0.9375rem", fontWeight: 600 }}>
              Full Dropbox Sign comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section
        style={{
          padding: "5rem 1.5rem",
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(255,23,68,0.06) 100%)",
          borderTop: "1px solid #27272a",
        }}
      >
        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, marginBottom: "1rem" }}>
          Start your 14-day free trial.
        </h2>
        <p style={{ color: "#a1a1aa", fontSize: "1.125rem", marginBottom: "2rem" }}>
          No credit card required. Cancel anytime.
        </p>
        <a
          href="https://app.ziggydocs.com/signup"
          style={{
            background: "#7c3aed",
            color: "#fff",
            padding: "1rem 2.5rem",
            borderRadius: "0.5rem",
            fontWeight: 700,
            fontSize: "1.0625rem",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Get Started Free →
        </a>
      </section>

      <Footer />
    </div>
  );
}
