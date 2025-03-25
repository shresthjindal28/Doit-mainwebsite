import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Signup from './UserPage/Signup';
import Login from './UserPage/Login';
import Dashboard from './UserPage/Dashboard';
import Cart from './UserPage/Cart';
// import Bid from './UserPage/Bid';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { store } from './store/store';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
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
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* <Route path="/bid" element={<BidIndex />} /> */}

                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            {/* Button to send message */}
          </TooltipProvider>
        </QueryClientProvider>
      </Auth0Provider>
    </Provider>
  );
};

export default App;
