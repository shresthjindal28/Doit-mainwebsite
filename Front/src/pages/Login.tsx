import { Link, useNavigate } from "react-router-dom";
import AuthForm from "@/components/AuthForm";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Wrench, ShieldCheck } from "lucide-react";

const Login = () => {
  const [loginMode, setLoginMode] = useState<
    "default" | "provider" | "user" | "admin"
  >("default");
  const navigate = useNavigate();

  const handleSelectMode = (mode: "provider" | "user" | "admin") => {
    if (mode === "admin") {
      navigate("/admin-login"); // Redirect to the admin login page
    } else {
      setLoginMode(mode);
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-black bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-gradient-to-t md:bg-gradient-to-l from-doit-500/80 to-orange-500/70 p-10 md:p-16 flex items-center justify-center backdrop-blur-md">
          <div className="max-w-md text-white">
            <h1
              className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Welcome Back to DO!T
            </h1>
            <p
              className="text-white/90 mb-8 animate-fade-in delay-100"
              style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
            >
              Log in to access your account and manage your home service needs
              or provide your professional services to our users.
            </p>
            <div className="animate-fade-in delay-200">
              <p
                className="text-white/80 text-sm"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
              >
                Don't have an account?
              </p>
              <Link
                to="/signup"
                className="text-white underline hover:text-white/90 transition-colors"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>

        <div className="text-black md:w-1/2 p-10 md:p-16 flex items-center justify-center bg-gradient-to-b md:bg-gradient-to-r from-doit-500/80 to-doit-200/50 relative overflow-hidden backdrop-blur-xl">
          
          
          <div 
            className="mt-10 w-full max-w-md z-10 p-8 rounded-xl border border-white/50 relative overflow-hidden backdrop-filter backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] " 
            style={{ 
             
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.2)'
            }}
          >            
            {/* Glass card highlights */}
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/40 to-transparent"></div>
            <div className="absolute bottom-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            
            <div className="mb-8 text-center md:text-left relative z-10">
              <h2 className="text-2xl font-bold mb-2 ">
                Login to Your Account
              </h2>
              <p className="text-black/70">Please enter your credentials below</p>
            </div>

            {loginMode === "default" ? (
              <div className="space-y-4 animate-fade-in relative z-10">
                <p className="text-center mb-4 text-black/70 font-medium">
                  I am a:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Button
                    onClick={() => handleSelectMode("user")}
                    variant="outline"
                    className="flex flex-col items-center justify-center h-32 p-4 transition-all hover:shadow-lg border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-black/70"
                    style={{ 
                      boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.4)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <div className="relative">
                      <User size={40} className="mb-2 text-black" />
                      <div className="absolute -top-1 -left-1 w-10 h-5 bg-white/30 blur-md rounded-full"></div>
                    </div>
                    <span>Homeowner</span>
                  </Button>

                  <Button
                    onClick={() => handleSelectMode("provider")}
                    variant="outline"
                    className="flex flex-col items-center justify-center h-32 p-4 transition-all hover:shadow-lg border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-black/70"
                    style={{ 
                      boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.4)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <div className="relative">
                      <Wrench size={40} className="mb-2 text-black" />
                      <div className="absolute -top-1 -left-1 w-10 h-5 bg-white/30 blur-md rounded-full"></div>
                    </div>
                    <span>Service Provider</span>
                  </Button>

                  <Button
                    onClick={() => handleSelectMode("admin")}
                    variant="outline"
                    className="flex flex-col items-center justify-center h-32 p-4 transition-all hover:shadow-lg border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-black/70"
                    style={{ 
                      boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.4)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <div className="relative">
                      <ShieldCheck size={40} className="mb-2 text-black" />
                      <div className="absolute -top-1 -left-1 w-10 h-5 bg-white/30 blur-md rounded-full"></div>
                    </div>
                    <span>Admin</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="mb-6 flex justify-between items-center">
                  <h3 className="font-medium text-white">
                    {loginMode === "user" && "Homeowner Login"}
                    {loginMode === "provider" && "Service Provider Login"}
                  </h3>
                  <Button
                    variant="ghost"
                    onClick={() => setLoginMode("default")}
                    className="text-sm text-white hover:bg-white/10"
                  >
                    ← Back to selection
                  </Button>
                </div>
                <AuthForm
                  mode="login"
                  role={loginMode === "user" ? "homeowner" : "provider"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
