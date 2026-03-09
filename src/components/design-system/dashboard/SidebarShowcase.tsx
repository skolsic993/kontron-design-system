import { LayoutDashboard, LogOut, PanelLeftClose, Settings, Settings2, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ─── Kontron SVG logo ─────────────────────────────────────────────────── */
function KontronLogo({ variant }: { variant: Variant }) {
  const isDark = variant === "dark";
  return (
    <svg
      viewBox="0 0 283.4 52"
      style={{ height: "20px", width: "auto" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon fill={isDark ? "#3fb498" : "#3FB498"} points="14.1,0 0,0 0,51.5 14.1,33.1" />
      <path
        fill={isDark ? "#ffffff" : "#005083"}
        d="M44,14.1l-14.8,19l14.5,18.4H27L14.1,33.1l14.5-18.9C28.6,14.2,44,14.1,44,14.1z
           M65.6,13c-11.7,0-21.7,6-21.7,19.8s10,19.8,21.7,19.8s21.7-6,21.7-19.8C87.4,19.1,77.3,13,65.6,13z
           M58.4,32.8c0-5.3,1.3-11.6,7.2-11.6s7.2,6.3,7.2,11.6s-1.3,11.6-7.2,11.6S58.4,38.1,58.4,32.8z
           M118.1,13c-4.8,0-8.5,1.5-11.7,5.2l-0.2-4.1H92.3v37.3h14.1V30c0-0.4-0.9-8.1,6.1-8.1
           c4.4,0,5.3,3.9,5.4,7.6v21.9H132v-25C132,18.2,126.1,13,118.1,13z
           M138.2,39.7c-0.7,11.5,5.1,12.8,14.7,12.8c2.1,0,4.4-0.1,7.6-0.7v-8.4
           c-1.6,0.2-3.6,0.2-5.4,0.2c-3.3,0-2.7-4.8-2.7-5.8V23h8.2v-8.8h-8.2V0l-14.1,18.4
           C138.3,18.4,138.2,39.7,138.2,39.7z
           M181.1,14.1h-13.9v37.3h14.1v-15c-0.2-7.1,2.3-11.5,9.7-11.6
           c1,0,1.9,0,3,0.1V13c-6.2-0.1-10.9,1.9-12.5,8.1h-0.1C181.4,21.1,181.1,14.1,181.1,14.1z
           M217.7,13C206,13,196,19,196,32.8s10,19.8,21.7,19.8s21.7-6,21.7-19.8S229.3,13,217.7,13z
           M210.5,32.8c0-5.3,1.3-11.6,7.2-11.6s7.2,6.3,7.2,11.6s-1.3,11.6-7.2,11.6S210.5,38.1,210.5,32.8z
           M269.5,13c-4.8,0-8.5,1.5-11.7,5.2l-0.2-4.1h-13.9v37.3h14.1V30.1c0-0.4-0.9-8.1,6.1-8.1
           c4.4,0,5.3,3.9,5.4,7.6v21.9h14.1v-25C283.5,18.2,277.5,13,269.5,13z"
      />
    </svg>
  );
}

/* ─── Types ────────────────────────────────────────────────────────────── */
type Variant = "light" | "blue" | "dark";

const menuGroups = [
  {
    key: "admin",
    label: "Admin",
    icon: Settings2,
    items: ["Roles", "Configuration", "Area"],
  },
  {
    key: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    items: ["Dashboard"],
  },
  {
    key: "functional",
    label: "Functional Role",
    icon: Users,
    items: [
      "Import",
      "Functional Roles",
      "Predefined Messages",
      "Phonebook Filters",
      "Ringtone Matrix",
    ],
  },
];

/* ─── Per-variant tokens ───────────────────────────────────────────────── */
type VariantTokens = {
  sidebar: React.CSSProperties;
  header: React.CSSProperties;
  dividerColor: string;
  groupIdle: React.CSSProperties;
  groupOpen: React.CSSProperties;
  groupHoverBg: string;
  subIdle: React.CSSProperties;
  subActive: React.CSSProperties;
  subActiveBg: string;
  footer: React.CSSProperties;
  footerItem: React.CSSProperties;
  label: string;
};

const tokens: Record<Variant, VariantTokens> = {
  light: {
    sidebar: { background: "#ffffff", border: "1px solid #e5e7eb" },
    header: { background: "#ffffff", borderBottom: "1px solid #e5e7eb" },
    dividerColor: "#d1d5db",
    groupIdle: { color: "#111827" },
    groupOpen: { color: "#005083" },
    groupHoverBg: "#f3f4f6",
    subIdle: { color: "#6b7280" },
    subActive: { color: "#005083", fontWeight: 500 },
    subActiveBg: "rgba(0,80,131,0.07)",
    footer: { borderTop: "1px solid #e5e7eb" },
    footerItem: { color: "#6b7280" },
    label: "Light / Default",
  },
  blue: {
    sidebar: {
      background: "var(--kontron-blue-pale, #e8f4fb)",
      border: "1px solid #b3d4e8",
    },
    header: {
      background: "var(--kontron-blue-pale, #e8f4fb)",
      borderBottom: "1px solid #b3d4e8",
    },
    dividerColor: "#93c5d8",
    groupIdle: { color: "#1e4d6b" },
    groupOpen: { color: "#005083" },
    groupHoverBg: "rgba(0,80,131,0.08)",
    subIdle: { color: "#4a7a9b" },
    subActive: { color: "#005083", fontWeight: 500 },
    subActiveBg: "rgba(0,80,131,0.13)",
    footer: { borderTop: "1px solid #b3d4e8" },
    footerItem: { color: "#4a7a9b" },
    label: "Blue Accent",
  },
  dark: {
    sidebar: { background: "#1C1C1E", border: "1px solid #3a3a3d" },
    header: { background: "#1C1C1E", borderBottom: "1px solid #3a3a3d" },
    dividerColor: "#3a3a3d",
    groupIdle: { color: "#d4d4d8" },
    groupOpen: { color: "#3fb498" },
    groupHoverBg: "rgba(255,255,255,0.05)",
    subIdle: { color: "#71717a" },
    subActive: { color: "#3fb498", fontWeight: 500 },
    subActiveBg: "rgba(63,180,152,0.1)",
    footer: { borderTop: "1px solid #3a3a3d" },
    footerItem: { color: "#71717a" },
    label: "Dark",
  },
};

/* ─── Animated collapsible ─────────────────────────────────────────────── */
function Collapsible({ open, children }: { open: boolean; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(open ? "auto" : "0px");
  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      // Measure then animate
      requestAnimationFrame(() => {
        if (ref.current) {
          setHeight(`${ref.current.scrollHeight}px`);
        }
        // After transition, release to auto so it can adapt to content changes
        const timer = setTimeout(() => setHeight("auto"), 220);
        return () => clearTimeout(timer);
      });
    } else {
      if (ref.current) {
        // Pin current height before collapsing
        setHeight(`${ref.current.scrollHeight}px`);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setHeight("0px"));
        });
      }
      const timer = setTimeout(() => setIsVisible(false), 220);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div
      ref={ref}
      style={{
        height,
        overflow: "hidden",
        transition: "height 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {isVisible && children}
    </div>
  );
}

/* ─── Chevron with rotation animation ─────────────────────────────────── */
function Chevron({ open, color }: { open: boolean; color: string }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: open ? 0.8 : 0.5,
        flexShrink: 0,
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/* ─── Single sidebar preview ───────────────────────────────────────────── */
function SidebarPreview({ variant }: { variant: Variant }) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    admin: true,
    dashboard: false,
    functional: false,
  });
  const [activeItem, setActiveItem] = useState("Roles");
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const t = tokens[variant];
  const font = "var(--font-primary, 'Exo 2', sans-serif)";

  const toggleGroup = (key: string) =>
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div
      style={{
        ...t.sidebar,
        borderRadius: "12px",
        width: "230px",
        height: "460px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxShadow:
          variant === "dark"
            ? "0 4px 24px rgba(0,0,0,0.4)"
            : "0 2px 16px rgba(0,0,0,0.08)",
        fontFamily: font,
        fontSize: "13px",
        flexShrink: 0,
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          ...t.header,
          padding: "13px 14px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <KontronLogo variant={variant} />

        {/* vertical divider */}
        <div
          style={{
            width: "1px",
            height: "18px",
            background: t.dividerColor,
            flexShrink: 0,
          }}
        />

        <div style={{ flex: 1 }} />

        <PanelLeftClose
          size={15}
          style={{
            color: variant === "dark" ? "#71717a" : "#9ca3af",
            cursor: "pointer",
            flexShrink: 0,
          }}
        />
      </div>

      {/* ── Nav ── */}
      <nav style={{ flex: 1, overflowY: "auto", padding: "6px 8px" }}>
        {menuGroups.map((group) => {
          const Icon = group.icon;
          const isOpen = openGroups[group.key];
          const isHovered = hoveredGroup === group.key;
          const groupColor = isOpen
            ? (t.groupOpen.color as string)
            : (t.groupIdle.color as string);

          return (
            <div key={group.key} style={{ marginBottom: "2px" }}>
              {/* Group trigger */}
              <button
                onClick={() => toggleGroup(group.key)}
                onMouseEnter={() => setHoveredGroup(group.key)}
                onMouseLeave={() => setHoveredGroup(null)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "7px 10px",
                  background: isHovered ? t.groupHoverBg : "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  color: groupColor,
                  fontFamily: font,
                  fontSize: "13px",
                  fontWeight: isOpen ? 600 : 400,
                  borderRadius: "7px",
                  transition: "background 0.15s, color 0.15s",
                }}
              >
                <Icon size={15} style={{ flexShrink: 0 }} />
                <span style={{ flex: 1 }}>{group.label}</span>
                <Chevron open={isOpen} color={groupColor} />
              </button>

              {/* Animated sub-items */}
              <Collapsible open={isOpen}>
                <div style={{ padding: "2px 0 4px 0" }}>
                  {group.items.map((item) => {
                    const isActive = activeItem === item;
                    const isItemHovered = hoveredItem === item;
                    return (
                      <button
                        key={item}
                        onClick={() => setActiveItem(item)}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          padding: "6px 10px 6px 32px",
                          background: isActive
                            ? t.subActiveBg
                            : isItemHovered
                            ? t.groupHoverBg
                            : "transparent",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "left",
                          fontFamily: font,
                          fontSize: "13px",
                          borderRadius: "7px",
                          transition: "background 0.12s",
                          ...(isActive ? t.subActive : t.subIdle),
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </Collapsible>
            </div>
          );
        })}
      </nav>

      {/* ── Footer ── */}
      <div style={{ ...t.footer, padding: "10px 8px" }}>
        {[
          { icon: Settings, label: "Settings" },
          { icon: LogOut, label: "Logout" },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 10px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontFamily: font,
              fontSize: "13px",
              borderRadius: "7px",
              ...t.footerItem,
            }}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Export ───────────────────────────────────────────────────────────── */
export function SidebarShowcase() {
  return (
    <div className="space-y-8">
      <div className="flex gap-8 flex-wrap items-start">
        {(["light", "blue", "dark"] as Variant[]).map((variant) => (
          <div key={variant} className="flex flex-col items-center gap-3">
            <SidebarPreview variant={variant} />
            <span
              className="text-sm text-muted-foreground"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              {tokens[variant].label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
