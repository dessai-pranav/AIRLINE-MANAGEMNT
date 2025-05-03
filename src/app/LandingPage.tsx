import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import React from "react"

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div
            className="bg-cover bg-center min-h-screen w-screen h-screen flex items-center justify-center px-4"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1520442027413-7bf6c51517da?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
        >
            <div className="bg-black/50 backdrop-blur-lg shadow-2xl p-10 rounded-3xl text-center max-w-xl w-full text-white">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4 drop-shadow-md">
                    ✈️ WELCOME TO ARS ✈️
                </h1>
                <p className="text-xl  mb-8 text-gray-200 drop-shadow-sm">
                    Book your flights quickly, securely, and hassle-free.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        variant="ghost"
                        className="w-full sm:w-auto border border-white/60 text-white hover:bg-white/10 hover:border-white/90 transition-all"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full sm:w-auto border border-white/60 text-white hover:bg-white/10 hover:border-white/90 transition-all"
                        onClick={() => navigate("/signup")}
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    )
}
