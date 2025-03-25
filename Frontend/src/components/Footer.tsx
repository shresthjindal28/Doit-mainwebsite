import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Youtube, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-800">
      <div className="flex flex-col container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* PRODUCT Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">PRODUCT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Platform
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Analyze
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Optimize
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Localization
                </a>
              </li>
            </ul>
          </div>

          {/* SOLUTIONS Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">SOLUTIONS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Startups
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Global alliances
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Freelancers
                </a>
              </li>
            </ul>
          </div>

          {/* RESOURCES Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Customer stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Made with ALFInT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Livestreams
                </a>
              </li>
            </ul>
          </div>

          {/* COMPANY Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  DOIT Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Cookie policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Cookie preferences
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* COMMUNITY Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">COMMUNITY</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Discover the community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Partner with DOIT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Become an affiliate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Find a meetup near you
                </a>
              </li>
            </ul>
          </div>

          {/* GET HELP Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">GET HELP</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Footer Content - Right Side */}
        <div className="flex flex-col space-y-6 max-w-md text-sm ml-auto">
          {/* Newsletter Subscription */}
          <div className="flex items-center space-x-3">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-zinc-900 border-zinc-800 text-sm p-3 w-full max-w-lg"
            />
            <Button variant="secondary" className="text-sm px-4 py-2">
              Subscribe
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-3">
            <a href="#" className="text-zinc-400 hover:text-yellow-400">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-yellow-400">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-yellow-400">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-yellow-400">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-yellow-400">
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center justify-between space-x-2">
            <img src="/visa.svg" alt="Visa" className="h-6" />
            <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
            <img src="/paypal.svg" alt="PayPal" className="h-6" />
            <img src="/apple-pay.svg" alt="Apple Pay" className="h-6" />
            <img src="/google-pay.svg" alt="Google Pay" className="h-6" />
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-zinc-800 pt-2">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Copyright */}
            <div>
              <p className="text-sm">© 2023 DOIT, Inc. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
