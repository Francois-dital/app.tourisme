import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2',
          {
            'bg-primary text-background-dark hover:scale-105 shadow-xl shadow-primary/20 focus:ring-primary': variant === 'primary',
            'bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20 focus:ring-white': variant === 'secondary',
            'border border-primary text-primary hover:bg-primary hover:text-background-dark focus:ring-primary': variant === 'outline',
            'text-primary hover:bg-primary/10 focus:ring-primary': variant === 'ghost',
          },
          {
            'px-4 py-2 text-sm rounded-lg': size === 'sm',
            'px-6 py-3 text-base rounded-lg': size === 'md',
            'px-10 py-5 text-base rounded-lg tracking-wide': size === 'lg',
          },
          {
            'w-full': fullWidth,
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }