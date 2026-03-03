import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "./utils";

/* Every button: px-8 py-3 rounded-md shadow-md hover:shadow-lg */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium px-8 py-3 rounded-md shadow-sm hover:shadow-md transition-colors transition-shadow disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "border-0 bg-primary text-primary-foreground text-base hover:bg-primary/90",
        destructive:
          "border-0 bg-destructive text-white text-base hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "bg-background text-foreground text-base hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "border-0 bg-secondary text-secondary-foreground text-base hover:bg-secondary/80 dark:border-0",
        ghost:
          "border-0 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "rounded-none border-0 shadow-none hover:shadow-none text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 min-h-9 has-[>svg]:px-3",
        sm: "h-8 min-h-8 gap-1.5 px-6 py-2 has-[>svg]:px-2.5 text-sm",
        lg: "h-10 min-h-10 has-[>svg]:px-4 text-base",
        icon: "size-9 px-3 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref as any}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
