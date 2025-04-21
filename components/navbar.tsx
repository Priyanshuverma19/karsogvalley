"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Plane, Menu, X } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Indian Packages", href: "/indian-packages" },
    { name: "International Packages", href: "/international-packages" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Plane className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Karsog valley tour and travels</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Enquire Now</Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Package Enquiry</SheetTitle>
                </SheetHeader>
                <div className="mt-6 pb-6">
                  <EnquiryForm />
                </div>
              </SheetContent>
            </Sheet>
            <ModeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden">
          <div className="flex flex-col space-y-4 p-4 pt-20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Sheet>
              <SheetTrigger asChild>
                <Button className="w-full">
                  Enquire Now
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Package Enquiry</SheetTitle>
                </SheetHeader>
                <div className="mt-6 pb-6">
                  <EnquiryForm onSubmitSuccess={() => setIsOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
            <div className="pt-4">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}