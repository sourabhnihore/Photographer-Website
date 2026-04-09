import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest",
          {
            "bg-gold text-background hover:bg-gold-light": variant === "default",
            "border border-gold text-gold hover:bg-gold/10": variant === "outline",
            "hover:bg-gold/10 text-gold": variant === "ghost",
            "text-gold underline-offset-4 hover:underline": variant === "link",
            "h-12 px-8 py-2": size === "default",
            "h-10 px-6 text-xs": size === "sm",
            "h-14 px-10 text-base": size === "lg",
            "h-12 w-12": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
