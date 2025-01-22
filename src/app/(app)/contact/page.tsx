"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {Logo as LogoV2 } from "@/components/logo"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  // const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle contact form submission logic here
    console.log("'Contact form submitted with:'", { name, email })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <LogoV2 width={150} height={75} />
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Contact Us</h1>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch with Mind-Mend</CardTitle>
            <CardDescription>Fill out the form below and we will get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                {/* <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                /> */}
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/80">Send Message</Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">
              We typically respond within 1-2 business days.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

