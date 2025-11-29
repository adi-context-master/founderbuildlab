'use client'

import { useState, useCallback } from 'react'
import confetti from 'canvas-confetti'
import { RocketIcon, CheckCircleIcon, Loader2Icon, AlertCircleIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

const WAITLIST_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwkUM-oZeP9ILdDhIJ2RzKK2aPyMMFplTX-zEH-CMgukq-D4Xj6z1pYbVmyaXnQs3VM/exec'

interface WaitlistFormProps {
  children: React.ReactNode
}

export function WaitlistForm({ children }: WaitlistFormProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  })

  const triggerConfetti = useCallback(() => {
    const end = Date.now() + 3 * 1000
    const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1']

    const frame = () => {
      if (Date.now() > end) return

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors
      })

      requestAnimationFrame(frame)
    }

    frame()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch(WAITLIST_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company
        }),
        mode: 'no-cors' // Required for Google Apps Script
      })

      // With no-cors mode, we can't read the response, so we assume success if no error thrown
      setIsSubmitting(false)
      setIsSuccess(true)
      triggerConfetti()

      // Reset after showing success
      setTimeout(() => {
        setOpen(false)
        setTimeout(() => {
          setIsSuccess(false)
          setFormData({ name: '', email: '', phone: '', company: '' })
        }, 300)
      }, 2500)
    } catch (err) {
      setIsSubmitting(false)
      setError('Something went wrong, please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        {isSuccess ? (
          <div className='flex flex-col items-center justify-center py-8 text-center'>
            <div className='mb-4 flex size-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30'>
              <CheckCircleIcon className='size-8 text-green-600 dark:text-green-400' />
            </div>
            <DialogTitle className='mb-2 text-xl'>You&apos;re on the list!</DialogTitle>
            <DialogDescription className='text-base'>
              We&apos;ll notify you when FounderBuildLab launches. Get ready to ship!
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className='flex items-center gap-2 text-xl'>
                <RocketIcon className='size-5 text-primary' />
                Join the Waitlist
              </DialogTitle>
              <DialogDescription>
                Be the first to know when FounderBuildLab launches. Get early access and exclusive founder resources.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className='mt-4 space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  name='name'
                  placeholder='Your name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='you@company.com'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='phone'>Phone Number</Label>
                <Input
                  id='phone'
                  name='phone'
                  type='tel'
                  placeholder='+1 (555) 000-0000'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='company'>Company (optional)</Label>
                <Input
                  id='company'
                  name='company'
                  placeholder='Your company'
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              {error && (
                <div className='flex items-center gap-2 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive'>
                  <AlertCircleIcon className='size-4' />
                  {error}
                </div>
              )}
              <Button
                type='submit'
                className='w-full rounded-full bg-primary font-semibold text-primary-foreground'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2Icon className='mr-2 size-4 animate-spin' />
                    Joining...
                  </>
                ) : (
                  <>
                    <RocketIcon className='mr-2 size-4' />
                    Join Waitlist
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
