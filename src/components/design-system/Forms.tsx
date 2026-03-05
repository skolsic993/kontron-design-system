import { Info, Lock, Mail, Search } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Badge } from "../ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Separator } from "../ui/separator";
import { Skeleton } from "../ui/skeleton";
import { Switch } from "../ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Textarea } from "../ui/textarea";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-card p-6 rounded-lg shadow-sm">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-card p-6 rounded-lg shadow-sm">
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
        <div className="bg-card p-6 rounded-lg shadow-sm">
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
        <div className="bg-card p-6 rounded-lg shadow-sm space-y-4">
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
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <Label
            className="mb-4 block"
            style={{ ...labelStyle, fontWeight: 500 }}
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
        <div className="bg-card p-6 rounded-lg shadow-sm space-y-4">
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

      {/* Alert */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Alert
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            inline messages and callouts
          </span>
        </h3>
        <div className="space-y-4 bg-card p-6 rounded-lg shadow-sm">
          <Alert className="flex items-start gap-4">
            <Info className="h-4 w-4 text-kontron-magenta mt-0.5" />

            <div className="flex flex-col">
              <AlertTitle style={labelStyle}>Default alert</AlertTitle>
              <AlertDescription style={helperText}>
                This is a default alert with a title and description.
              </AlertDescription>
            </div>
          </Alert>
        </div>
      </div>

      {/* Alert Dialog */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Alert Dialog
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            confirmation dialogs for critical actions
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Open Alert Dialog
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle style={labelStyle}>
                  Are you sure?
                </AlertDialogTitle>
                <AlertDialogDescription style={helperText}>
                  This action cannot be undone. This will permanently delete the
                  item from the system.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel style={labelStyle}>Cancel</AlertDialogCancel>
                <AlertDialogAction style={labelStyle}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* Badge */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Badge
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            labels and status indicators
          </span>
        </h3>
        <div className="flex flex-wrap gap-2 bg-card p-6 rounded-lg shadow-sm">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Breadcrumb
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            navigation path
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Card */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Card
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            container with header, content, footer
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle style={labelStyle}>Card title</CardTitle>
              <CardDescription style={helperText}>
                Card description goes here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p style={{ ...inputStyle, fontSize: "var(--text-sm)" }}>
                Card content area. You can put any content inside.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                size="sm"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Action
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle style={labelStyle}>Another card</CardTitle>
              <CardDescription style={helperText}>
                Secondary card example.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p style={{ ...inputStyle, fontSize: "var(--text-sm)" }}>
                More content in the second card.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Collapsible */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Collapsible
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            show/hide content with a trigger
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Toggle content
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <p style={{ ...inputStyle, fontSize: "var(--text-sm)" }}>
                This content is collapsible. It can be shown or hidden by
                toggling the button above.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      {/* Dialog */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Dialog
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            modal overlay for focused content
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Open Dialog
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle style={labelStyle}>Dialog title</DialogTitle>
                <DialogDescription style={helperText}>
                  This is a dialog. You can put forms or important messages
                  here.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  variant="outline"
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
                >
                  Cancel
                </Button>
                <Button
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
                >
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Dropdown Menu
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            context menu triggered by button
          </span>
        </h3>
        <div className="flex flex-wrap gap-4 bg-card p-6 rounded-lg shadow-sm">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Open Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel style={labelStyle}>
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem style={inputStyle}>Profile</DropdownMenuItem>
              <DropdownMenuItem style={inputStyle}>Settings</DropdownMenuItem>
              <DropdownMenuItem style={inputStyle}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Popover */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Popover
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            floating content panel
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Open Popover
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-2">
                <h4 className="font-medium leading-none" style={labelStyle}>
                  Popover title
                </h4>
                <p className="text-sm text-muted-foreground" style={helperText}>
                  Popover content. Use for settings, filters, or extra info.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Separator */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Separator
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            visual divider
          </span>
        </h3>
        <div className="space-y-4 bg-card p-6 rounded-lg shadow-sm">
          <div>
            <p className="text-sm mb-2" style={labelStyle}>
              Section above
            </p>
            <Separator className="my-4 h-px" />
            <p className="text-sm mt-2" style={labelStyle}>
              Section below
            </p>
          </div>
          <div className="flex h-5 items-center gap-4">
            <span style={{ ...inputStyle, fontSize: "var(--text-sm)" }}>
              Item 1
            </span>
            <Separator orientation="vertical" className="h-5 w-px" />
            <span style={{ ...inputStyle, fontSize: "var(--text-sm)" }}>
              Item 2
            </span>
            <Separator orientation="vertical" className="h-5 w-px" />
            <span style={{ ...inputStyle, fontSize: "var(--text-sm)" }}>
              Item 3
            </span>
          </div>
        </div>
      </div>

      {/* Skeleton */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Skeleton
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            loading placeholder
          </span>
        </h3>
        <div className="space-y-4 bg-card p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full bg-kontron-blue-pale" />
            <div className="space-y-2 flex-1 w-full">
              <Skeleton className="h-4 w-full bg-kontron-blue-pale" />
              <Skeleton className="h-4 w-3/4 bg-kontron-blue-pale" />
            </div>
          </div>
          <Skeleton className="h-24 w-full bg-kontron-blue-pale" />
        </div>
      </div>

      {/* Tabs */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Tabs
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            switch between views
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1" style={labelStyle}>
                Tab 1
              </TabsTrigger>
              <TabsTrigger value="tab2" style={labelStyle}>
                Tab 2
              </TabsTrigger>
              <TabsTrigger value="tab3" style={labelStyle}>
                Tab 3
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="pt-4">
              <p style={{ ...inputStyle, fontSize: "var(--text-sm)" }}>
                Content for tab one.
              </p>
            </TabsContent>
            <TabsContent value="tab2" className="pt-4">
              <p style={{ ...inputStyle, fontSize: "var(--text-sm)" }}>
                Content for tab two.
              </p>
            </TabsContent>
            <TabsContent value="tab3" className="pt-4">
              <p style={{ ...inputStyle, fontSize: "var(--text-sm)" }}>
                Content for tab three.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Tooltip */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Tooltip
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            hover hint
          </span>
        </h3>
        <div className="flex flex-wrap gap-4 bg-card p-6 rounded-lg shadow-sm">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Hover me
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p style={labelStyle}>Tooltip content</p>
            </TooltipContent>
          </Tooltip>
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
        <div className="bg-card p-6 rounded-lg shadow-sm">
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
                type="button"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Submit Form
              </Button>
              <Button
                type="button"
                variant="outline"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Spacing */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Spacing
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={helperText}
          >
            gap in grid & flex · space between elements
          </span>
        </h3>
        <div className="space-y-8 bg-card p-6 rounded-lg shadow-sm">
          <div>
            <p className="text-sm mb-3" style={helperText}>
              Grid with gap (
              <code className="bg-kontron-blue-pale px-2 rounded-sm">
                gap-4
              </code>{" "}
              - 1rem)
            </p>
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="h-12 bg-kontron-blue-pale rounded-lg flex items-center justify-center text-sm">
                1
              </div>
              <div className="h-12 bg-kontron-blue-pale rounded-lg flex items-center justify-center text-sm">
                2
              </div>
              <div className="h-12 bg-kontron-blue-pale rounded-lg flex items-center justify-center text-sm">
                3
              </div>
              <div className="h-12 bg-kontron-blue-pale rounded-lg flex items-center justify-center text-sm">
                4
              </div>
              <div className="h-12 bg-kontron-blue-pale rounded-lg flex items-center justify-center text-sm">
                5
              </div>
              <div className="h-12 bg-kontron-blue-pale rounded-lg flex items-center justify-center text-sm">
                6
              </div>
            </div>
          </div>
          <div className="mb-3">
            <p className="text-sm" style={helperText}>
              Flex with gap (e.g.{" "}
              <code className="bg-kontron-blue-pale px-1 rounded">
                flex gap-3
              </code>
              )
            </p>
            <div className="flex flex-wrap gap-3 py-4 rounded">
              <Button
                variant="secondary"
                size="sm"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Item A
              </Button>
              <Button
                variant="secondary"
                size="sm"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Item B
              </Button>
              <Button
                variant="secondary"
                size="sm"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Item C
              </Button>
            </div>
          </div>
          <div>
            <p className="text-sm mb-3" style={helperText}>
              Space between buttons (e.g.{" "}
              <code className="bg-kontron-blue-pale px-1 rounded">gap-2</code>,{" "}
              <code className="bg-kontron-blue-pale px-1 rounded">gap-4</code>)
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <Button
                size="sm"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Primary
              </Button>
              <Button
                size="sm"
                variant="outline"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Secondary
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Button
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Submit
              </Button>
              <Button
                variant="outline"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
