import { Button } from "@/components/ui/button";

export const  GetApp= () => {
  return (
    <div className="bg-[#4CD787] min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-white text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            GET STARTED WITH<br />DOIT ! TODAY
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-xl">
            Download the app now and simplify your home maintenance with just a few taps!
          </p>
          <div className="space-y-4">
            <p className="text-lg mb-4">Download App From</p>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="outline" 
                className="bg-black text-white border-none hover:bg-black/90 h-14"
                onClick={() => window.open('https://play.google.com/store', '_blank')}
              >
                <img 
                  src="/lovable-uploads/c5fbb2ae-a51f-4590-9e2d-e9a01d20d9cb.png" 
                  alt="Play Store" 
                  className="h-8 mr-2"
                />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="bg-black text-white border-none hover:bg-black/90 h-14"
                onClick={() => window.open('https://www.apple.com/app-store/', '_blank')}
              >
                <img 
                  src="/lovable-uploads/c5fbb2ae-a51f-4590-9e2d-e9a01d20d9cb.png" 
                  alt="App Store" 
                  className="h-8 mr-2"
                />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Content - Phone Mockups */}
        <div className="flex-1 relative h-[600px]">
          <div className="absolute right-0 transform translate-x-4">
            <div className="relative w-[280px] h-[560px]">
              {/* Phone mockups with shadow effect */}
              <div className="absolute right-32 top-8 w-64 h-[500px] bg-black rounded-[40px] transform -rotate-12 shadow-xl"></div>
              <div className="absolute right-16 top-4 w-64 h-[500px] bg-black rounded-[40px] transform -rotate-6 shadow-xl"></div>
              <div className="absolute right-0 w-64 h-[500px] bg-black rounded-[40px] shadow-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;