import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mt-8">
      <Skeleton className="h-hero rounded-md" />

      <Skeleton className="mb-4 mt-12 h-8 w-64" />
      <div className="flex flex-wrap">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="basis-1/2 rounded-md pr-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          >
            <Skeleton className="aspect-poster w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}