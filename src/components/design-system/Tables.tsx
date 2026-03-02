import { ArrowUpDown, Edit, MoreHorizontal, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

/* ─── Kontron weight guide for Tables ────────────────────
   Section heading      → Bold     (700)
   Column headers (th)  → Bold     (700)
   Primary data cell    → Medium   (500)  name / ID / amount
   Secondary data cell  → Normal   (400)  email / date / product
   Caption / note       → Light    (300)
─────────────────────────────────────────────────────────── */

const th: React.CSSProperties = {
  fontFamily: "var(--font-primary)",
  fontWeight: 700,
};
const tdPrimary: React.CSSProperties = {
  fontFamily: "var(--font-primary)",
  fontWeight: 500,
};
const tdSecondary: React.CSSProperties = {
  fontFamily: "var(--font-primary)",
  fontWeight: 400,
};
const tdLight: React.CSSProperties = {
  fontFamily: "var(--font-primary)",
  fontWeight: 300,
};

export function Tables() {
  const users = [
    {
      id: 1,
      name: "Anna Müller",
      email: "anna.mueller@kontron.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Thomas Schmidt",
      email: "thomas.schmidt@kontron.com",
      role: "User",
      status: "Active",
    },
    {
      id: 3,
      name: "Lena Becker",
      email: "lena.becker@kontron.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Klaus Weber",
      email: "klaus.weber@kontron.com",
      role: "Manager",
      status: "Active",
    },
    {
      id: 5,
      name: "Sophie Fischer",
      email: "sophie.fischer@kontron.com",
      role: "User",
      status: "Pending",
    },
  ];

  const orders = [
    {
      id: "ORD-001",
      customer: "Acme Corp",
      product: "Server System X500",
      amount: "€12,499",
      date: "2026-02-01",
      status: "Completed",
    },
    {
      id: "ORD-002",
      customer: "TechStart GmbH",
      product: "Embedded PC KBox",
      amount: "€8,750",
      date: "2026-02-02",
      status: "Processing",
    },
    {
      id: "ORD-003",
      customer: "Global Systems AG",
      product: "IoT Gateway M2M",
      amount: "€5,200",
      date: "2026-02-03",
      status: "Shipped",
    },
    {
      id: "ORD-004",
      customer: "Digital Solutions",
      product: "Storage Array NAS",
      amount: "€15,600",
      date: "2026-02-04",
      status: "Completed",
    },
    {
      id: "ORD-005",
      customer: "Smart Industries",
      product: "Edge Device ITC",
      amount: "€3,450",
      date: "2026-02-05",
      status: "Pending",
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusStyles: Record<string, { bg: string; text: string }> = {
      Active: { bg: "var(--kontron-green)", text: "white" },
      Inactive: { bg: "var(--kontron-gray)", text: "white" },
      Pending: { bg: "var(--kontron-cyan)", text: "white" },
      Completed: { bg: "var(--kontron-blue)", text: "white" },
      Processing: { bg: "var(--kontron-magenta)", text: "white" },
      Shipped: { bg: "var(--kontron-green-light)", text: "white" },
    };
    const s = statusStyles[status] || {
      bg: "var(--kontron-gray)",
      text: "white",
    };
    return (
      <Badge
        style={{
          backgroundColor: s.bg,
          color: s.text,
          fontFamily: "var(--font-primary)",
          fontWeight: 600,
        }}
      >
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-12">
      {/* Basic Table */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Basic Table
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            headers Bold (700) · names Medium (500) · emails Normal (400)
          </span>
        </h3>
        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableCaption style={tdLight}>
              A list of Kontron team members
            </TableCaption>
            <TableHeader>
              <TableRow style={{ backgroundColor: "var(--kontron-blue-pale)" }}>
                <TableHead style={th}>ID</TableHead>
                <TableHead style={th}>Name</TableHead>
                <TableHead style={th}>Email</TableHead>
                <TableHead style={th}>Role</TableHead>
                <TableHead style={th}>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell style={tdPrimary}>{user.id}</TableCell>
                  <TableCell style={tdPrimary}>{user.name}</TableCell>
                  <TableCell style={tdSecondary}>{user.email}</TableCell>
                  <TableCell style={tdSecondary}>{user.role}</TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Table with Actions */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Table with Actions
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            blue header · amounts Medium (500) · dates Light (300)
          </span>
        </h3>
        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow style={{ backgroundColor: "var(--kontron-blue)" }}>
                {[
                  "Order ID",
                  "Customer",
                  "Product",
                  "Amount",
                  "Date",
                  "Status",
                  "Actions",
                ].map((col, i) => (
                  <TableHead
                    key={col}
                    style={{ ...th, color: "white" }}
                    className={i === 6 ? "text-right" : ""}
                  >
                    {["Order ID", "Customer", "Amount"].includes(col) ? (
                      <div className="flex items-center gap-2">
                        {col} <ArrowUpDown className="h-4 w-4" />
                      </div>
                    ) : (
                      col
                    )}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="hover:bg-muted/50">
                  <TableCell style={tdPrimary}>{order.id}</TableCell>
                  <TableCell style={tdSecondary}>{order.customer}</TableCell>
                  <TableCell style={tdSecondary}>{order.product}</TableCell>
                  <TableCell style={{ ...tdPrimary, fontWeight: 600 }}>
                    {order.amount}
                  </TableCell>
                  <TableCell style={tdLight}>{order.date}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        style={{
                          fontFamily: "var(--font-primary)",
                          fontWeight: 400,
                        }}
                      >
                        <DropdownMenuLabel style={{ fontWeight: 700 }}>
                          Actions
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem style={{ fontWeight: 400 }}>
                          <Edit className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem style={{ fontWeight: 400 }}>
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-destructive"
                          style={{ fontWeight: 400 }}
                        >
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Striped Table */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Striped Table
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            green header · alternating rows
          </span>
        </h3>
        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow style={{ backgroundColor: "var(--kontron-green)" }}>
                {["Name", "Email", "Role", "Status", "Actions"].map(
                  (col, i) => (
                    <TableHead
                      key={col}
                      style={{ ...th, color: "white" }}
                      className={i === 4 ? "text-right" : ""}
                    >
                      {col}
                    </TableHead>
                  ),
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user, index) => (
                <TableRow
                  key={user.id}
                  style={{
                    backgroundColor:
                      index % 2 === 0
                        ? "transparent"
                        : "var(--kontron-green-pale)",
                  }}
                >
                  <TableCell style={tdPrimary}>{user.name}</TableCell>
                  <TableCell style={tdSecondary}>{user.email}</TableCell>
                  <TableCell style={tdSecondary}>{user.role}</TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Compact Table */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Compact Table
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            dense layout · all Kontron weights
          </span>
        </h3>
        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                {["ID", "Name", "Email", "Status"].map((col) => (
                  <TableHead key={col} style={{ ...th }} className="h-10">
                    {col}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.slice(0, 3).map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="py-2" style={tdLight}>
                    {user.id}
                  </TableCell>
                  <TableCell className="py-2" style={tdPrimary}>
                    {user.name}
                  </TableCell>
                  <TableCell className="py-2" style={tdSecondary}>
                    {user.email}
                  </TableCell>
                  <TableCell className="py-2">
                    {getStatusBadge(user.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Summary Table — Gradient Header */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Summary Table — Gradient Header
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            KPIs · changes Bold (700) · baselines Normal (400)
          </span>
        </h3>
        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow
                style={{ background: "var(--kontron-gradient-linear)" }}
              >
                {["Metric", "This Month", "Last Month", "Change"].map(
                  (col, i) => (
                    <TableHead
                      key={col}
                      style={{ ...th, color: "white" }}
                      className={i > 0 ? "text-right" : ""}
                    >
                      {col}
                    </TableHead>
                  ),
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  metric: "Total Revenue",
                  cur: "€45,231",
                  prev: "€41,847",
                  chg: "+8.1%",
                  pos: true,
                },
                {
                  metric: "New Customers",
                  cur: "1,245",
                  prev: "1,112",
                  chg: "+12.0%",
                  pos: true,
                },
                {
                  metric: "Orders",
                  cur: "3,456",
                  prev: "3,627",
                  chg: "-4.7%",
                  pos: false,
                },
                {
                  metric: "Conversion Rate",
                  cur: "3.24%",
                  prev: "3.12%",
                  chg: "+3.8%",
                  pos: true,
                },
              ].map(({ metric, cur, prev, chg, pos }) => (
                <TableRow key={metric}>
                  <TableCell style={tdPrimary}>{metric}</TableCell>
                  <TableCell
                    className="text-right"
                    style={{ ...tdPrimary, fontWeight: 700 }}
                  >
                    {cur}
                  </TableCell>
                  <TableCell className="text-right" style={tdSecondary}>
                    {prev}
                  </TableCell>
                  <TableCell
                    className={`text-right ${pos ? "text-green-600" : "text-red-600"}`}
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 700,
                    }}
                  >
                    {chg}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
