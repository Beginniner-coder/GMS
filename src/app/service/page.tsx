import { ServiceCard } from "@/components/service-card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Oil Change",
    description: "Regular oil change to keep your engine running smoothly",
    price: 1999,
    duration: "30 min"
  },
  {
    title: "Tire Rotation",
    description: "Extend the life of your tires with our rotation service",
    price: 999,
    duration: "45 min"
  },
  {
    title: "Brake Inspection",
    description: "Ensure your safety with our thorough brake inspection",
    price: 1499,
    duration: "1 hour"
  },
  {
    title: "Engine Tune-up",
    description: "Optimize your engine's performance with our tune-up service",
    price: 3999,
    duration: "2 hours"
  },
  {
    title: "Car Wash & Detailing",
    description: "Get your car looking like new with our detailing service",
    price: 2999,
    duration: "1.5 hours"
  },
  {
    title: "Battery Replacement",
    description: "Don't get stranded - replace your battery with us",
    price: 3499,
    duration: "30 min"
  }
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12">
      <Link href="/dashboard" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      <h1 className="text-4xl font-bold mb-8 text-center">Our Garage Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  )
}

