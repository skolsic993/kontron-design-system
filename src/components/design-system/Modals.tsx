import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";
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
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

/* ─── Kontron weight guide for Modals ────────────────────
   Dialog / alert titles    → Bold     (700)
   Descriptions             → Light    (300)
   Body / feature text      → Normal   (400)
   Confirm action buttons   → Bold     (700)
   Cancel / secondary btns  → Medium   (500)
   Form labels inside modal → SemiBold (600)
   Notification headings    → Bold     (700)
─────────────────────────────────────────────────────────── */

export function Modals() {
  return (
    <div className="space-y-12">
      {/* Basic Dialog */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Basic Dialog
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            title Bold (700) · description Light (300)
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg border border-border">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                style={{ fontFamily: "var(--font-primary)", fontWeight: 700 }}
              >
                Open Dialog
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 700 }}
                >
                  Dialog Title
                </DialogTitle>
                <DialogDescription
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 300 }}
                >
                  This is a basic dialog with a title, description, and footer
                  actions.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 400,
                    fontSize: "var(--text-sm)",
                  }}
                  className="text-muted-foreground"
                >
                  Dialog content goes here. You can add any content you need
                  inside this area.
                </p>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
                >
                  Cancel
                </Button>
                <Button
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 700 }}
                >
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Form Dialog */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Form Dialog
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            title Bold · labels SemiBold (600) · inputs Normal (400)
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg border border-border">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 600 }}
              >
                Add New User
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 700 }}
                >
                  Add New User
                </DialogTitle>
                <DialogDescription
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 300 }}
                >
                  Fill in the information below to create a new Kontron user
                  account.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {[
                  {
                    id: "dialog-name",
                    label: "Full Name",
                    type: "text",
                    placeholder: "Anna Müller",
                  },
                  {
                    id: "dialog-email",
                    label: "Email",
                    type: "email",
                    placeholder: "anna.mueller@kontron.com",
                  },
                ].map(({ id, label, type, placeholder }) => (
                  <div className="grid gap-2" key={id}>
                    <Label
                      htmlFor={id}
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 400,
                      }}
                    >
                      {label}
                    </Label>
                    <Input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 400,
                      }}
                    />
                  </div>
                ))}
                <div className="grid gap-2">
                  <Label
                    htmlFor="dialog-role"
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 400,
                    }}
                  >
                    Role
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="dialog-role"
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 400,
                      }}
                    >
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 400,
                      }}
                    >
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="dialog-bio"
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 400,
                    }}
                  >
                    Bio
                  </Label>
                  <Textarea
                    id="dialog-bio"
                    placeholder="Tell us about yourself..."
                    rows={3}
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 400,
                    }}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
                >
                  Cancel
                </Button>
                <Button
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 700 }}
                >
                  Create User
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Alert Dialogs */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Alert Dialogs
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            titles Bold (700) · descriptions Light (300) · actions Bold (700)
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex flex-wrap gap-4">
            {/* Confirm Delete */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
                >
                  Delete Item
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 700,
                    }}
                  >
                    Are you absolutely sure?
                  </AlertDialogTitle>
                  <AlertDialogDescription
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                    }}
                  >
                    This action cannot be undone. This will permanently delete
                    the item from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 500,
                    }}
                  >
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 700,
                    }}
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            {/* Info */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
                >
                  Show Info
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--kontron-blue-pale)" }}
                    >
                      <Info
                        className="h-5 w-5"
                        style={{ color: "var(--kontron-blue)" }}
                      />
                    </div>
                    <AlertDialogTitle
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 700,
                      }}
                    >
                      Information
                    </AlertDialogTitle>
                  </div>
                  <AlertDialogDescription
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                    }}
                  >
                    This is an informational message to notify you about
                    something important.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 700,
                    }}
                  >
                    Got it
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            {/* Success */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
                >
                  Show Success
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--kontron-green-pale)" }}
                    >
                      <CheckCircle2
                        className="h-5 w-5"
                        style={{ color: "var(--kontron-green)" }}
                      />
                    </div>
                    <AlertDialogTitle
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 700,
                      }}
                    >
                      Success!
                    </AlertDialogTitle>
                  </div>
                  <AlertDialogDescription
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                    }}
                  >
                    Your operation has been completed successfully.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction
                    style={{
                      backgroundColor: "var(--kontron-green)",
                      color: "white",
                      fontFamily: "var(--font-primary)",
                      fontWeight: 700,
                    }}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            {/* Warning */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
                >
                  Show Warning
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-100">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <AlertDialogTitle
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 700,
                      }}
                    >
                      Warning
                    </AlertDialogTitle>
                  </div>
                  <AlertDialogDescription
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                    }}
                  >
                    Please review this information carefully before proceeding.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 500,
                    }}
                  >
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 700,
                    }}
                  >
                    Proceed Anyway
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            {/* Error */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
                >
                  Show Error
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-100">
                      <XCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <AlertDialogTitle
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 700,
                      }}
                    >
                      Error
                    </AlertDialogTitle>
                  </div>
                  <AlertDialogDescription
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                    }}
                  >
                    An error occurred while processing your request. Please try
                    again later.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 700,
                    }}
                  >
                    Close
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>

      {/* Large Dialog with Gradient Header */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Large Dialog — Gradient Header
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            feature title Bold (700) · features Normal (400) · subtext Light
            (300)
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg border border-border">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                style={{ fontFamily: "var(--font-primary)", fontWeight: 700 }}
              >
                Open Large Dialog
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px]">
              <div
                className="absolute inset-x-0 top-0 h-32 rounded-t-lg"
                style={{ background: "var(--kontron-gradient-linear)" }}
              />
              <DialogHeader className="relative pt-24">
                <DialogTitle
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 700 }}
                >
                  Premium Feature Access
                </DialogTitle>
                <DialogDescription
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 300 }}
                >
                  Upgrade your account to unlock all premium features and
                  capabilities.
                </DialogDescription>
              </DialogHeader>
              <div className="py-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Advanced Analytics",
                      desc: "Get deep insights into your data with advanced reporting tools.",
                    },
                    {
                      title: "Priority Support",
                      desc: "Get help when you need it with 24/7 priority support.",
                    },
                    {
                      title: "Custom Integrations",
                      desc: "Connect with your favourite tools and services.",
                    },
                    {
                      title: "Unlimited Users",
                      desc: "Add as many team members as you need.",
                    },
                  ].map(({ title, desc }) => (
                    <div
                      className="p-4 rounded-lg border border-border"
                      key={title}
                    >
                      <CheckCircle2
                        className="h-8 w-8 mb-2"
                        style={{ color: "var(--kontron-green)" }}
                      />
                      <h4
                        style={{
                          fontFamily: "var(--font-primary)",
                          fontWeight: 700,
                        }}
                        className="mb-1"
                      >
                        {title}
                      </h4>
                      <p
                        style={{
                          fontFamily: "var(--font-primary)",
                          fontWeight: 300,
                          fontSize: "var(--text-sm)",
                        }}
                        className="text-muted-foreground"
                      >
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
                >
                  Maybe Later
                </Button>
                <Button
                  style={{
                    background: "var(--kontron-gradient-linear)",
                    color: "white",
                    fontFamily: "var(--font-primary)",
                    fontWeight: 700,
                  }}
                >
                  Upgrade Now
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Notification Styles */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Notification Card Styles
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            headings Bold (700) · body Light (300)
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg border border-border space-y-4">
          {[
            {
              icon: (
                <Info
                  className="h-5 w-5 mt-0.5"
                  style={{ color: "var(--kontron-blue)" }}
                />
              ),
              title: "Information",
              body: "This is an informational notification message.",
              borderColor: "var(--kontron-blue)",
              bgClass: "bg-blue-50",
              titleColor: "var(--kontron-blue)",
            },
            {
              icon: (
                <CheckCircle2
                  className="h-5 w-5 mt-0.5"
                  style={{ color: "var(--kontron-green)" }}
                />
              ),
              title: "Success",
              body: "Your action has been completed successfully.",
              borderColor: "var(--kontron-green)",
              bgClass: "bg-green-50",
              titleColor: "var(--kontron-green)",
            },
            {
              icon: <AlertCircle className="h-5 w-5 mt-0.5 text-yellow-600" />,
              title: "Warning",
              body: "Please review this warning message carefully.",
              borderColor: "#EAB308",
              bgClass: "bg-yellow-50",
              titleColor: "#854D0E",
            },
            {
              icon: <XCircle className="h-5 w-5 mt-0.5 text-red-600" />,
              title: "Error",
              body: "An error occurred. Please try again.",
              borderColor: "#EF4444",
              bgClass: "bg-red-50",
              titleColor: "#991B1B",
            },
          ].map(({ icon, title, body, borderColor, bgClass, titleColor }) => (
            <div
              key={title}
              className={`p-4 rounded-lg border-l-4 ${bgClass}`}
              style={{ borderLeftColor: borderColor }}
            >
              <div className="flex items-start gap-3">
                {icon}
                <div>
                  <h4
                    className="mb-1"
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 700,
                      color: titleColor,
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontWeight: 300,
                      fontSize: "var(--text-sm)",
                    }}
                    className="text-muted-foreground"
                  >
                    {body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
