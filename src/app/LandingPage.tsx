import { Button } from "@/components/ui/button"

export default function LandingPage() {
    return (
        <div
            className="bg-cover bg-center min-h-screen w-screen h-screen flex flex-col items-center justify-center text-white px-4"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1520442027413-7bf6c51517da?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}

        >
            <div className="bg-black bg-opacity-50 p-8 rounded-2xl text-center max-w-lg w-full">
                <h1 className="text-4xl font-bold mb-4">Welcome to ARS</h1>
                <p className="text-lg mb-6">Book flights easily and efficiently.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="w-full sm:w-auto bg-white text-black hover:bg-gray-200">
                        Login
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black">
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    )
}
