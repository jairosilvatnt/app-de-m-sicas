import { cn } from '@/lib/utils'

interface CategoryCardProps {
  name: string
  color: string
  image: string
}

export function CategoryCard({ name, color, image }: CategoryCardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg p-4 h-48 cursor-pointer transition-transform hover:scale-[1.02]',
        color,
      )}
    >
      <h3 className="text-2xl font-bold text-white">{name}</h3>
      <img
        src={image}
        alt={name}
        className="absolute bottom-0 right-0 h-24 w-24 translate-x-[18%] translate-y-[5%] rotate-[25deg] object-cover shadow-lg"
      />
    </div>
  )
}
