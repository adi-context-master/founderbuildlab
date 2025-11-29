import Header from '@/components/shadcn-studio/blocks/hero-section-10/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-10/hero-section-10'
import type { AvatarItem } from '@/components/shadcn-studio/blocks/hero-section-10/hero-section-10'

const avatars: AvatarItem[] = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    name: 'Booker Woodford, Co-founder @ Emote Care',
    fallback: 'BW'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    name: 'Joe Morse, Co-founder @ Emote Care',
    fallback: 'JM'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Vivek Singh, CEO @ Corsecotech',
    fallback: 'VS'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    name: 'Theresa Gschwandner, Founder @ Kundra',
    fallback: 'TG'
  }
]

const HeroSectionPage = () => {
  return (
    <div className='relative'>
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className='relative flex flex-col'>
        <HeroSection avatars={avatars} />
      </main>
    </div>
  )
}

export default HeroSectionPage
