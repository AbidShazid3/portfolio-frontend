import LoginForm from "@/components/modules/Auth/LoginForm";


const LoginPage = () => {
    return (
        <div className="flex min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-80px)] w-full items-center justify-center">
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;