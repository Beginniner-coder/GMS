"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"

interface Vehicle {
  id: number
  make: string
  model: string
  year: number
  licensePlate: string
  status: "Available" | "In Service" | "Out of Order"
}

const initialVehicles: Vehicle[] = [
  { id: 1, make: "Toyota", model: "Camry", year: 2020, licensePlate: "ABC123", status: "Available" },
  { id: 2, make: "Honda", model: "Civic", year: 2019, licensePlate: "XYZ789", status: "In Service" },
  { id: 3, make: "Ford", model: "F-150", year: 2021, licensePlate: "DEF456", status: "Available" },
  { id: 4, make: "Chevrolet", model: "Malibu", year: 2018, licensePlate: "GHI789", status: "Out of Order" },
  { id: 5, make: "Nissan", model: "Altima", year: 2022, licensePlate: "JKL012", status: "Available" },
]

export default function VehicleList() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles)

  const handleEdit = (id: number) => {
    // Implement edit functionality
    console.log(`Edit vehicle with id: ${id}`)
  }

  const handleDelete = (id: number) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id))
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Make</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>License Plate</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow key={vehicle.id}>
              <TableCell>{vehicle.make}</TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.year}</TableCell>
              <TableCell>{vehicle.licensePlate}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    vehicle.status === "Available"
                      ? "bg-green-200 text-green-800"
                      : vehicle.status === "In Service"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                  }`}
                >
                  {vehicle.status}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" onClick={() => handleEdit(vehicle.id)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => handleDelete(vehicle.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

