"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export const loginSchema = z.object({
    email: z
        .email({ message: "Invalid email address" })
        .min(5, { message: "Email must be at least 5 characters." })
        .max(100, { message: "Email must be at most 100 characters." }),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters." })
        .regex(/^(?=.*[A-Z])/, {
            message: "Password must contain at least 1 uppercase letter.",
        })
        .regex(/^(?=.*[!@#$%^&*])/, {
            message: "Password must contain at least 1 special character.",
        })
        .regex(/^(?=.*\d)/, {
            message: "Password must contain at least 1 number.",
        }),
})

const LoginForm = () => {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    // const router = useRouter();
    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        console.log(data);
        try {
            // const res = await login(data);
            // if (res?.id) {
            //     toast.success("User Login Successfully");
            //     router.push('/');
            // } else {
            //     toast.error("User Login Failed")
            // }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSocialLogin = (provider: "google" | "github") => {
        console.log(provider);
    }

    return (
        <div className="flex flex-col gap-6 w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to login to your account
                </p>
            </div>
            <div className="grid gap-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>User Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="johndoe34@gmail.com"
                                            type="email"
                                            autoComplete="email" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="********"
                                            autoComplete="current-password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full cursor-pointer">Login</Button>
                    </form>
                </Form>

                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>

                <Button
                    type="button"
                    variant="outline"
                    className="w-full cursor-pointer"
                    onClick={() => handleSocialLogin("google")}
                >
                    Login with Google
                </Button>
                <Button
                    type="button"
                    variant="outline"
                    className="w-full cursor-pointer"
                    onClick={() => handleSocialLogin("github")}
                >
                    Login with GitHub
                </Button>
            </div>
        </div>
    );
};

export default LoginForm;