'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'

type CarRequest = {
  id: string
  customerName: string
  carModel: string
  serviceType: string
  requestedDate: string
  status: 'pending' | 'accepted' | 'rejected'
}

const initialRequests: CarRequest[] = [
  { id: '1', customerName: 'John Doe', carModel: 'Toyota Camry', serviceType: 'Oil Change', requestedDate: '2024-10-20', status: 'pending' },
  { id: '2', customerName: 'Jane Smith', carModel: 'Honda Civic', serviceType: 'Brake Inspection', requestedDate: '2024-10-21', status: 'pending' },
  { id: '3', customerName: 'Bob Johnson', carModel: 'Ford F-150', serviceType: 'Tire Rotation', requestedDate: '2024-10-22', status: 'pending' },
  { id: '4', customerName: 'Alice Brown', carModel: 'Chevrolet Malibu', serviceType: 'Battery Replacement', requestedDate: '2024-10-23', status: 'pending' },
  { id: '5', customerName: 'Charlie Davis', carModel: 'Nissan Altima', serviceType: 'AC Service', requestedDate: '2024-10-24', status: 'pending' },
]

export default function UpcomingRequests() {
  const [requests, setRequests] = useState<CarRequest[]>(initialRequests)

  const handleAccept = (id: string) => {
    setRequests(requests.map(request =>
      request.id === id ? { ...request, status: 'accepted' } : request
    ))
  }

  const handleReject = (id: string) => {
    setRequests(requests.map(request =>
      request.id === id ? { ...request, status: 'rejected' } : request
    ))
  }

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <Link href="/dashboard" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold">Upcoming Car Requests</h1>
      </header>

      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {requests.map((request) => (
            <Card key={request.id}>
              <CardHeader>
                <CardTitle>{request.carModel}</CardTitle>
                <CardDescription>{request.customerName}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-sm">{request.serviceType}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-sm">{request.requestedDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-sm">Pending</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {request.status === 'pending' ? (
                  <>
                    <Button onClick={() => handleAccept(request.id)} variant="outline" className="w-[48%]">Accept</Button>
                    <Button onClick={() => handleReject(request.id)} variant="outline" className="w-[48%]">Reject</Button>
                  </>
                ) : (
                  <Badge variant={request.status === 'accepted' ? 'default' : 'destructive'} className="w-full justify-center">
                    {request.status === 'accepted' ? 'Accepted' : 'Rejected'}
                  </Badge>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}