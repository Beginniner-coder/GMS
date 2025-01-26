'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Car, Settings, Bell, Wrench, Plus, Search } from "lucide-react"

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const vehicles = [
    { id: 1, name: 'Toyota Camry', licensePlate: 'ABC123', status: 'In Service' },
    { id: 2, name: 'Honda Civic', licensePlate: 'XYZ789', status: 'Waiting' },
    { id: 3, name: 'Ford F-150', licensePlate: 'DEF456', status: 'Completed' },
    { id: 4, name: 'Chevrolet Malibu', licensePlate: 'GHI789', status: 'In Service' },
  ]

  const filteredVehicles = vehicles.filter(vehicle => 
    vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.licensePlate.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md">
        <h1 className="mb-10 text-2xl font-bold">GearTech</h1>
        <nav className="space-y-4">
          <Link href="/vehicles" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <Car className="h-5 w-5" />
            <span>Vehicles</span>
          </Link>
          <Link href="/service" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <Wrench className="h-5 w-5" />
            <span>Services</span>
          </Link>
      
          <Link href="/request" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <Bell className="h-5 w-5" />
            <span>New Request</span>
          </Link>
          <Link href="/settings" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <h2 className="mb-6 text-3xl font-bold">Dashboard</h2>

        {/* Stat Cards */}
        <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Vehicles" value="5" icon={<Car className="h-6 w-6" />} />
          <StatCard title="In Service" value="1" icon={<Wrench className="h-6 w-6" />} />
          <StatCard title="Completed Today" value="1" icon={<Car className="h-6 w-6" />} />
          <StatCard title="Pending" value="3" icon={<Bell className="h-6 w-6" />} />
        </div>

        {/* Recent Activities and Vehicles in Garage */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ActivityItem
                title="Oil change completed"
                description="Toyota Camry (ABC123)"
              />
              <ActivityItem
                title="New vehicle added"
                description="Honda Civic (XYZ789)"
              />
              <ActivityItem
                title="Tire rotation scheduled"
                description="Ford F-150 (DEF456)"
              />
              <ActivityItem
                title="Battery replaced"
                description="Chevrolet Malibu (GHI789)"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Vehicles in Garage</CardTitle>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" /> Add Vehicle
              </Button>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="text"
                    placeholder="Search vehicles..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              {filteredVehicles.map((vehicle) => (
                <VehicleItem
                  key={vehicle.id}
                  name={vehicle.name}
                  licensePlate={vehicle.licensePlate}
                  status={vehicle.status}
                />
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function StatCard({ title, value, icon }:any) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

function ActivityItem({ title, description }:any) {
  return (
    <div className="mb-4 flex items-center space-x-4">
      <div className="rounded-full bg-blue-100 p-2">
        <Car className="h-4 w-4 text-blue-600" />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}

function VehicleItem({ name, licensePlate, status }:any) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Car className="h-6 w-6 text-gray-400" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{licensePlate}</p>
        </div>
      </div>
      <span className={`text-sm ${getStatusColor(status)}`}>{status}</span>
    </div>
  )
}

function getStatusColor(status:any) {
  switch (status) {
    case 'In Service':
      return 'text-blue-600'
    case 'Waiting':
      return 'text-yellow-600'
    case 'Completed':
      return 'text-green-600'
    default:
      return 'text-gray-600'
  }
}