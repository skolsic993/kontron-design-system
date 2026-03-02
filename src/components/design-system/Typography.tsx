export function Typography() {
  return (
    <div className="space-y-12">
      {/* Font Families */}
      <div className="space-y-6">
        <h3 className="ds-section-title text-xl mb-4">Font Families</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Primary: Kontron */}
          <div className="bg-card p-6 rounded-lg border border-border space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-2 py-0.5 rounded text-xs"
                style={{ background: "var(--kontron-blue)", color: "#fff" }}
              >
                Primary
              </span>
              <span className="text-muted-foreground text-sm">
                Corporate brand font
              </span>
            </div>
            <p
              className="text-4xl"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 300 }}
            >
              Kontron Light
            </p>
            <p
              className="text-4xl"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 400 }}
            >
              Kontron Regular
            </p>
            <p
              className="text-4xl"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
            >
              Kontron Medium
            </p>
            <p
              className="text-4xl"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 700 }}
            >
              Kontron Bold
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                --font-primary
              </code>
              &nbsp;· Kontron → Exo 2 (web fallback)
            </p>
          </div>

          {/* Secondary: Calibri */}
          <div className="bg-card p-6 rounded-lg border border-border space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-2 py-0.5 rounded text-xs"
                style={{ background: "var(--kontron-green)", color: "#fff" }}
              >
                Secondary
              </span>
              <span className="text-muted-foreground text-sm">
                Document & UI utility font
              </span>
            </div>
            <p
              className="text-4xl"
              style={{ fontFamily: "var(--font-secondary)", fontWeight: 300 }}
            >
              Calibri Light
            </p>
            <p
              className="text-4xl"
              style={{ fontFamily: "var(--font-secondary)", fontWeight: 400 }}
            >
              Calibri Regular
            </p>
            <p
              className="text-4xl"
              style={{ fontFamily: "var(--font-secondary)", fontWeight: 600 }}
            >
              Calibri SemiBold
            </p>
            <p
              className="text-4xl"
              style={{ fontFamily: "var(--font-secondary)", fontWeight: 700 }}
            >
              Calibri Bold
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                --font-secondary
              </code>
              &nbsp;· Calibri → Inter (web fallback)
            </p>
          </div>
        </div>
      </div>

      {/* Headings */}
      <div className="space-y-6">
        <h3 className="ds-section-title text-xl mb-4">Headings</h3>
        <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
          <div>
            <h1
              className="mb-2"
              style={{
                fontSize: "var(--text-5xl)",
                fontFamily: "var(--font-primary)",
              }}
            >
              Heading 1 — The quick brown fox
            </h1>
            <p className="text-sm text-muted-foreground">
              Kontron · 48px · Medium
            </p>
          </div>
          <div>
            <h2
              className="mb-2"
              style={{
                fontSize: "var(--text-4xl)",
                fontFamily: "var(--font-primary)",
              }}
            >
              Heading 2 — The quick brown fox
            </h2>
            <p className="text-sm text-muted-foreground">
              Kontron · 36px · Medium
            </p>
          </div>
          <div>
            <h3
              className="mb-2"
              style={{
                fontSize: "var(--text-3xl)",
                fontFamily: "var(--font-primary)",
              }}
            >
              Heading 3 — The quick brown fox
            </h3>
            <p className="text-sm text-muted-foreground">
              Kontron · 30px · Medium
            </p>
          </div>
          <div>
            <h4
              className="mb-2"
              style={{
                fontSize: "var(--text-2xl)",
                fontFamily: "var(--font-primary)",
              }}
            >
              Heading 4 — The quick brown fox
            </h4>
            <p className="text-sm text-muted-foreground">
              Kontron · 24px · Medium
            </p>
          </div>
          <div>
            <h5
              className="mb-2"
              style={{
                fontSize: "var(--text-xl)",
                fontFamily: "var(--font-primary)",
              }}
            >
              Heading 5 — The quick brown fox
            </h5>
            <p className="text-sm text-muted-foreground">
              Kontron · 20px · Medium
            </p>
          </div>
          <div>
            <h6
              className="mb-2"
              style={{
                fontSize: "var(--text-lg)",
                fontFamily: "var(--font-primary)",
              }}
            >
              Heading 6 — The quick brown fox
            </h6>
            <p className="text-sm text-muted-foreground">
              Kontron · 18px · Medium
            </p>
          </div>
        </div>
      </div>

      {/* Body Text */}
      <div className="space-y-6">
        <h3 className="ds-section-title text-xl mb-4">Body Text</h3>
        <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
          <div>
            <p
              className="text-base mb-2"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Regular body text — Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="text-sm text-muted-foreground">
              Kontron · 16px · Normal
            </p>
          </div>
          <div>
            <p
              className="text-sm mb-2"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Small text — Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <p className="text-sm text-muted-foreground">
              Kontron · 14px · Normal
            </p>
          </div>
          <div>
            <p
              className="text-xs mb-2"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Extra small text — Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="text-sm text-muted-foreground">
              Kontron · 12px · Normal
            </p>
          </div>
          <div>
            <p
              className="text-base mb-2"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              Secondary (Calibri) — Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="text-sm text-muted-foreground">
              Calibri · 16px · Normal
            </p>
          </div>
        </div>
      </div>

      {/* Font Weights */}
      <div className="space-y-6">
        <h3 className="ds-section-title text-xl mb-4">
          Font Weights — Kontron
        </h3>
        <div className="space-y-4 bg-card p-6 rounded-lg border border-border">
          {[
            { label: "Light (300)", weight: 300 },
            { label: "Normal (400)", weight: 400 },
            { label: "Medium (500)", weight: 500 },
            { label: "SemiBold (600)", weight: 600 },
            { label: "Bold (700)", weight: 700 },
          ].map(({ label, weight }) => (
            <div key={weight}>
              <p
                className="text-base mb-1"
                style={{
                  fontFamily: "var(--font-primary)",
                  fontWeight: weight,
                }}
              >
                {label} — The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-xs text-muted-foreground">
                font-weight: {weight}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Text Colors */}
      <div className="space-y-6">
        <h3 className="ds-section-title text-xl mb-4">Text Colors</h3>
        <div className="space-y-3 bg-card p-6 rounded-lg border border-border">
          <p className="text-foreground text-base">
            Foreground — Default text color
          </p>
          <p className="text-muted-foreground text-base">
            Muted Foreground — Secondary text color
          </p>
          <p className="text-primary text-base">
            Primary — Kontron Blue (#005083)
          </p>
          <p className="text-secondary text-base">
            Secondary — Kontron Green (#3FB498)
          </p>
          <p className="text-base" style={{ color: "var(--kontron-magenta)" }}>
            Magenta — Accent color (#E4007F)
          </p>
          <p className="text-base" style={{ color: "var(--kontron-cyan)" }}>
            Cyan — Accent color (#00BCD4)
          </p>
        </div>
      </div>
    </div>
  );
}
