import { Button } from "@/components/ui/button"
import { Mail } from 'lucide-react'
import { Twitter, Instagram } from 'lucide-react'; // Import Twitter and Instagram icons

export const StayTuned = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Stay tuned for updates
        </h1>
        <p className="text-zinc-400 text-lg">
          Stay tuned for exciting updates and announcements – we'll be in touch soon!
        </p>
        <Button 
          size="lg"
          className="bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-medium"
        >
          <Mail className="mr-2 h-4 w-4" />
          Mail Subscribe
        </Button>
        
        <div className="flex items-center justify-center gap-6 pt-8">
          <a 
            href="#" 
            className="text-zinc-400 hover:text-yellow-400 transition-colors"
            aria-label="Follow us on Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="text-zinc-400 hover:text-yellow-400 transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="text-zinc-400 hover:text-yellow-400 transition-colors"
            aria-label="Contact us via email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

