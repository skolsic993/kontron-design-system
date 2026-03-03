import {
  Activity,
  ArrowRight,
  DollarSign,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

/* ─── Kontron weight guide for Cards ─────────────────────
   Metric values / big numbers  → Black  (900)
   Card titles                  → Bold   (700)
   Body / row text              → Normal (400)
   Labels / meta / descriptions → Light  (300)
─────────────────────────────────────────────────────────── */

export function Cards() {
  return (
    <div className="space-y-12">
      {/* Dashboard Cards */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Dashboard Cards
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            values Dark (900) · titles Bold (700) · labels Light (300)
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                      fontSize: "var(--text-sm)",
                    }}
                    className="text-muted-foreground"
                  >
                    Total Revenue
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 900,
                    }}
                    className="text-2xl mt-2"
                  >
                    $45,231
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                      fontSize: "var(--text-xs)",
                    }}
                    className="text-green-600 mt-1 flex items-center gap-1"
                  >
                    <TrendingUp className="h-3 w-3" />
                    +20.1% from last month
                  </p>
                </div>
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--kontron-blue-pale)" }}
                >
                  <DollarSign
                    className="h-6 w-6"
                    style={{ color: "var(--kontron-blue)" }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                      fontSize: "var(--text-sm)",
                    }}
                    className="text-muted-foreground"
                  >
                    Active Users
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 900,
                    }}
                    className="text-2xl mt-2"
                  >
                    2,350
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                      fontSize: "var(--text-xs)",
                    }}
                    className="text-green-600 mt-1 flex items-center gap-1"
                  >
                    <TrendingUp className="h-3 w-3" />
                    +15.3% from last month
                  </p>
                </div>
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--kontron-green-pale)" }}
                >
                  <Users
                    className="h-6 w-6"
                    style={{ color: "var(--kontron-green)" }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                      fontSize: "var(--text-sm)",
                    }}
                    className="text-muted-foreground"
                  >
                    Conversion Rate
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 900,
                    }}
                    className="text-2xl mt-2"
                  >
                    3.24%
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                      fontSize: "var(--text-xs)",
                    }}
                    className="text-red-600 mt-1 flex items-center gap-1"
                  >
                    <TrendingDown className="h-3 w-3" />
                    -2.4% from last month
                  </p>
                </div>
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(228, 0, 127, 0.1)" }}
                >
                  <Activity
                    className="h-6 w-6"
                    style={{ color: "var(--kontron-magenta)" }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                      fontSize: "var(--text-sm)",
                    }}
                    className="text-muted-foreground"
                  >
                    Growth
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 900,
                    }}
                    className="text-2xl mt-2"
                  >
                    +12.5%
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                      fontSize: "var(--text-xs)",
                    }}
                    className="text-green-600 mt-1 flex items-center gap-1"
                  >
                    <TrendingUp className="h-3 w-3" />
                    +4.3% from last month
                  </p>
                </div>
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(0, 188, 212, 0.1)" }}
                >
                  <TrendingUp
                    className="h-6 w-6"
                    style={{ color: "var(--kontron-cyan)" }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* List Cards */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          List Cards
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            titles Bold (700) · row text Normal (400) · meta Light (300)
          </span>
        </h3>
        <Card>
          <CardHeader>
            <CardTitle
              style={{ fontFamily: "var(--font-primary)", fontWeight: 700 }}
            >
              Recent Transactions
            </CardTitle>
            <CardDescription
              style={{ fontFamily: "var(--font-primary)", fontWeight: 300 }}
            >
              Your latest transactions and activities
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              <div className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--kontron-blue-pale)" }}
                  >
                    <DollarSign
                      className="h-5 w-5"
                      style={{ color: "var(--kontron-blue)" }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 500,
                      }}
                    >
                      Payment Received
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 300,
                        fontSize: "var(--text-sm)",
                      }}
                      className="text-muted-foreground"
                    >
                      From Client A
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 600,
                    }}
                    className="text-green-600"
                  >
                    +$2,500
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                      fontSize: "var(--text-sm)",
                    }}
                    className="text-muted-foreground"
                  >
                    Today, 2:30 PM
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--kontron-green-pale)" }}
                  >
                    <Users
                      className="h-5 w-5"
                      style={{ color: "var(--kontron-green)" }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 500,
                      }}
                    >
                      New User Registration
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 300,
                        fontSize: "var(--text-sm)",
                      }}
                      className="text-muted-foreground"
                    >
                      john.doe@kontron.com
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200"
                  >
                    Active
                  </Badge>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                      fontSize: "var(--text-sm)",
                    }}
                    className="text-muted-foreground mt-1"
                  >
                    Yesterday
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(228, 0, 127, 0.1)" }}
                  >
                    <Activity
                      className="h-5 w-5"
                      style={{ color: "var(--kontron-magenta)" }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 500,
                      }}
                    >
                      Subscription Renewal
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 300,
                        fontSize: "var(--text-sm)",
                      }}
                      className="text-muted-foreground"
                    >
                      Premium Plan
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 600,
                      color: "var(--kontron-magenta)",
                    }}
                  >
                    -$49.99
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                      fontSize: "var(--text-sm)",
                    }}
                    className="text-muted-foreground"
                  >
                    Feb 1, 2026
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t">
            <Button
              variant="ghost"
              className="w-full"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 400 }}
            >
              View All Transactions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

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
