/* ─── Kontron weight guide for Cards ─────────────────────
   Metric values / big numbers  → Black  (900)
   Card titles                  → Bold   (700)
   Body / row text              → Normal (400)
   Labels / meta / descriptions → Light  (300)
─────────────────────────────────────────────────────────── */

import { Card, CardContent } from "@/components/ui/card";

export function DashboardCards() {
  return (
    <div className="space-y-12">
      <h3 className="ds-section-title text-xl mb-4">
        Brand Logo
        <span
          className="ml-3 text-sm text-muted-foreground"
          style={{ fontWeight: 300 }}
        >
          Use the full Kontron logo on larger viewports and the compact mark on
          small screens.
        </span>
      </h3>
      <div className="pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Projects", value: "24" },
            { label: "Completed", value: "18" },
            { label: "In Progress", value: "1" },
            {
              label: "Pending",
              value: "5",
              color: "var(--kontron-cyan)",
            },
          ].map(({ label, value, color }) => (
            <Card key={label}>
              <CardContent className="p-4 h-32 flex flex-col items-center justify-center gap-1">
                <span
                  className="text-3xl font-black text-foreground"
                  style={
                    color
                      ? {
                          fontFamily: "var(--font-primary)",
                          color,
                        }
                      : { fontFamily: "var(--font-primary)" }
                  }
                >
                  {value}
                </span>
                <span
                  className="text-sm text-muted-foreground"
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 300,
                  }}
                >
                  {label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
