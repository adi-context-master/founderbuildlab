'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

type HeaderProps = {
  className?: string
}

const Header = ({ className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 h-16 w-full transition-all duration-300',
        {
          'border-b border-border bg-background/80 shadow-sm backdrop-blur-md': isScrolled
        },
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a href='#' className='flex items-center gap-2'>
          <span className='text-xl font-bold text-foreground'>
            Founder<span className='text-primary'>BuildLab</span>
          </span>
        </a>

      </div>
    </header>
  )
}

export default Header
