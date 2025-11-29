'use client'

import { useState } from 'react'
import { ClockIcon, BellIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { WaitlistForm } from '@/components/waitlist-form'

interface ComingSoonDialogProps {
  children: React.ReactNode
}

export function ComingSoonDialog({ children }: ComingSoonDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <div className='flex flex-col items-center justify-center py-6 text-center'>
          <div className='mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10'>
            <ClockIcon className='size-8 text-primary' />
          </div>
          <DialogHeader className='items-center'>
            <DialogTitle className='text-xl'>Curriculum Coming Soon</DialogTitle>
            <DialogDescription className='mt-2 text-base'>
              We&apos;re putting the finishing touches on our founder curriculum. Join the waitlist to get notified when it&apos;s ready!
            </DialogDescription>
          </DialogHeader>
          <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
            <WaitlistForm>
              <Button className='rounded-full bg-primary font-semibold text-primary-foreground'>
                <BellIcon className='mr-2 size-4' />
                Notify Me
              </Button>
            </WaitlistForm>
            <Button
              variant='outline'
              className='rounded-full'
              onClick={() => setOpen(false)}
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
