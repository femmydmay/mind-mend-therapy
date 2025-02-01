"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog"; // Import DialogTitle
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Import VisuallyHidden
import { Logo } from "./logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Reviews", href: "/testimonial" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? " bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Logo width={100} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isScrolled ? "text-primary" : "text-black"
                } hover:text-primary/90 hover:underline transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className={`${
                  isScrolled
                    ? "text-primary-dark border-primary-dark"
                    : "text-white"
                }`}
              >
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button
                variant="primary"
                size="sm"
                className="bg-primary-dark text-white hover:bg-primary-dark/70 rounded-tl-2xl rounded-br-2xl"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-red-900"
              >
                <nav className="flex flex-col h-full">
                  {/* Logo in Drawer */}
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="flex items-center">
                      <Logo width={60} />
                    </Link>
                    <SheetTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white"
                      >
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                  </div>

                  {/* Menu Items in Drawer */}
                  <div className="space-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-white hover:text-gray-300 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link href="/login">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full text-white border-white hover:bg-red-800"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button
                        variant="default"
                        size="lg"
                        className="w-full bg-white text-red-900"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </nav>

                {/* Add DialogTitle for Accessibility */}
                <VisuallyHidden>
                  <DialogTitle>Main Navigation</DialogTitle>
                </VisuallyHidden>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
