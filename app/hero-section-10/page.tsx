import Header from '@/components/shadcn-studio/blocks/hero-section-10/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-10/hero-section-10'
import type { AvatarItem } from '@/components/shadcn-studio/blocks/hero-section-10/hero-section-10'

const avatars: AvatarItem[] = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    name: 'Sarah Chen, Founder @ TechStart',
    fallback: 'SC'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    name: 'Mike Rodriguez, Co-founder @ BuildFast',
    fallback: 'MR'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    name: 'Priya Patel, Founder @ LaunchPad',
    fallback: 'PP'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    name: 'James Kim, CEO @ ShipIt',
    fallback: 'JK'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    name: 'Emma Liu, Founder @ NextGen',
    fallback: 'EL'
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
