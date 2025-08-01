"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToastProps {
  title?: string
  description?: string
  variant?: "default" | "success" | "error" | "warning"
  onClose?: () => void
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ title, description, variant = "default", onClose, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true)

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => onClose?.(), 300)
      }, 4000)

      return () => clearTimeout(timer)
    }, [onClose])

    const variantStyles = {
      default: "bg-secondary/90 border-secondary/50 text-text",
      success: "bg-green-900/90 border-green-700 text-green-100",
      error: "bg-red-900/90 border-red-700 text-red-100",
      warning: "bg-yellow-900/90 border-yellow-700 text-yellow-100",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "fixed top-4 right-4 z-50 w-full max-w-sm rounded-lg border p-4 shadow-lg transition-all duration-300",
          variantStyles[variant],
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
        )}
        {...props}
      >
        <div className="flex items-start gap-3">
          <div className="flex-1">
            {title && <div className="font-semibold text-sm mb-1">{title}</div>}
            {description && <div className="text-sm opacity-90">{description}</div>}
          </div>
          <button
            onClick={() => {
              setIsVisible(false)
              setTimeout(() => onClose?.(), 300)
            }}
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  },
)
Toast.displayName = "Toast"

export { Toast }
