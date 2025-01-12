import s from "@/styles/buttons.module.scss"

import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef } from "react"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full whitespace-nowrap focus-visible:outline-none",
  {
    variants: {
      variant: {
        link: "underline-offset-4 hover:underline",
      },
      size: {
        sm: s.sm,
        md: s.md,
        lg: s.lg,
        icon: "h-9 w-9",
      },
      theme: {
        lean: s.lean,
        primary: s.primary,
        secondary: s.secondary,
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "cursor-pointer",
          buttonVariants({
            size,
          }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
