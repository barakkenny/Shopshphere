import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonCard() {
  return (
    <Card className="w-full max-w-xs border-0">
      <CardContent>
        <Skeleton className="aspect-video w-full h-50" />
      </CardContent>
      <CardHeader>
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
    </Card>
  )
}
