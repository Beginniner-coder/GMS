import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Clock, IndianRupee } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  price: number
  duration: string
}

export function ServiceCard({ title, description, price, duration }: ServiceCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wrench className="h-5 w-5" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {duration}
          </Badge>
          <span className="font-bold text-lg flex items-center gap-1">
            <IndianRupee className="h-5 w-5" />
            {price.toLocaleString('en-IN')}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}



