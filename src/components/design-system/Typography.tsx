const HEADING_LEVELS = [1, 2, 3, 4, 5, 6] as const;

function HeadingRow({
  level,
  size,
  label,
  weight,
}: {
  level: (typeof HEADING_LEVELS)[number];
  size: string;
  label: string;
  weight: number;
}) {
  const HeadingTag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <HeadingTag
          className="min-w-0"
          style={{
            fontSize: size,
            fontFamily: "var(--font-primary)",
            fontWeight: weight,
          }}
        >
          Heading {level} — The quick brown fox
        </HeadingTag>
        <span className="text-sm text-muted-foreground shrink-0 rounded px-2 py-1 font-mono tabular-nums flex items-center justify-center">
          — {weight}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">
        Kontron · {label} · Medium
      </p>
    </div>
  );
}

export function Typography() {
  return (
    <div className="space-y-12">
      {/* Font Families */}
      <div className="space-y-6">
        <h3 className="ds-section-title text-xl mb-4">Font Families</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Primary: Kontron */}
          <div className="bg-card p-6 rounded-lg shadow-sm space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-2 py-0.5 rounded text-xs"
                style={{ background: "var(--kontron-blue)", color: "#fff" }}
              >
                Primary
              </span>
              <span className="text-muted-foreground text-sm">Brand font</span>
            </div>
            {[
              { name: "Kontron Light", weight: 300 },
              { name: "Kontron Regular", weight: 400 },
              { name: "Kontron Medium", weight: 500 },
              { name: "Kontron Bold", weight: 700 },
            ].map(({ name, weight }) => (
              <div
                key={weight}
                className="flex items-center justify-between gap-4"
              >
                <p
                  className="text-4xl shrink-0"
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: weight,
                  }}
                >
                  {name}
                </p>
                <span className="text-sm text-muted-foreground shrink-0 rounded px-2 py-1 font-mono tabular-nums flex items-center justify-center">
                  — {weight}
                </span>
              </div>
            ))}
            <p className="text-sm text-muted-foreground mt-2">
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                --font-primary
              </code>
              &nbsp;· Kontron → Exo 2 (web fallback)
            </p>
          </div>

          {/* Secondary: Calibri */}
          <div className="bg-card p-6 rounded-lg shadow-sm space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-2 py-0.5 rounded text-xs"
                style={{ background: "var(--kontron-green)", color: "#fff" }}
              >
                Secondary
              </span>
              <span className="text-muted-foreground text-sm">
                Secondary font
              </span>
            </div>
            {[
              { name: "Calibri Light", weight: 300 },
              { name: "Calibri Regular", weight: 400 },
              { name: "Calibri SemiBold", weight: 600 },
              { name: "Calibri Bold", weight: 700 },
            ].map(({ name, weight }) => (
              <div
                key={weight}
                className="flex items-center justify-between gap-4"
              >
                <p
                  className="text-4xl shrink-0"
                  style={{
                    fontFamily: "var(--font-secondary)",
                    fontWeight: weight,
                  }}
                >
                  {name}
                </p>
                <span className="text-sm text-muted-foreground shrink-0 rounded px-2 py-1 font-mono tabular-nums flex items-center justify-center">
                  — {weight}
                </span>
              </div>
            ))}
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
        <div className="space-y-4 bg-card p-6 rounded-lg shadow-sm">
          <HeadingRow
            level={1}
            size="var(--text-5xl)"
            label="48px ( text-5xl class)"
            weight={500}
          />
          <HeadingRow
            level={2}
            size="var(--text-4xl)"
            label="36px ( text-4xl class)"
            weight={500}
          />
          <HeadingRow
            level={3}
            size="var(--text-3xl)"
            label="30px ( text-3xl class)"
            weight={500}
          />
          <HeadingRow
            level={4}
            size="var(--text-2xl)"
            label="24px ( text-2xl class)"
            weight={500}
          />
          <HeadingRow
            level={5}
            size="var(--text-xl)"
            label="20px ( text-xl class)"
            weight={500}
          />
          <HeadingRow
            level={6}
            size="var(--text-lg)"
            label="18px ( text-lg class)"
            weight={500}
          />
        </div>
      </div>

      {/* Body Text */}
      <div className="space-y-6">
        <h3 className="ds-section-title text-xl mb-4">Body Text</h3>
        <div className="space-y-4 bg-card p-6 rounded-lg shadow-sm">
          <div>
            <p
              className="text-lg mb-2"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Regular body text — Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="text-sm text-muted-foreground">
              Kontron · 18px ( text-lg class) · Normal
            </p>
          </div>
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
              Kontron · 16px ( text-base class) · Normal
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
              Kontron · 14px ( text-sm class) · Normal
            </p>
          </div>
          <div>
            <p
              className="text-lg mb-2"
              style={{
                fontFamily: "var(--font-secondary)",
                letterSpacing: "-0.01em",
              }}
            >
              Secondary (Calibri) — Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="text-sm text-muted-foreground">
              Calibri · 18px ( text-lg class) · Normal
            </p>
          </div>
          <div>
            <p
              className="text-base mb-2"
              style={{
                fontFamily: "var(--font-secondary)",
                letterSpacing: "-0.01em",
              }}
            >
              Secondary (Calibri) — Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="text-sm text-muted-foreground">
              Calibri · 16px ( text-base class) · Normal
            </p>
          </div>
          <div>
            <p
              className="text-sm mb-2"
              style={{
                fontFamily: "var(--font-secondary)",
                letterSpacing: "-0.01em",
              }}
            >
              Secondary (Calibri) — Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="text-sm text-muted-foreground">
              Calibri · 14px ( text-sm class) · Normal
            </p>
          </div>
        </div>
      </div>

      {/* Font Weights */}
      <div className="space-y-6">
        <h3 className="ds-section-title text-xl mb-4">
          Font Weights — Kontron
        </h3>
        <div className="space-y-4 bg-card p-6 rounded-lg shadow-sm">
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
        <div className="space-y-3 bg-card p-6 rounded-lg shadow-sm">
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
