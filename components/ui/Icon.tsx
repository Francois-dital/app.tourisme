import { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Icon = ({ name, size = 'md', className, ...props }: IconProps) => {
  return (
    <span
      className={cn(
        'material-symbols-outlined',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
          'text-3xl': size === 'xl',
        },
        className
      )}
      {...props}
    >
      {name}
    </span>
  )
}

export { Icon }