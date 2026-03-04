import { Card, CardContent } from "../ui/card";

/* ─── Kontron weight guide for Cards ─────────────────────
   Metric values / big numbers  → Black  (900)
   Card titles                  → Bold   (700)
   Body / row text              → Normal (400)
   Labels / meta / descriptions → Light  (300)
─────────────────────────────────────────────────────────── */

export function Cards() {
  return (
    <div className="space-y-12">
      {/* Compact Stats */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Compact Statistics
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            values Black (900) · labels Light (300)
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Total Projects",
              value: "127",
              color: "var(--kontron-blue)",
            },
            { label: "Completed", value: "98", color: "var(--kontron-green)" },
            {
              label: "In Progress",
              value: "24",
              color: "var(--kontron-magenta)",
            },
            { label: "Pending", value: "5", color: "var(--kontron-cyan)" },
          ].map(({ label, value, color }) => (
            <Card key={label}>
              <CardContent className="p-4">
                <div
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 300,
                    fontSize: "var(--text-sm)",
                  }}
                  className="text-muted-foreground"
                >
                  {label}
                </div>
                <div
                  className="text-3xl mt-1"
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 900,
                    color,
                  }}
                >
                  {value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
