import type { Metadata } from "next"
import SettingsForm from "./settings-form"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: "Garage Management System - Settings",
  description: "Configure your garage management system settings",
}

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-10">
       <Link href="/dashboard" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      <h1 className="text-3xl font-bold mb-6">Garage Management Settings</h1>
      <SettingsForm />
    </div>
  )
}

