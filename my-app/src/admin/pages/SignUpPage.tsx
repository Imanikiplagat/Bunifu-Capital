import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { signUpUser } from "@/services";

export function SignUpPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    setError("");
    try {
      const newUser = await signUpUser({ username, email, password });
      console.log("User signed up:", newUser);
      navigate("/login"); // go to login page after successful signup
    } catch (err: any) {
      console.error("Signup failed:", err);
      setError("Signup failed. Try a different email or check your input.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">             
        <div className="mb-8 flex justify-center">
          <h1 className="text-2xl font-semibold tracking-tight text-[hsl(var(--rainbow-orange))]">
            Bunifu Capital
          </h1>
        </div>
      <div className="w-full max-w-[400px]">
        <Card className="border-border bg-card shadow-lg shadow-black/5">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-xl font-semibold tracking-tight">Sign Up</CardTitle>
            <CardDescription className="text-muted-foreground">
              Create a new admin account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Username</Label>
              <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button onClick={handleSignup} className="w-full rounded-md">
              Sign Up
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}