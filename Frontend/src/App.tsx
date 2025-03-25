import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Signup from './UserPage/Signup';
import Login from './UserPage/Login';
import { Auth0Provider } from '@auth0/auth0-react';
const queryClient = new QueryClient();

const App = () => {
 

  return (
    <>
    <Auth0Provider
 domain="dev-fu60houdmpcsnlmt.us.auth0.com"
    clientId="5bWApruDfCHzVzaaF25tU7XNc6uZXYMH"
    authorizationParams={{
      redirect_uri: window.location.origin, // This ensures it dynamically picks the correct URL
      connection: "google-oauth2"
    }}
   >
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {/* Button to send message */}
      
      </TooltipProvider>
    </QueryClientProvider>
    </Auth0Provider>
    </>
  );
};

export default App;
