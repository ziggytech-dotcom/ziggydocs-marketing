import Image from 'next/image'

export function ZiggyDocsLogo({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/press-assets/ziggydocs-wordmark-dark.png"
      alt="ZiggyDocs"
      width={140}
      height={40}
      className={className}
      style={{ objectFit: 'contain' }}
      priority
    />
  )
}
