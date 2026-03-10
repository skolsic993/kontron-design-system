/* ─── Kontron weight guide for Cards ─────────────────────
   Metric values / big numbers  → Black  (900)
   Card titles                  → Bold   (700)
   Body / row text              → Normal (400)
   Labels / meta / descriptions → Light  (300)
─────────────────────────────────────────────────────────── */

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

type SystemStatus = "success" | "failing";

/** Status cards: icon + label only (no number). */
interface StatusCardItem {
  label: string;
  status: SystemStatus;
}

/** Metric cards: transaction count + system name (no icon). */
interface MetricCardItem {
  value: string;
  label: string;
}

const STATUS_CARDS: StatusCardItem[] = [
  { label: "TMX", status: "success" },
  { label: "MCxAS", status: "success" },
  { label: "KeyCloak", status: "failing" },
  { label: "IDMS", status: "failing" },
];

const METRIC_CARDS: MetricCardItem[] = [
  { value: "1,247", label: "Active Transactions" },
  { value: "892", label: "Failed Transactions" },
  { value: "0", label: "Suspended Transactions" },
  { value: "312", label: "Incident Transactions" },
];

export function DashboardCards() {
  return (
    <div className="space-y-12">
      <h3 className="ds-section-title text-xl mb-4">
        Dashboard Cards
        <span
          className="ml-3 text-sm text-muted-foreground"
          style={{ fontWeight: 300 }}
        >
          Status cards (icon + label) and metric cards (transactions + system
          name).
        </span>
      </h3>
      <div className="pb-12 space-y-8">
        {/* Row 1: Status cards — icon with success/failing + label, no number */}
        <div className="mb-4">
          <p
            className="text-sm text-muted-foreground mb-3"
            style={{ fontWeight: 300 }}
          >
            Status (icon + label)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {STATUS_CARDS.map(({ label, status }) => (
              <Card key={label}>
                <CardContent className="p-4 flex items-center gap-4">
                  <div
                    className="flex shrink-0 size-12 p-3 items-center justify-center rounded-lg bg-background"
                    aria-hidden
                  >
                    {status === "success" ? (
                      <CheckCircle2
                        className="size-6 text-kontron-green animate-pulse"
                        aria-label="System available"
                      />
                    ) : (
                      <XCircle
                        className="size-6 text-destructive"
                        aria-label="System failing"
                      />
                    )}
                  </div>
                  <span
                    className="text-xl truncate"
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

        {/* Row 2: Metric cards — number (transactions) + system name, no icon */}
        <div>
          <p
            className="text-sm text-muted-foreground mb-3"
            style={{ fontWeight: 300 }}
          >
            Transactions by system
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {METRIC_CARDS.map(({ label, value }) => (
              <Card key={label}>
                <CardContent className="p-4 flex flex-col gap-1">
                  <span
                    className="text-2xl font-black text-foreground tabular-nums"
                    style={{ fontFamily: "var(--font-primary)" }}
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
    </div>
  );
}
