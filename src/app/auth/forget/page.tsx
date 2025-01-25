import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ForgetPasswordPage() {
  async function handleSubmit(formData: FormData) {
    'use server'
    // Here you would typically implement the logic to send a password reset email
    // For demonstration purposes, we'll just log the email
    const email = formData.get('email')
    console.log(`Password reset requested for email: ${email}`)
    // In a real application, you'd send an email and redirect the user to a confirmation page
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>Enter your email to reset your password.</CardDescription>
        </CardHeader>
        <form action={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Send Reset Link</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}