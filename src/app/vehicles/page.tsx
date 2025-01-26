import VehicleList from "@/components/vehicle-list"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function VehiclesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/dashboard" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      <h1 className="text-3xl font-bold mb-6">Garage Vehicles</h1>
      <VehicleList />
    </div>
  )
}

