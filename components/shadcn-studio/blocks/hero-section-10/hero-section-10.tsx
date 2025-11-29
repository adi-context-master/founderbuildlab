'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { MotionPreset } from '@/components/ui/motion-preset'
import { Rating } from '@/components/ui/rating'
import { SparklesIcon, RocketIcon, ZapIcon } from 'lucide-react'
import { WaitlistForm } from '@/components/waitlist-form'
import { ComingSoonDialog } from '@/components/coming-soon-dialog'

export type AvatarItem = {
  src: string
  name: string
  fallback: string
}

const HeroSection = ({ avatars }: { avatars: AvatarItem[] }) => {
  return (
    <section className='relative flex min-h-screen flex-col overflow-hidden'>
      {/* Background gradient using theme colors */}
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-br from-accent via-background to-muted' />
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent' />


      <div className='relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8'>
        {/* Headline */}
        <MotionPreset
          fade
          slide={{ direction: 'up', offset: 30 }}
          delay={0.1}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <h1 className='max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl'>
            Become the founder who actually{' '}
            <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
              ships code
            </span>
          </h1>
        </MotionPreset>

        {/* Subheadline */}
        <MotionPreset
          fade
          slide={{ direction: 'up', offset: 30 }}
          delay={0.2}
          transition={{ duration: 0.6 }}
          className='mt-6 text-center'
        >
          <p className='max-w-2xl text-lg text-muted-foreground sm:text-xl'>
            From &apos;<span className='line-through italic opacity-70'>we will need 6 weeks to build this</span>&apos; to &apos;<code>I can do it in 20 mins</code>&apos;
          </p>
        </MotionPreset>

        {/* CTA Buttons */}
        <MotionPreset
          fade
          slide={{ direction: 'up', offset: 30 }}
          delay={0.3}
          transition={{ duration: 0.6 }}
          className='mt-10 flex flex-col items-center gap-4 sm:flex-row'
        >
          <WaitlistForm>
            <Button
              size='lg'
              className='h-12 min-w-[200px] rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30'
            >
              <RocketIcon className='mr-2 size-5' />
              Interested to Learn
            </Button>
          </WaitlistForm>
          <ComingSoonDialog>
            <Button
              size='lg'
              variant='outline'
              className='h-12 min-w-[180px] rounded-full border-2 border-border px-8 text-base font-semibold transition-all hover:bg-accent hover:text-accent-foreground'
            >
              View Curriculum
            </Button>
          </ComingSoonDialog>
        </MotionPreset>

        {/* Social Proof */}
        <MotionPreset
          fade
          slide={{ direction: 'up', offset: 30 }}
          delay={0.4}
          transition={{ duration: 0.6 }}
          className='mt-12'
        >
          <div className='flex flex-col items-center gap-4 sm:flex-row sm:gap-6'>
            {/* Avatar Stack */}
            <div className='flex -space-x-3'>
              {avatars.map((avatar, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Avatar className='size-10 ring-2 ring-background transition-transform hover:z-10 hover:-translate-y-1 sm:size-11'>
                      <AvatarImage src={avatar.src} alt={avatar.name} />
                      <AvatarFallback className='bg-accent text-xs font-medium text-accent-foreground'>
                        {avatar.fallback}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>{avatar.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>

            {/* Divider */}
            <div className='hidden h-8 w-px bg-border sm:block' />

            {/* Rating and text */}
            <div className='flex flex-col items-center gap-1 sm:items-start'>
              <div className='flex items-center gap-2'>
                <Rating readOnly variant='yellow' size={18} value={4.8} precision={0.1} />
                <span className='text-sm font-semibold text-foreground'>4.8</span>
              </div>
              <span className='text-sm text-muted-foreground'>Trusted by founders from top startups</span>
            </div>
          </div>
        </MotionPreset>

        {/* Feature Pills */}
        <MotionPreset
          fade
          slide={{ direction: 'up', offset: 20 }}
          delay={0.5}
          transition={{ duration: 0.6 }}
          className='mt-16'
        >
          <div className='flex flex-wrap items-center justify-center gap-3'>
            {[
              { icon: ZapIcon, text: '7-Day Build Sprints' },
              { icon: SparklesIcon, text: 'Vibe-Code Workflows' },
              { icon: RocketIcon, text: 'Ship Real MVPs' }
            ].map((feature, index) => (
              <div
                key={index}
                className='flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-card-foreground backdrop-blur-sm'
              >
                <feature.icon className='size-4 text-primary' />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </MotionPreset>
      </div>
    </section>
  )
}

export default HeroSection
