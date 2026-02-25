import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { loginUser, readUser } from "../../services/cms.service"
export function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError(""); // reset previous error
    try {
      // 1️⃣ Call login API
      const { token, user } = await loginUser({ username, password });

      // 2️⃣ Store token locally for authenticated calls
      localStorage.setItem("token", token);

      // 3️⃣ Optional: fetch full user info
      const currentUser = await readUser(token);
      console.log("Logged in user info:", currentUser);

      // 4️⃣ Navigate to admin dashboard
      navigate("/admin");
    } catch (err: any) {
      console.error("Login failed:", err);
      setError("Login failed. Please check your email and password.");
    }
  };

  return (
    <div
      className={cn(
        "min-h-svh flex flex-col items-center justify-center p-4",
        "bg-background",
        "bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.08),_transparent_50%)]",
        "bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--rainbow-indigo)/0.06),_transparent_50%)]"
      )}
    >
      <div className="w-full max-w-[400px]">
        <div className="mb-8 flex justify-center">
          <h1 className="text-2xl font-semibold tracking-tight text-[hsl(var(--rainbow-orange))]">
            Bunifu Capital
          </h1>
        </div>
        <Card className="border-border bg-card shadow-lg shadow-black/5">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-xl font-semibold tracking-tight">Admin sign in</CardTitle>
            <CardDescription className="text-muted-foreground">
              Enter your credentials to access the CMS.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Username</Label>
              <Input
                type="text"
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-md"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="button"
              className="w-full rounded-md"
              onClick={handleLogin}
            >
              Sign in
            </Button>
          </CardContent>
        </Card>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          CMS for Bunifu Capital. Secure login enabled.
          </p>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            No account?{" "}
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => navigate("/admin/signup")}
            >
              Sign up
            </span>
       </p>
      </div>
    </div>
  );
}