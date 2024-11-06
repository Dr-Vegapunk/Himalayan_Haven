'use client'

import React, { useState, useEffect } from 'react'
import { Search, Globe, Menu, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function BookingInterfaceComponent() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const accommodationTypes = [
    { icon: '🛏️', label: 'Bed & breakfasts' },
    { icon: '🏠', label: 'Homestays' },
    { icon: '🏨', label: 'Hotels' },
    { icon: '🏙️', label: 'Top cities' },
    { icon: '⛰️', label: 'Mountain views' },
    { icon: '🍽️', label: 'Dining' },
    { icon: '🧘', label: 'Yoga retreats' },
    { icon: '🔥', label: 'Trending' },
    { icon: '🚶', label: 'Trekking nearby' },
    { icon: '🏔️', label: 'Himalayan experiences' },
  ]

  const listings = [
    { image: '/placeholder.svg', location: 'Kathmandu, Nepal', host: 'Jennifer', rating: 4.87, dates: 'Nov 1 - 6' },
    { image: '/placeholder.svg', location: 'Patan, Nepal', host: 'Yelos Raj', rating: 4.92, dates: 'Oct 18 - 23' },
    { image: '/placeholder.svg', location: 'Kathmandu, Nepal', host: 'Jennifer', rating: 4.84, dates: 'Oct 18 - 23' },
    { image: '/placeholder.svg', location: 'Kathmandu, Nepal', host: 'Sarita', rating: 4.92, dates: 'Oct 17 - 22' },
  ]

  return (
    (<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header
        className={`sticky top-0 z-50 bg-background transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'} border-b`}>
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/placeholder.svg"
              alt="Himalayan Haven Logo"
              className={`transition-all duration-300 ${isScrolled ? 'h-6' : 'h-8'} w-auto`} />
            <h1
              className={`ml-2 font-bold text-primary transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>Himalayan Haven</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost">Stays</Button>
            <Button variant="ghost">Experiences</Button>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Become a host</Button>
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Menu className="h-5 w-5" />
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Bookings</DropdownMenuItem>
                <DropdownMenuItem>Wishlist</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="my-8">
        <div
          className="flex items-center space-x-4 p-4 bg-background rounded-full shadow-lg">
          <div className="flex-1">
            <label className="block text-sm font-medium text-muted-foreground">Where</label>
            <Input
              type="text"
              placeholder="Search destinations"
              className="border-0 text-lg" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-muted-foreground">Check in</label>
            <Input type="text" placeholder="Add dates" className="border-0 text-lg" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-muted-foreground">Check out</label>
            <Input type="text" placeholder="Add dates" className="border-0 text-lg" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-muted-foreground">Who</label>
            <Input type="text" placeholder="Add guests" className="border-0 text-lg" />
          </div>
          <Button
            size="icon"
            className="bg-primary text-primary-foreground rounded-full h-12 w-12">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <Tabs defaultValue="bed-and-breakfasts" className="my-8">
        <TabsList className="flex justify-start overflow-x-auto">
          {accommodationTypes.map((type) => (
            <TabsTrigger
              key={type.label}
              value={type.label.toLowerCase().replace(/\s+/g, '-')}
              className="px-4 py-2">
              <span className="mr-2">{type.icon}</span>
              {type.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="flex justify-between items-center my-4">
        <Button variant="outline">Filters</Button>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Display total before taxes</span>
          <Switch />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        {listings.map((listing, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative">
              <img
                src={listing.image}
                alt={listing.location}
                className="w-full h-48 object-cover" />
              <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-white">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold">{listing.location}</h3>
              <p className="text-muted-foreground">Hosted by {listing.host}</p>
              <p className="text-muted-foreground">{listing.dates}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 border-t">
              <div className="flex items-center">
                <span className="text-lg font-semibold mr-1">★</span>
                <span>{listing.rating}</span>
              </div>
              <Button variant="link">View details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>)
  );
}