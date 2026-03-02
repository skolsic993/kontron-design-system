import {
  BadgeCheck,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Landmark,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  PieChart,
  Repeat,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "../ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { cn } from "../ui/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  badge?: { text: string; variant: "updated" | "new" };
}

function NavItem({ icon, label, isActive, badge }: NavItemProps) {
  return (
    <a
      href="#"
      className={cn(
        "flex items-center justify-between px-4 py-3 rounded-lg transition-all",
        isActive
          ? "bg-muted/50 text-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/30",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="h-5 w-5">{icon}</div>
        <span
          style={{
            fontFamily: "var(--font-primary)",
            fontWeight: isActive ? 600 : 300,
            fontSize: "var(--text-sm)",
          }}
        >
          {label}
        </span>
      </div>
      <div className="flex items-center gap-2">
        {badge && (
          <Badge
            variant="secondary"
            className={cn(
              "text-xs px-2 py-0.5",
              badge.variant === "updated" &&
                "bg-blue-50 text-blue-700 border-blue-200",
              badge.variant === "new" &&
                "bg-green-50 text-green-700 border-green-200",
            )}
            style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
          >
            {badge.text}
          </Badge>
        )}
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </div>
    </a>
  );
}

interface MenuItem {
  label: string;
  active?: boolean;
}

interface MenuSection {
  id: string;
  label: string;
  items: MenuItem[];
}

const MENU_SECTIONS: MenuSection[] = [
  {
    id: "admin",
    label: "Admin",
    items: [
      { label: "Configuration" },
      { label: "Roles" },
      { label: "Domain" },
      { label: "Call authorization class" },
    ],
  },
  {
    id: "home",
    label: "Home",
    items: [{ label: "Dashboard", active: true }],
  },
  {
    id: "locationComm",
    label: "Location dependent communication",
    items: [{ label: "Area management" }, { label: "Relationship management" }],
  },
  {
    id: "cgmsEditor",
    label: "Cgms editor",
    items: [{ label: "Xml document" }, { label: "Xml editor template" }],
  },
  {
    id: "groupMgmt",
    label: "Group management",
    items: [{ label: "Mcx groups" }],
  },
  {
    id: "numberMgmt",
    label: "Number management",
    items: [{ label: "Number directory" }, { label: "Authorization class" }],
  },
  {
    id: "subscriberMgmt",
    label: "Subscriber management",
    items: [{ label: "Subscribers" }, { label: "Profiles" }],
  },
  {
    id: "functionalRole",
    label: "Functional role",
    items: [
      { label: "Imports" },
      { label: "Functional roles" },
      { label: "Phonebook filter" },
      { label: "Predefined messages" },
      { label: "Ringtone matrix" },
    ],
  },
  {
    id: "deviceMgmt",
    label: "Device management",
    items: [{ label: "Imports" }, { label: "Devices" }],
  },
  {
    id: "csam",
    label: "CSAM",
    items: [
      { label: "Release cause" },
      { label: "Access matrix" },
      { label: "Screening plan" },
      { label: "Graph" },
      { label: "Holiday" },
      { label: "Time" },
    ],
  },
  {
    id: "resync",
    label: "Resync",
    items: [{ label: "Statistic" }, { label: "Resync" }],
  },
  {
    id: "general",
    label: "General",
    items: [
      { label: "Bulks" },
      { label: "Task list" },
      { label: "Transactions" },
    ],
  },
];

function SidebarNav({ isDark }: { isDark: boolean }) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    admin: true,
    home: true,
    locationComm: false,
    cgmsEditor: false,
    groupMgmt: false,
    numberMgmt: false,
    subscriberMgmt: false,
    functionalRole: false,
    deviceMgmt: false,
    csam: false,
    resync: false,
    general: false,
  });

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const wrapperClass = isDark
    ? "bg-[#1C1C1E] border-border rounded-lg p-4 h-full overflow-auto"
    : "bg-background border border-border rounded-lg p-4 h-full overflow-auto";

  const sectionHeaderClass = isDark
    ? "text-white font-bold"
    : "text-[#333333] font-bold";

  const itemClass = (active?: boolean) =>
    cn(
      "block w-full text-left py-2 pr-3 rounded transition-colors",
      active
        ? isDark
          ? "text-white font-semibold"
          : "text-foreground font-semibold"
        : isDark
          ? "text-white/70 hover:text-white hover:bg-white/10 font-light"
          : "text-[#666666] hover:text-foreground hover:bg-muted/30 font-normal",
    );

  return (
    <div className={wrapperClass}>
      <nav className="space-y-1">
        {MENU_SECTIONS.map((section) => {
          const isOpen = openSections[section.id];
          return (
            <Collapsible
              key={section.id}
              open={isOpen}
              onOpenChange={() => toggleSection(section.id)}
            >
              <CollapsibleTrigger
                className={cn(
                  "flex items-center justify-between w-full py-2.5 rounded transition-colors",
                  isDark
                    ? "text-white hover:bg-white/10"
                    : "text-foreground hover:bg-muted/30",
                )}
              >
                <span
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 700,
                    fontSize: "var(--text-sm)",
                  }}
                  className={sectionHeaderClass}
                >
                  {section.label}
                </span>
                {isOpen ? (
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform",
                      isDark ? "text-white/70" : "text-muted-foreground",
                    )}
                  />
                ) : (
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform",
                      isDark ? "text-white/70" : "text-muted-foreground",
                    )}
                  />
                )}
              </CollapsibleTrigger>
              {section.items.length > 0 && (
                <CollapsibleContent>
                  <div className="pl-3 mt-0.5 border-l border-border space-y-0.5">
                    {section.items.map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className={cn("pl-3", itemClass(item.active))}
                        style={{
                          fontFamily: "var(--font-primary)",
                          fontWeight: item.active ? 600 : 300,
                          fontSize: "var(--text-sm)",
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </CollapsibleContent>
              )}
            </Collapsible>
          );
        })}
      </nav>
    </div>
  );
}

export function Navigation() {
  return (
    <div className="space-y-12">
      {/* Sidebar Navigation — Light Theme */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Sidebar Navigation — Light Theme
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            active SemiBold (600) · inactive Light (300)
          </span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[600px]">
          <div className="lg:col-span-1">
            <div className="bg-background border border-border rounded-lg p-4 h-full">
              <h4
                className="text-sm mb-4 px-4"
                style={{
                  fontFamily: "var(--font-primary)",
                  fontWeight: 700,
                  color: "var(--kontron-blue)",
                }}
              >
                In-depth Guides
              </h4>
              <nav className="space-y-1">
                <NavItem
                  icon={<LayoutDashboard />}
                  label="Signals"
                  badge={{ text: "Updated", variant: "updated" }}
                />
                <NavItem icon={<Repeat />} label="Components" />
                <NavItem icon={<CreditCard />} label="Templates" />
                <NavItem icon={<PieChart />} label="Directives" />
                <NavItem
                  icon={<Landmark />}
                  label="Dependency Injection"
                  badge={{ text: "Updated", variant: "updated" }}
                />
                <NavItem
                  icon={<LineChart />}
                  label="Routing"
                  badge={{ text: "Updated", variant: "updated" }}
                  isActive
                />
                <NavItem
                  icon={<BadgeCheck />}
                  label="Forms"
                  badge={{ text: "Updated", variant: "updated" }}
                />
                <NavItem icon={<MessageSquare />} label="HTTP Client" />
              </nav>
            </div>
          </div>
          <div className="lg:col-span-3 bg-card rounded-lg border border-border p-8">
            <h4
              className="text-2xl mb-2"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 700 }}
            >
              Routing
            </h4>
            <p
              style={{ fontFamily: "var(--font-primary)", fontWeight: 400 }}
              className="text-muted-foreground"
            >
              This is where your main content would be displayed. The sidebar
              provides clean, organized navigation with badges to highlight
              updated or new content.
            </p>
            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <p
                style={{
                  fontFamily: "var(--font-primary)",
                  fontWeight: 300,
                  fontSize: "var(--text-sm)",
                }}
                className="text-muted-foreground"
              >
                Click on any navigation item to view its corresponding content
                in this area.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Navigation — Dark Theme */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Sidebar Navigation — Dark Theme
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            active SemiBold (600) · inactive Light (300)
          </span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[600px]">
          <div className="lg:col-span-1">
            <div
              className="rounded-lg p-4 h-full"
              style={{ backgroundColor: "var(--kontron-blue-darker)" }}
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 px-4">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--kontron-green)" }}
                  >
                    <span
                      className="text-white"
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 700,
                      }}
                    >
                      HS
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-white"
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 600,
                        fontSize: "var(--text-sm)",
                      }}
                    >
                      Hi, Sam
                    </p>
                    <p
                      className="text-white/60"
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 300,
                        fontSize: "var(--text-xs)",
                      }}
                    >
                      Premium Member
                    </p>
                  </div>
                </div>
              </div>
              <nav className="space-y-1">
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white bg-white/10 transition-all"
                >
                  <LayoutDashboard className="h-5 w-5" />
                  <span
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 600,
                      fontSize: "var(--text-sm)",
                    }}
                  >
                    Dashboard
                  </span>
                </a>
                {[
                  { icon: <Repeat className="h-5 w-5" />, label: "Recurring" },
                  {
                    icon: <CreditCard className="h-5 w-5" />,
                    label: "Spending",
                  },
                  {
                    icon: <Landmark className="h-5 w-5" />,
                    label: "Net Worth",
                  },
                  {
                    icon: <LineChart className="h-5 w-5" />,
                    label: "Transactions",
                  },
                  {
                    icon: <BadgeCheck className="h-5 w-5" />,
                    label: "Credit Score",
                  },
                ].map(({ icon, label }) => (
                  <a
                    href="#"
                    key={label}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
                  >
                    {icon}
                    <span
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 300,
                        fontSize: "var(--text-sm)",
                      }}
                    >
                      {label}
                    </span>
                  </a>
                ))}
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all"
                  style={{
                    color: "var(--kontron-magenta)",
                    backgroundColor: "rgba(228, 0, 127, 0.1)",
                  }}
                >
                  <PieChart className="h-5 w-5" />
                  <span
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 600,
                      fontSize: "var(--text-sm)",
                    }}
                  >
                    Budgets
                  </span>
                </a>
              </nav>
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                      fontSize: "var(--text-sm)",
                    }}
                  >
                    Chat with us
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 bg-card rounded-lg border border-border p-8">
            <h4
              className="text-2xl mb-2"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 700 }}
            >
              Budgets
            </h4>
            <p
              className="text-muted-foreground mb-6"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 400 }}
            >
              Track and manage your monthly budgets with detailed insights and
              analytics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-border rounded-lg">
                <p
                  className="text-muted-foreground"
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 300,
                    fontSize: "var(--text-sm)",
                  }}
                >
                  Total Budget
                </p>
                <p
                  className="text-2xl mt-1"
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 900,
                    color: "var(--kontron-blue)",
                  }}
                >
                  €5,000
                </p>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <p
                  className="text-muted-foreground"
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 300,
                    fontSize: "var(--text-sm)",
                  }}
                >
                  Spent
                </p>
                <p
                  className="text-2xl mt-1"
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 900,
                    color: "var(--kontron-green)",
                  }}
                >
                  €3,245
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar with Grouped Sections */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Sidebar with Grouped Sections
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            group headings Bold (700) · active SemiBold (600) · inactive Light
            (300)
          </span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[500px]">
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-4 h-full">
              {[
                {
                  group: "Main",
                  items: [
                    {
                      icon: <LayoutDashboard className="h-4 w-4" />,
                      label: "Dashboard",
                      active: true,
                    },
                    {
                      icon: <LineChart className="h-4 w-4" />,
                      label: "Analytics",
                      active: false,
                    },
                  ],
                },
                {
                  group: "Management",
                  items: [
                    {
                      icon: <CreditCard className="h-4 w-4" />,
                      label: "Transactions",
                      active: false,
                    },
                    {
                      icon: <PieChart className="h-4 w-4" />,
                      label: "Budgets",
                      active: false,
                    },
                    {
                      icon: <Landmark className="h-4 w-4" />,
                      label: "Accounts",
                      active: false,
                    },
                  ],
                },
                {
                  group: "Support",
                  items: [
                    {
                      icon: <MessageSquare className="h-4 w-4" />,
                      label: "Help Center",
                      active: false,
                    },
                  ],
                },
              ].map(({ group, items }) => (
                <div className="mb-6" key={group}>
                  <h4
                    className="px-4 mb-3 uppercase tracking-wider text-muted-foreground"
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 700,
                      fontSize: "var(--text-xs)",
                    }}
                  >
                    {group}
                  </h4>
                  <nav className="space-y-1">
                    {items.map(({ icon, label, active }) => (
                      <a
                        key={label}
                        href="#"
                        className={cn(
                          "flex items-center gap-3 px-4 py-2 rounded-md transition-all",
                          active
                            ? "text-foreground bg-muted/50"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/30",
                        )}
                      >
                        {icon}
                        <span
                          style={{
                            fontFamily: "var(--font-primary)",
                            fontWeight: active ? 600 : 300,
                            fontSize: "var(--text-sm)",
                          }}
                        >
                          {label}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 bg-card rounded-lg border border-border p-8">
            <h4
              className="text-2xl mb-2"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 700 }}
            >
              Content Area
            </h4>
            <p
              className="text-muted-foreground"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 400 }}
            >
              Grouped sections help organise navigation items into logical
              categories, making it easier for users to find what they need.
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar Navigation — Grouped, collapsible, no icons (light + dark) */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">Sidebar Navigation</h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[600px]">
          <div className="lg:col-span-1 space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Light</p>
              <SidebarNav isDark={false} />
            </div>
            <div className="dark">
              <p className="text-sm text-muted-foreground mb-2">Dark</p>
              <SidebarNav isDark={true} />
            </div>
          </div>
          <div className="lg:col-span-3 bg-card rounded-lg border border-border p-8">
            <h4
              className="text-2xl mb-2"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 700 }}
            >
              Content area
            </h4>
            <p
              className="text-muted-foreground"
              style={{ fontFamily: "var(--font-primary)", fontWeight: 400 }}
            >
              Grouped, collapsible sections with no icons. Section headers are
              bold; nested items are indented with a vertical line. Chevron
              right when collapsed, down when expanded. Same structure in light
              and dark using the app color system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
