import { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning'
  size?: 'sm' | 'md'
}

const Badge = ({ className, variant = 'default', size = 'sm', ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center font-bold uppercase tracking-widest rounded-full',
        {
          'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200': variant === 'default',
          'bg-primary text-white shadow-sm': variant === 'primary',
          'bg-secondary text-white shadow-sm': variant === 'secondary',
          'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200': variant === 'success',
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200': variant === 'warning',
        },
        {
          'px-2 py-1 text-xs': size === 'sm',
          'px-4 py-1.5 text-sm': size === 'md',
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }