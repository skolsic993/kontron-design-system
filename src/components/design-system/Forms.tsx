import { Lock, Mail, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";

/* ─── Kontron weight guide for Forms ─────────────────────
   Section headings  → Bold     (700)
   Field labels      → SemiBold (600)
   Input values      → Normal   (400)
   Placeholder hint  → Light    (300)  ← via CSS
   Helper / caption  → Light    (300)
─────────────────────────────────────────────────────────── */

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-primary)",
  fontWeight: 500,
};
const inputStyle: React.CSSProperties = {
  fontFamily: "var(--font-primary)",
  fontWeight: 400,
};
const helperText: React.CSSProperties = {
  fontFamily: "var(--font-primary)",
  fontWeight: 300,
};

export function Forms() {
  return (
    <div className="space-y-12">
      {/* Text Inputs */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Text Inputs
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            labels SemiBold (600) · values Normal (400)
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-card p-6 rounded-lg border border-border">
          <div className="space-y-2">
            <Label htmlFor="name" style={labelStyle}>
              Full Name
            </Label>
            <Input id="name" placeholder="Enter your name" style={inputStyle} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" style={labelStyle}>
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="email@kontron.com"
                className="pl-10"
                style={inputStyle}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" style={labelStyle}>
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10"
                style={inputStyle}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="search" style={labelStyle}>
              Search
            </Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Search..."
                className="pl-10"
                style={inputStyle}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled" style={{ ...labelStyle, opacity: 0.5 }}>
              Disabled Input
            </Label>
            <Input
              id="disabled"
              placeholder="Disabled"
              disabled
              style={inputStyle}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="readonly" style={labelStyle}>
              Read Only Input
            </Label>
            <Input
              id="readonly"
              value="Read only value"
              readOnly
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      {/* Select Dropdowns */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Select Dropdowns
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            labels SemiBold (600) · options Normal (400)
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-card p-6 rounded-lg border border-border">
          <div className="space-y-2">
            <Label htmlFor="country" style={labelStyle}>
              Country
            </Label>
            <Select>
              <SelectTrigger id="country" style={inputStyle}>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent
                style={{ fontFamily: "var(--font-primary)", fontWeight: 400 }}
              >
                <SelectItem value="de">Germany</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="fr">France</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="category" style={labelStyle}>
              Category
            </Label>
            <Select>
              <SelectTrigger id="category" style={inputStyle}>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent
                style={{ fontFamily: "var(--font-primary)", fontWeight: 400 }}
              >
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="embedded">Embedded Computing</SelectItem>
                <SelectItem value="iot">IoT Solutions</SelectItem>
                <SelectItem value="edge">Edge Devices</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Textarea */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Textarea
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            label SemiBold (600) · content Normal (400)
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="space-y-2">
            <Label htmlFor="message" style={labelStyle}>
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Enter your message here..."
              rows={5}
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Checkboxes
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            checked label Medium (500) · unchecked Light (300)
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg border border-border space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label
              htmlFor="terms"
              className="cursor-pointer"
              style={{ ...labelStyle, fontWeight: 300 }}
            >
              I agree to the terms and conditions
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" defaultChecked />
            <Label
              htmlFor="marketing"
              className="cursor-pointer"
              style={{ ...labelStyle, fontWeight: 500 }}
            >
              Send me marketing emails
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <Label
              htmlFor="newsletter"
              className="cursor-pointer"
              style={{ ...labelStyle, fontWeight: 300 }}
            >
              Subscribe to newsletter
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-check" disabled />
            <Label
              htmlFor="disabled-check"
              className="opacity-50"
              style={{ ...labelStyle, fontWeight: 300 }}
            >
              Disabled checkbox
            </Label>
          </div>
        </div>
      </div>

      {/* Radio Buttons */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Radio Buttons
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            question SemiBold (600) · options Normal (400)
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg border border-border">
          <Label
            className="mb-4 block"
            style={{ ...labelStyle, fontWeight: 600 }}
          >
            Select your preferred contact method:
          </Label>
          <RadioGroup defaultValue="email">
            {[
              { value: "email", label: "Email" },
              { value: "phone", label: "Phone" },
              { value: "sms", label: "SMS" },
              { value: "mail", label: "Physical Mail" },
            ].map(({ value, label }) => (
              <div className="flex items-center space-x-2 mb-3" key={value}>
                <RadioGroupItem value={value} id={`radio-${value}`} />
                <Label
                  htmlFor={`radio-${value}`}
                  className="cursor-pointer"
                  style={{ ...labelStyle, fontWeight: 400 }}
                >
                  {label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      {/* Switches */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Switches
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            on Medium (500) · off Light (300)
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg border border-border space-y-4">
          {[
            {
              id: "notifications",
              label: "Enable notifications",
              checked: false,
              weight: 300,
            },
            { id: "dark-mode", label: "Dark mode", checked: true, weight: 500 },
            {
              id: "auto-save",
              label: "Auto-save",
              checked: false,
              weight: 300,
            },
          ].map(({ id, label, checked, weight }) => (
            <div className="flex items-center justify-between" key={id}>
              <Label
                htmlFor={id}
                className="cursor-pointer"
                style={{ ...labelStyle, fontWeight: weight }}
              >
                {label}
              </Label>
              <Switch id={id} defaultChecked={checked} />
            </div>
          ))}
          <div className="flex items-center justify-between opacity-50">
            <Label
              htmlFor="disabled-switch"
              className="cursor-not-allowed"
              style={{ ...labelStyle, fontWeight: 300 }}
            >
              Disabled switch
            </Label>
            <Switch id="disabled-switch" disabled />
          </div>
        </div>
      </div>

      {/* Complete Form */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Complete Form Example
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            Kontron onboarding form
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg border border-border">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="form-firstname" style={labelStyle}>
                  First Name
                </Label>
                <Input
                  id="form-firstname"
                  placeholder="Max"
                  style={inputStyle}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="form-lastname" style={labelStyle}>
                  Last Name
                </Label>
                <Input
                  id="form-lastname"
                  placeholder="Mustermann"
                  style={inputStyle}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-email" style={labelStyle}>
                Email
              </Label>
              <Input
                id="form-email"
                type="email"
                placeholder="max.mustermann@kontron.com"
                style={inputStyle}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-company" style={labelStyle}>
                Company
              </Label>
              <Input
                id="form-company"
                placeholder="Kontron"
                style={inputStyle}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-department" style={labelStyle}>
                Department
              </Label>
              <Select>
                <SelectTrigger id="form-department" style={inputStyle}>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 400 }}
                >
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-comments" style={labelStyle}>
                Comments
              </Label>
              <Textarea
                id="form-comments"
                placeholder="Your message..."
                rows={4}
                style={inputStyle}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="form-terms" />
              <Label
                htmlFor="form-terms"
                className="cursor-pointer"
                style={{ ...helperText, fontSize: "var(--text-sm)" }}
              >
                I agree to the privacy policy and terms of service
              </Label>
            </div>
            <div className="flex gap-4">
              <Button
                type="submit"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 700 }}
              >
                Submit Form
              </Button>
              <Button
                type="button"
                variant="outline"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 400 }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
