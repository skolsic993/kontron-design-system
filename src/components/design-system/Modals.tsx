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
   Dialog / alert titles    → Medium     (500)
   Descriptions             → Light    (300)
   Body / feature text      → Normal   (400)
   Confirm action buttons   → Medium     (500)
   Cancel / secondary btns  → Medium   (500)
   Form labels inside modal → SemiMedium (600)
   Notification headings    → Medium     (500)
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
            title Medium (500) · description Light (300)
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
                <DialogTitle
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
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
                  variant="ghost"
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

      {/* Form Dialog */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Form Dialog
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            title Medium · labels SemiMedium (600) · inputs Normal (400)
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
              >
                Add New User
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
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
                  variant="ghost"
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
                >
                  Cancel
                </Button>
                <Button
                  style={{ fontFamily: "var(--font-primary)", fontWeight: 500 }}
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
            titles Medium (500) · descriptions Light (300) · actions Medium
            (500)
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg shadow-sm">
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
                      fontWeight: 500,
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
                      fontWeight: 500,
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
                        fontWeight: 500,
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
                      fontWeight: 500,
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
                        fontWeight: 500,
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
                      fontWeight: 500,
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
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-kontron-blue-pale">
                      <AlertCircle
                        className="h-5 w-5"
                        style={{ color: "var(--kontron-magenta)" }}
                      />
                    </div>
                    <AlertDialogTitle
                      style={{
                        fontFamily: "var(--font-primary)",
                        fontWeight: 500,
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
                      fontWeight: 500,
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
                        fontWeight: 500,
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
                      fontWeight: 500,
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

      {/* Notification Styles */}
      <div className="space-y-4">
        <h3 className="ds-section-title text-xl mb-4">
          Notification Card Styles
          <span
            className="ml-3 text-sm text-muted-foreground"
            style={{ fontWeight: 300 }}
          >
            headings Medium (500) · body Light (300)
          </span>
        </h3>
        <div className="bg-card p-6 rounded-lg shadow-sm space-y-4">
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
              borderColor: "var(--kontron-green-dark)",
              bgClass: "bg-kontron-green-pale",
              titleColor: "var(--kontron-green-dark)",
            },
            {
              icon: (
                <AlertCircle className="h-5 w-5 mt-0.5 text-kontron-magenta" />
              ),
              title: "Warning",
              body: "Please review this warning message carefully.",
              borderColor: "var(--kontron-magenta)",
              bgClass: "bg-kontron-magenta-pale",
              titleColor: "var(--kontron-magenta)",
            },
            {
              icon: <XCircle className="h-5 w-5 mt-0.5 text-destructive" />,
              title: "Error",
              body: "An error occurred. Please try again.",
              borderColor: "var(--destructive)",
              bgClass: "bg-kontron-destructive-pale",
              titleColor: "var(--destructive)",
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
                      fontWeight: 500,
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
