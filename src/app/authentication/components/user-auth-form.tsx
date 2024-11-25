"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"
import { MoonIcon, SunIcon, UpdateIcon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form"
import { login } from "@/actions/auth"
import { LoginFormSchema } from "@/lib/definitions"
import { z, ZodObject, ZodString, ZodTypeAny } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Link from "next/link"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
// import { Icons } from "@/components/icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {

    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
        const resp = await login(values);
        console.log(resp)
        if (resp) {
            if (resp.error && typeof resp.error === 'string') {
                form.setError('root.serverError', {
                    type: 'serverError',
                    message: resp.error
                });
            } else {
                if (resp.errors?.email) {
                    const errorMessage = Array.isArray(resp.errors.email)
                        ? resp.errors.email.join(" ")
                        : resp.errors.email;
                    form.setError('email', { type: 'manual', message: errorMessage });
                }
                if (resp.errors?.password) {
                    const errorMessage = Array.isArray(resp.errors.password)
                        ? resp.errors.password.join(" ")
                        : resp.errors.password;
                    form.setError('password', { type: 'manual', message: errorMessage });
                }
            }
        }
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        {/* <div className="grid gap-1">
                            <Label className="sr-only" htmlFor="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                            // disabled={isSubmitting}
                            />
                        </div> */}

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
                            Sign In with Email
                        </Button>
                        <Link
                            href="/signup"
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
                <Button variant="outline" type="button" disabled>
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
    )
}
