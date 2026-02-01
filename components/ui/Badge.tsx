import { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'rainforest' | 'coastal' | 'adventure' | 'cultural' | 'wildlife' | 'nature' | 'historical' | 'relaxation' | 'photography' | 'marine'
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
          'bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-200': variant === 'rainforest',
          'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200': variant === 'coastal',
          'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-200': variant === 'adventure',
          'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200': variant === 'cultural',
          'bg-lime-100 text-lime-800 dark:bg-lime-800 dark:text-lime-200': variant === 'wildlife',
          'bg-teal-100 text-teal-800 dark:bg-teal-800 dark:text-teal-200': variant === 'nature',
          'bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-200': variant === 'historical',
          'bg-pink-100 text-pink-800 dark:bg-pink-800 dark:text-pink-200': variant === 'relaxation',
          'bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-200': variant === 'photography',
          'bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-cyan-200': variant === 'marine',
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