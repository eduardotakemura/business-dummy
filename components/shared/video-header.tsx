import { cn } from '@/lib/utils'

interface VideoHeaderProps {
  title: string
  videoId: string
  className?: string
}

export function VideoHeader({ title, videoId, className }: VideoHeaderProps) {
  return (
    <section
      className={cn(
        'relative h-screen w-full flex flex-col gap-8 p-8',
        className
      )}
    >
      {/* Title */}
      <h2
        className={`text-center text-4xl font-bold text-theme-onBackground px-6`}
      >
        {title}
      </h2>

      {/* Video Container */}
      <div className="relative flex-1 w-full max-w-7xl mx-auto rounded-2xl overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
        />
      </div>
    </section>
  )
}
