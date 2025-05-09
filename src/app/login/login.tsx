import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
    return (
        <div className="flex w-screen h-screen items-center justify-center  p-6 md:p-10">
            <div className="w-full max-w-md">
                <LoginForm />
            </div>
        </div>
    )
}
