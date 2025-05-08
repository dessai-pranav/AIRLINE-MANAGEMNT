import { Label } from "@radix-ui/react-label";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "./ui/card";
import { Input } from "./input";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {cn} from "@/lib/utils";
import { Button } from "./ui/button";

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();


        const adminEmail = "admin@example.com";
        const adminPassword = "admin123";


        if (email === adminEmail && password === adminPassword) {
            console.log("Admin login successful");
            navigate("/admin-dashboard");
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                console.log("User login successful");
                navigate("/dashboard");
            } else {
                console.log("Invalid credentials");
                navigate("/signup");
            }
        } catch (error) {
            console.error("Error during login", error);
            navigate("/signup");
        }
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <a
                                className="underline underline-offset-4 cursor-pointer"
                                onClick={() => navigate("/signup")}
                            >
                                Sign up
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
