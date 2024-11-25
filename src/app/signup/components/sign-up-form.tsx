'use client'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { useForm, FormProvider } from 'react-hook-form';
import { cn } from "@/lib/utils"
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AlertCircle } from "lucide-react";
import { UpdateIcon } from "@radix-ui/react-icons";
import { SignupFormSchema } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signup } from "@/actions/auth";
import { RSC_PREFETCH_SUFFIX } from "next/dist/lib/constants";



export function SignUpForm() {

    const form = useForm<z.infer<typeof SignupFormSchema>>({
        resolver: zodResolver(SignupFormSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            passwordConfirm: "",
            subscribe: false,
        },
    });

    async function onSubmit(values: z.infer<typeof SignupFormSchema>) {
        const resp = await signup(values);
        console.log(resp);
        if (resp?.error) {
            console.log(resp.error);
            form.setError('root.serverError', {
                type: 'serverError',
                message: resp.error
            });
        }
        if (resp?.errors) {
            if (resp.errors?.email) {
                const errorMessage = Array.isArray(resp.errors.email)
                    ? resp.errors.email.join(" ")
                    : resp.errors.email;
                form.setError('email', { type: 'manual', message: errorMessage });
            }
            if (resp.errors?.name) {
                const errorMessage = Array.isArray(resp.errors.name)
                    ? resp.errors.name.join(" ")
                    : resp.errors.name;
                form.setError('name', { type: 'manual', message: errorMessage });
            }
            if (resp.errors?.password) {
                const errorMessage = Array.isArray(resp.errors.password)
                    ? resp.errors.password.join(" ")
                    : resp.errors.password;
                form.setError('password', { type: 'manual', message: errorMessage });
            }
            if (resp.errors?.passwordConfirm) {
                const errorMessage = Array.isArray(resp.errors.passwordConfirm)
                    ? resp.errors.passwordConfirm.join(" ")
                    : resp.errors.passwordConfirm;
                form.setError('passwordConfirm', { type: 'manual', message: errorMessage });
            }
            if (resp.errors?.subscribe) {
                const errorMessage = Array.isArray(resp.errors.subscribe)
                    ? resp.errors.subscribe.join(" ")
                    : resp.errors.subscribe;
                form.setError('subscribe', { type: 'manual', message: errorMessage });
            }
        }

    }


    return <div className="grid gap-6">


        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-2">


                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Me Eat Buffet" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="allyoucaneat@buffetdiet.com" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your email you signed up with.
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
                                <FormLabel>password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your password you signed up with.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="passwordConfirm"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Confirm your password.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {form.formState.errors.root?.serverError && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Login Error</AlertTitle>
                            <AlertDescription>
                                {form.formState.errors.root.serverError.message}
                            </AlertDescription>

                        </Alert>
                    )}
                    <Button disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting && (
                            <UpdateIcon className="mr-2 h-4 w-4 animate-spin" />
                            // 'Logging in...'
                        )}
                        Sign Up
                    </Button>
                    <Link
                        href="/login"
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "sm:hidden"
                        )}
                    >
                        Sign up
                    </Link>
                </div>


            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button variant="outline" disabled>
                {form.formState.isSubmitting ? (
                    <UpdateIcon className="mr-2 h-4 w-4 animate-spin" />
                    // 'Logging in...'
                ) : (
                    // <Icons.gitHub className="mr-2 h-4 w-4" />
                    ' '
                )}{" "}
                Google
            </Button>
        </Form>
    </div>
}