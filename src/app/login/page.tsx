'use client'
import { Input, Card, Block, Button, Divider, Stack } from "reablocks";
import { useForm, Controller } from 'react-hook-form';
import { login } from "../actions/auth";

export default function LoginPage() {
    const {
        control,
        handleSubmit,
        formState: {
            isSubmitting,
            errors
        }
    } = useForm();

    return (
        <Card className="w-full grow p-5 h-[650px] md:h-[800px]" contentClassName="w-full flex gap-12">
            <div className="h-full w-full flex flex-col items-start p-7">
                <div className="w-full grow flex flex-col justify-center">
                    <h4 className="text-2xl font-sans font-bold mb-0">
                        Log In to Your Account
                    </h4>
                    <span className="text-base text-text-secondary font-sans">
                        Welcome back! Please log in to continue.
                    </span>
                    <form className="my-14" onSubmit={handleSubmit(values => {
                        console.log('values', values);
                        login(values);
                    })}>
                        <Block labelClassName="text-sm font-medium mb-1" label="Email">
                            <Controller
                                name="email"
                                rules={{ required: 'Please enter a valid email', pattern: /^\S+@\S+$/i }}
                                control={control}
                                render={({ field: { value, onBlur, onChange } }) => (
                                    <Input
                                        name="email"
                                        disabled={isSubmitting}
                                        placeholder="e.g. user@example.com"
                                        value={value || ''}
                                        type="email"
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        error={!!errors.email}
                                    />
                                )}
                            />
                            {errors.email && <span className="text-red-500 text-xs">{"Please enter a valid email"}</span>}
                        </Block>
                        <Block labelClassName="text-sm font-medium mb-1" label="Password">
                            <Controller
                                name="password"
                                control={control}
                                rules={{ required: 'Password must be at least 6 characters', minLength: 6 }}
                                render={({ field: { value, onBlur, onChange } }) => (
                                    <Input
                                        name="password"
                                        disabled={isSubmitting}
                                        value={value || ''}
                                        type="password"
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        error={!!errors.password}
                                    />
                                )}
                            />
                            {errors.password && <span className="text-red-500 text-xs">{"Password must be at least 6 characters"}</span>}
                        </Block>
                        <Stack direction="column">
                            <Button
                                type="submit"
                                variant="filled"
                                color="primary"
                                disabled={isSubmitting}
                                className="mt-7 rounded-sm px-4 py-2 flex items-center gap-2 self-stretch !text-lg bg-button-gradient hover:bg-button-gradient-hover focus:bg-button-gradient-focus light:bg-none light:bg-primary light:hover:bg-none light:hover:bg-primary-hover light:focus:bg-primary-hover focus:outline-none transition-colors"
                                fullWidth
                            >
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </Button>
                        </Stack>
                        <Stack className="my-7">
                            <Divider variant="secondary" />
                            <span className="whitespace-nowrap text-sm dark:text-waterloo light:text-charade">
                                or log in with
                            </span>
                            <Divider variant="secondary" />
                        </Stack>
                        <div className="flex flex-col w-full gap-4">
                            <Button variant="outline" startAdornment={<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="currentColor">
                                {/* Google icon SVG */}
                            </svg>} fullWidth>
                                Log in with Google
                            </Button>
                            <Button variant="outline" startAdornment={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                {/* Facebook icon SVG */}
                            </svg>} fullWidth>
                                Log in with Facebook
                            </Button>
                            <Button variant="outline" startAdornment={<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="currentColor">
                                {/* Apple icon SVG */}
                            </svg>} fullWidth>
                                Log in with Apple
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Card>
    );
}
