import {SignupForm} from "@/components/signup-form";


export default function SignupPage() {
    return (
        <div className="flex w-screen h-screen items-center justify-center  p-6 md:p-10">
            <div className="w-full max-w-md">
                <SignupForm />
            </div>
        </div>
    )
}
