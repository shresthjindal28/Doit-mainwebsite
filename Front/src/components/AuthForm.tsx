import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const API_BASE_URL = "https://porudction-back.onrender.com";

interface AuthFormProps {
  mode: "login" | "signup";
  role?: "homeowner" | "provider" | "admin";
}

const AuthForm = ({ mode, role }: AuthFormProps) => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Default values for admin
  const isAdmin = role === "admin";
  const [name, setName] = useState("");
  const [mobnumber, setMobnumber] = useState("");
  const [email, setEmail] = useState(isAdmin ? "admin@example.com" : "");
  const [password, setPassword] = useState(isAdmin ? "Admin@123" : "");
  const [selectedRole, setSelectedRole] = useState<"homeowner" | "provider" | "admin">(
    isAdmin ? "admin" : role === "provider" ? "provider" : "homeowner"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          mode === "login"
            ? { email, password, mobnumber, role: selectedRole }
            : { name, email, password, mobnumber, role: selectedRole }
        ),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Authentication failed.");

      localStorage.setItem("doit-token", data.token);
      setUser(data.user);

      // Redirect admin users to /admin
      navigate(data.user.role === "admin" ? "/admin" : "/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      {mode === "signup" && (
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="h-12"
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="mobnumber">Mobile Number</Label>
        <Input
          id="mobnumber"
          type="tel"
          placeholder="Enter your Mobile Number"
          value={mobnumber}
          onChange={(e) => {
            const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
            if (input.length <= 10) setMobnumber(input); // Restrict length
          }}
          pattern="[0-9]{10}"
          minLength={10}
          maxLength={10}
          required
          className="h-12"
        />
        {mobnumber.length > 0 && mobnumber.length < 10 && (
          <p className="text-red-500 text-sm">Mobile number must be exactly 10 digits.</p>
        )}
      </div>

      {mode === "signup" && (
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12"
          />
        </div>
      )}

     

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="h-12"
          readOnly={isAdmin} // Admin password is fixed
        />
      </div>

      {mode === "signup" && role !== "admin" && (
        <RadioGroup
          value={selectedRole}
          onValueChange={(value) => setSelectedRole(value as "homeowner" | "provider")}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="homeowner" id="homeowner" />
            <Label htmlFor="homeowner" className="cursor-pointer">Homeowner</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="provider" id="provider" />
            <Label htmlFor="provider" className="cursor-pointer">Service Provider</Label>
          </div>
        </RadioGroup>
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button
        type="submit"
        className="w-full h-12 text-white font-medium transition-all duration-300 bg-gradient-to-r from-doit-400 to-orange-500 hover:from-doit-500 hover:to-orange-600"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : mode === "login" ? (
          "Login"
        ) : (
          "Sign Up"
        )}
      </Button>
    </form>
  );
};

export default AuthForm;
