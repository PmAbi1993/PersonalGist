"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Sidebar, SidebarTrigger, SidebarInput, SidebarSeparator, SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  const [tweet, setTweet] = useState("");

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar className="w-64 border-r">
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">X</h1>
            <SidebarInput placeholder="Search X" className="mb-4" />
            <Button className="w-full mb-4">New Post</Button>
            <SidebarSeparator />
            <nav className="space-y-2 mt-4">
              <Button variant="ghost" className="w-full justify-start">
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                Notifications
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Messages
              </Button>
            </nav>
          </div>
        </Sidebar>
      </div>
      <main className="flex-1 overflow-y-auto">
          <header className="sticky top-0 bg-background border-b p-4 flex justify-between items-center">
            <SidebarTrigger className="lg:hidden" />
            <h2 className="text-xl font-semibold">Home</h2>
            <Button variant="ghost" size="icon">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </Button>
          </header>
          <div className="container mx-auto px-4 py-8">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl">What's happening?</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Post your X"
                  value={tweet}
                  onChange={(e) => setTweet(e.target.value)}
                  className="mb-4"
                />
                <Button className="w-full">Post</Button>
              </CardContent>
            </Card>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="flex items-start space-x-4 py-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 flex-grow">
                      <Skeleton className="h-4 w-1/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
    </SidebarProvider>
  );
}
