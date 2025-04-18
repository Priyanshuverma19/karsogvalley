import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold">Karsog valley tour and travels</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted partner for unforgettable travel experiences. Discover the world with confidence and comfort.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/indian-packages" className="text-sm text-muted-foreground hover:text-primary">
                  Indian Packages
                </Link>
              </li>
              <li>
                <Link href="/international-packages" className="text-sm text-muted-foreground hover:text-primary">
                  International Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="mr-2 h-4 w-4" />
                +91 82629 01867
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="mr-2 h-4 w-4" />
                info@Karsogvalleytour.com
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                vpo pokhi Tehsil Karsog district mandi himachal Pradesh 175011
                Packages Destination- himchal pradesh
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for travel updates and exclusive offers.
            </p>
            <div className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-[200px]"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Karsog valley tour and travels . All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}