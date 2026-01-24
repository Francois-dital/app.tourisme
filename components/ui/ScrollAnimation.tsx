'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fade' | 'slide-left' | 'slide-right' | 'scale' | 'card'
  delay?: number
  threshold?: number
  className?: string
  once?: boolean
}

export default function ScrollAnimation({ 
  children, 
  animation = 'fade',
  delay = 0,
  threshold = 0.1,
  className = '',
  once = true 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  useEffect(() => {
    if (!isMounted) return
    
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => {
              setIsVisible(true)
              if (once) {
                observer.unobserve(entry.target)
              }
            }, delay)
          } else if (!once && !entry.isIntersecting) {
            setIsVisible(false)
          }
        })
      },
      { threshold }
    )

    observer.observe(element)
    
    return () => observer.disconnect()
  }, [delay, threshold, once, isVisible, isMounted])

  const getAnimationClass = (anim: string) => {
    switch (anim) {
      case 'slide-left': return 'scroll-slide-left'
      case 'slide-right': return 'scroll-slide-right'
      case 'scale': return 'scroll-scale-in'
      case 'card': return 'card-enter'
      default: return 'scroll-fade-in'
    }
  }

  if (!isMounted) {
    return (
      <div ref={elementRef} className={className}>
        {children}
      </div>
    )
  }

  const animationClass = getAnimationClass(animation)
  const visibilityClass = isVisible ? 'visible' : 'animated'

  return (
    <div 
      ref={elementRef} 
      className={`${animationClass} ${visibilityClass} ${className}`}
    >
      {children}
    </div>
  )
}