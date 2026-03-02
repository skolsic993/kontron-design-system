import { Download, Edit, Plus, Save, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

/* ─── Kontron weight helpers ──────────────────────────────
   Primary / filled  → Bold   (700) — must stand out
   Secondary / solid → SemiBold (600)
   Outline           → Medium  (500)
   Ghost             → Normal  (400) — subtle, inline
   Link              → Light   (300) — text-only feel
─────────────────────────────────────────────────────────── */

const fw = {
  bold: {
    fontFamily: "var(--font-primary)",
    fontWeight: 700,
  } as React.CSSProperties,
  semibold: {
    fontFamily: "var(--font-primary)",
    fontWeight: 600,
  } as React.CSSProperties,
  medium: {
    fontFamily: "var(--font-primary)",
    fontWeight: 500,
  } as React.CSSProperties,
  normal: {
    fontFamily: "var(--font-primary)",
    fontWeight: 400,
  } as React.CSSProperties,
  light: {
    fontFamily: "var(--font-primary)",
    fontWeight: 300,
  } as React.CSSProperties,
};

export function Buttons() {
  return (
    <div className="space-y-12">
      {/* Primary Buttons — Bold (700) */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Primary Buttons — Kontron Blue
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            Kontron Bold (700)
          </span>
        </h3>
        <div className="flex flex-wrap gap-4 items-center bg-card p-6 rounded-lg border border-border">
          <Button style={fw.bold}>Default Primary</Button>
          <Button size="sm" style={fw.bold}>
            Small
          </Button>
          <Button size="lg" style={fw.bold}>
            Large
          </Button>
          <Button disabled style={fw.bold}>
            Disabled
          </Button>
          <Button style={fw.bold}>
            <Plus className="mr-2 h-4 w-4" />
            With Icon
          </Button>
        </div>
      </div>

      {/* Secondary Buttons — SemiBold (600) */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Secondary Buttons — Kontron Green
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            Kontron SemiBold (600)
          </span>
        </h3>
        <div className="flex flex-wrap gap-4 items-center bg-card p-6 rounded-lg border border-border">
          <Button variant="secondary" style={fw.semibold}>
            Secondary
          </Button>
          <Button variant="secondary" size="sm" style={fw.semibold}>
            Small
          </Button>
          <Button variant="secondary" size="lg" style={fw.semibold}>
            Large
          </Button>
          <Button variant="secondary" disabled style={fw.semibold}>
            Disabled
          </Button>
          <Button variant="secondary" style={fw.semibold}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Outline Buttons — Medium (500) */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Outline Buttons
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            Kontron Medium (500)
          </span>
        </h3>
        <div className="flex flex-wrap gap-4 items-center bg-card p-6 rounded-lg border border-border">
          <Button variant="outline" style={fw.medium}>
            Outline
          </Button>
          <Button variant="outline" size="sm" style={fw.medium}>
            Small
          </Button>
          <Button variant="outline" size="lg" style={fw.medium}>
            Large
          </Button>
          <Button variant="outline" disabled style={fw.medium}>
            Disabled
          </Button>
          <Button variant="outline" style={fw.medium}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      {/* Ghost Buttons — Normal (400) */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Ghost Buttons
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            Kontron Normal (400)
          </span>
        </h3>
        <div className="flex flex-wrap gap-4 items-center bg-card p-6 rounded-lg border border-border">
          <Button variant="ghost" style={fw.normal}>
            Ghost
          </Button>
          <Button variant="ghost" size="sm" style={fw.normal}>
            Small
          </Button>
          <Button variant="ghost" size="lg" style={fw.normal}>
            Large
          </Button>
          <Button variant="ghost" disabled style={fw.normal}>
            Disabled
          </Button>
          <Button variant="ghost" style={fw.normal}>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </div>
      </div>

      {/* Destructive Buttons — Bold (700) */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Destructive Buttons
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            Kontron Bold (700)
          </span>
        </h3>
        <div className="flex flex-wrap gap-4 items-center bg-card p-6 rounded-lg border border-border">
          <Button variant="destructive" style={fw.bold}>
            Delete
          </Button>
          <Button variant="destructive" size="sm" style={fw.bold}>
            Small
          </Button>
          <Button variant="destructive" size="lg" style={fw.bold}>
            Large
          </Button>
          <Button variant="destructive" disabled style={fw.bold}>
            Disabled
          </Button>
          <Button variant="destructive" style={fw.bold}>
            <Trash2 className="mr-2 h-4 w-4" />
            Remove Item
          </Button>
        </div>
      </div>

      {/* Link Buttons — Light (300) */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Link Buttons
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            Kontron Light (300)
          </span>
        </h3>
        <div className="flex flex-wrap gap-4 items-center bg-card p-6 rounded-lg border border-border">
          <Button variant="link" style={fw.light}>
            Link Button
          </Button>
          <Button variant="link" size="sm" style={fw.light}>
            Small Link
          </Button>
          <Button variant="link" size="lg" style={fw.light}>
            Large Link
          </Button>
          <Button variant="link" disabled style={fw.light}>
            Disabled
          </Button>
        </div>
      </div>

      {/* Gradient Buttons — Bold (700) */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Gradient Buttons
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            Kontron Bold (700)
          </span>
        </h3>
        <div className="flex flex-wrap gap-4 items-center bg-card p-6 rounded-lg border border-border">
          <button
            className="px-6 py-2 rounded-md text-white shadow-md hover:shadow-lg transition-all"
            style={{ background: "var(--kontron-gradient-linear)", ...fw.bold }}
          >
            Linear Gradient
          </button>
          <button
            className="px-6 py-2 rounded-md text-white shadow-md hover:shadow-lg transition-all"
            style={{
              background: "var(--kontron-gradient-diagonal)",
              ...fw.bold,
            }}
          >
            Diagonal Gradient
          </button>
          <button
            className="px-8 py-3 rounded-md text-white shadow-md hover:shadow-lg transition-all"
            style={{ background: "var(--kontron-gradient-linear)", ...fw.bold }}
          >
            <Plus className="inline-block mr-2 h-5 w-5" />
            Large with Icon
          </button>
        </div>
      </div>

      {/* Complementary Color Buttons — SemiBold (600) */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Complementary Color Buttons
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            Kontron SemiBold (600)
          </span>
        </h3>
        <div className="flex flex-wrap gap-4 items-center bg-card p-6 rounded-lg border border-border">
          <button
            className="px-6 py-2 rounded-md text-white shadow-md hover:opacity-90 transition-all"
            style={{
              backgroundColor: "var(--kontron-magenta)",
              ...fw.semibold,
            }}
          >
            Magenta Button
          </button>
          <button
            className="px-6 py-2 rounded-md text-white shadow-md hover:opacity-90 transition-all"
            style={{ backgroundColor: "var(--kontron-cyan)", ...fw.semibold }}
          >
            Cyan Button
          </button>
          <button
            className="px-6 py-2 rounded-md shadow-md hover:opacity-90 transition-all border-2"
            style={{
              borderColor: "var(--kontron-magenta)",
              color: "var(--kontron-magenta)",
              ...fw.semibold,
            }}
          >
            Magenta Outline
          </button>
          <button
            className="px-6 py-2 rounded-md shadow-md hover:opacity-90 transition-all border-2"
            style={{
              borderColor: "var(--kontron-cyan)",
              color: "var(--kontron-cyan)",
              ...fw.semibold,
            }}
          >
            Cyan Outline
          </button>
        </div>
      </div>

      {/* Icon Only */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">Icon Only Buttons</h3>
        <div className="flex flex-wrap gap-4 items-center bg-card p-6 rounded-lg border border-border">
          <Button size="icon">
            <Plus className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary">
            <Save className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <Edit className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost">
            <Download className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="destructive">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
