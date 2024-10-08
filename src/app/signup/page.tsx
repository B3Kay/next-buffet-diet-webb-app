'use client'
import { Input, Card, Block, Button, Divider, Stack, Toggle } from "reablocks";

import { useForm, Controller } from 'react-hook-form';
import { signup } from "../../actions/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

type FormValues = {
    name: string
    email: string
    password: string
    passwordConfirm: string
    subscribe: boolean
}

export default function SignupPage() {
    const router = useRouter();
    const {
        control,
        handleSubmit,
        setError,
        formState: {
            isSubmitting,
            errors,
        }
    } = useForm<FormValues>();
    return <Card className="w-full grow p-5 h-[1000px]" contentClassName="w-full flex gap-12">
        <div className="h-full w-full flex flex-col items-start p-7">
            <div className="w-full grow flex flex-col justify-center">
                {/* <LogoIcon className="h-11 mb-2 self-start w-auto" /> */}
                <h4 className="text-2xl font-sans font-bold mb-0">
                    Create an account to Sign up
                </h4>
                <span className="text-base text-text-secondary font-sans">
                    Welcome to Buffet Finder, powered by Buffet Diet.
                </span>
                <form className="my-14" onSubmit={handleSubmit(async values => {

                    const resp = await signup(values)


                    if (resp.error) {
                        setError(`root.serverError`, {
                            type: 'serverError',
                            message: resp.error
                        })
                    }
                    if (resp.errors?.email) {
                        const errorMessage = resp.errors?.email.length > 1 ? resp.errors?.email.join(" ") : resp.errors?.email[0]
                        setError('root.email', { types: { required: errorMessage } })
                    }
                    if (resp.errors?.name) {
                        const errorMessage = resp.errors?.name.length > 1 ? resp.errors?.name.join(" ") : resp.errors?.name[0]
                        setError('name', { types: { required: errorMessage } })
                    }
                    if (resp.errors?.password) {
                        const errorMessage = resp.errors?.password.length > 1 ? resp.errors?.password.join(" ") : resp.errors?.password[0]
                        setError('password', { types: { required: errorMessage } })
                    }
                    if (resp.errors?.passwordConfirm) {
                        const errorMessage = resp.errors?.passwordConfirm.length > 1 ? resp.errors?.passwordConfirm.join(" ") : resp.errors?.passwordConfirm[0]
                        setError('password', { types: { required: errorMessage } })
                    }
                    if (resp.errors?.subscribe) {
                        const errorMessage = resp.errors?.subscribe.length > 1 ? resp.errors?.subscribe.join(" ") : resp.errors?.subscribe[0]
                        setError('subscribe', { types: { required: errorMessage } })
                    }
                })}>
                    <Block labelClassName="text-sm font-medium mb-1" label="Name">
                        <Controller name="name" rules={{ required: 'Please enter a name', minLength: 2 }} control={control} render={({
                            field: {
                                value,
                                onBlur,
                                onChange
                            }
                        }) => <Input
                                name="name"
                                disabled={isSubmitting}
                                placeholder="Buffet Smith"
                                value={value || ''}
                                type="name"
                                onChange={onChange}
                                onBlur={onBlur}
                                error={!!errors.name}
                            />}
                        />
                        {errors.name ? <span className="text-red-500 text-xs">{'Please enter atleast 2 characters'}</span> : null}
                    </Block>
                    <Block labelClassName="text-sm font-medium mb-1" label="Email">
                        <Controller name="email" rules={{ required: 'Please enter a valid email', pattern: /^\S+@\S+$/i }} control={control} render={({
                            field: {
                                value,
                                onBlur,
                                onChange
                            }
                        }) => <Input
                                name="email"
                                disabled={isSubmitting}
                                placeholder="eating@buffetdiet.com"
                                value={value || ''}
                                type="email"
                                onChange={onChange}
                                onBlur={onBlur}
                                error={!!errors.email}
                            />}
                        />
                        {errors.email ? <span className="text-red-500 text-xs">{'Please enter a valid email'}</span> : null}
                    </Block>
                    <Block labelClassName="text-sm font-medium mb-1" label="Password">
                        <Controller name="password" control={control} rules={{ required: 'Password must be at least 6 characters', minLength: 6 }} render={({
                            field: {
                                value,
                                onBlur,
                                onChange
                            }
                        }) => <Input
                                name="password"
                                disabled={isSubmitting}
                                // placeholder="************"
                                value={value || ''}
                                type="password"
                                onChange={onChange}
                                onBlur={onBlur}
                                error={!!errors.password}
                            />}
                        />
                        {errors.password ? <span className="text-red-500 text-xs">{'Password must be at least 6 characters'}</span> : null}
                    </Block>
                    <Block labelClassName="text-sm font-medium mb-1" label="Repeat Password">
                        <Controller name="passwordConfirm" control={control} rules={{ required: 'Password must match', minLength: 6 }} render={({
                            field: {
                                value,
                                onBlur,
                                onChange
                            }
                        }) => <Input
                                name="passwordConfirm"
                                disabled={isSubmitting}

                                value={value || ''}
                                type="password"
                                onChange={onChange}
                                onBlur={onBlur}
                                error={!!errors.passwordConfirm}
                            />}
                        />
                        {errors.passwordConfirm ? <span className="text-red-500 text-xs">{'Repeated password must match'}</span> : null}
                    </Block>
                    <Block className="mb-7" labelClassName="text-sm font-medium mb-1" label="Subscribe to our newsletter, we promise to not spam you.">

                        <Controller name="subscribe" control={control}
                            render={({
                                field: {
                                    value,
                                    onBlur,
                                    onChange
                                }
                            }) => <Toggle checked={value} onChange={onChange} onBlur={onBlur} />}
                        />
                    </Block>
                    <p>
                        {errors.root?.serverError ? <span className="text-red-500 text-xs">{errors.root.serverError.message}</span> : null}
                    </p>
                    <Stack direction="column">
                        <Button type="submit" variant="filled" color="primary" disabled={isSubmitting} className="mt-7 rounded-sm px-4 py-2 flex items-center gap-2 self-stretch !text-lg light:hover:bg-none " startAdornment={<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none">
                            <g clipPath="url(#a)">
                                <path fill="#fff" d="M7.833 4.667 6.9 5.6l1.733 1.733h-6.8v1.334h6.8L6.9 10.4l.933.933L11.167 8 7.833 4.667Zm6 8H8.5V14h5.333c.734 0 1.334-.6 1.334-1.333V3.333c0-.733-.6-1.333-1.334-1.333H8.5v1.333h5.333v9.334Z" />
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill="#fff" d="M.5 0h16v16H.5z" />
                                </clipPath>
                            </defs>
                        </svg>} fullWidth>
                            {isSubmitting ? 'Signing up...' : 'Sign up'}
                        </Button>
                    </Stack>
                    <div className="mt-5 text-sm text-text-secondary flex items-center justify-center gap-1.5">
                        By signing in, you agree to our
                        <Link href="/terms" className="text-primary hover:text-primary-hover text-sm">
                            terms of service
                        </Link>
                        and
                        <Link href="/privacy" className="text-primary hover:text-primary-hover text-sm">
                            privacy policy
                        </Link>
                    </div>
                    <Stack className="my-7">
                        <Divider variant="secondary" />
                        <span className="whitespace-nowrap text-sm dark:text-waterloo light:text-charade">
                            or with
                        </span>
                        <Divider variant="secondary" />
                    </Stack>
                    <div className="flex flex-col w-full gap-4">
                        <Button variant="outline" startAdornment={<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="currentColor">
                            <path d="M8.50001 1.33325C4.82411 1.33325 1.83334 4.32402 1.83334 7.99992C1.83334 11.6758 4.82411 14.6666 8.50001 14.6666C12.1759 14.6666 15.1667 11.6758 15.1667 7.99992C15.1667 7.68639 15.1385 7.38685 15.0996 7.09953C15.0834 6.97964 15.0242 6.8697 14.9331 6.79009C14.842 6.71049 14.7252 6.66661 14.6042 6.66658H8.66668C8.53407 6.6666 8.4069 6.71928 8.31314 6.81305C8.21937 6.90681 8.16669 7.03398 8.16668 7.16658V9.16658C8.16669 9.29919 8.21937 9.42636 8.31314 9.52012C8.4069 9.61389 8.53407 9.66657 8.66668 9.66658H11.7136C11.104 10.8406 9.91918 11.6666 8.50001 11.6666C6.46886 11.6666 4.83334 10.0311 4.83334 7.99992C4.83334 5.96877 6.46886 4.33325 8.50001 4.33325C9.43118 4.33325 10.2721 4.6829 10.9206 5.25578C11.016 5.33988 11.1398 5.38447 11.267 5.38048C11.3941 5.37649 11.5149 5.32422 11.6048 5.23429L13.0195 3.82023C13.0672 3.77261 13.1048 3.71584 13.13 3.65333C13.1552 3.59083 13.1675 3.52388 13.1661 3.4565C13.1648 3.38913 13.1498 3.32271 13.1222 3.26126C13.0945 3.1998 13.0548 3.14457 13.0052 3.09888C11.8213 2.00641 10.2384 1.33325 8.50001 1.33325ZM8.50001 2.33325C9.79224 2.33325 10.9608 2.78521 11.9115 3.51424L11.1699 4.25513C10.408 3.70909 9.50943 3.33325 8.50001 3.33325C6.88151 3.33325 5.45468 4.16481 4.6172 5.42114L3.81642 4.80851C4.83547 3.314 6.55005 2.33325 8.50001 2.33325ZM3.33009 5.69588L4.15691 6.32804C3.9554 6.84888 3.83334 7.40918 3.83334 7.99992C3.83334 8.59066 3.9554 9.15096 4.15691 9.67179L3.33009 10.304C3.01623 9.59914 2.83334 8.82279 2.83334 7.99992C2.83334 7.17704 3.01623 6.40069 3.33009 5.69588ZM9.16668 7.66658H14.1413C14.1491 7.77735 14.1667 7.8898 14.1667 7.99992C14.1667 9.4142 13.6331 10.6893 12.78 11.6809L11.9994 11.0045C12.4269 10.5069 12.7894 9.95334 12.9779 9.30656C12.9996 9.23206 13.0037 9.15353 12.9898 9.07718C12.9759 9.00083 12.9444 8.92876 12.8979 8.86667C12.8513 8.80458 12.791 8.75418 12.7216 8.71945C12.6522 8.68472 12.5757 8.66662 12.4981 8.66658H9.16668V7.66658ZM4.6172 10.5787C5.45468 11.835 6.88151 12.6666 8.50001 12.6666C9.55209 12.6666 10.5222 12.3145 11.3034 11.7245L12.0593 12.3801C11.0847 13.1726 9.85742 13.6666 8.50001 13.6666C6.55005 13.6666 4.83547 12.6858 3.81642 11.1913L4.6172 10.5787Z" />
                        </svg>} fullWidth>
                            Sign in with Google
                        </Button>
                        <Button variant="outline" startAdornment={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M3.83333 2C2.82674 2 2 2.82674 2 3.83333V12.1667C2 13.1733 2.82674 14 3.83333 14H12.1667C13.1733 14 14 13.1733 14 12.1667V3.83333C14 2.82674 13.1733 2 12.1667 2H3.83333ZM3.83333 3H12.1667C12.6327 3 13 3.36726 13 3.83333V12.1667C13 12.6327 12.6327 13 12.1667 13H10V9.66667H11.2083C11.3763 9.66667 11.5184 9.54102 11.5391 9.37435L11.6641 8.37435C11.6761 8.27968 11.646 8.18463 11.5827 8.11263C11.5197 8.04096 11.429 8 11.3333 8H10V6.83333C10 6.46567 10.299 6.16667 10.6667 6.16667H11.3333C11.5173 6.16667 11.6667 6.01767 11.6667 5.83333V4.70833C11.6667 4.53567 11.5349 4.39164 11.3633 4.3763C11.3436 4.37464 10.8733 4.33333 10.278 4.33333C8.80899 4.33333 8 5.2054 8 6.78906V8H6.66667C6.48267 8 6.33333 8.149 6.33333 8.33333V9.33333C6.33333 9.51767 6.48267 9.66667 6.66667 9.66667H8V13H3.83333C3.36726 13 3 12.6327 3 12.1667V3.83333C3 3.36726 3.36726 3 3.83333 3Z" />
                        </svg>} fullWidth>
                            Sign up with Facebook
                        </Button>
                        <Button variant="outline" startAdornment={<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="currentColor">
                            <path d="M9.75977 1.01822C9.53638 1.03106 9.31524 1.07809 9.10417 1.15949V1.16015L3.46029 3.33788C2.8832 3.56033 2.5 4.11918 2.5 4.73762V11.8333C2.50016 11.8377 2.50038 11.842 2.50065 11.8463C2.50085 11.8485 2.50107 11.8507 2.5013 11.8529C2.50179 11.867 2.50287 11.8811 2.50456 11.8952C2.50475 11.898 2.50497 11.9008 2.50521 11.9036C2.50738 11.9183 2.51021 11.9328 2.51367 11.9473C2.51727 11.9629 2.52161 11.9783 2.52669 11.9935C2.52796 11.997 2.52926 12.0004 2.5306 12.0039C2.53418 12.014 2.53809 12.024 2.54232 12.0338C2.54602 12.0418 2.54993 12.0496 2.55404 12.0573C2.55795 12.0652 2.56208 12.073 2.56641 12.0807C2.56936 12.0858 2.5724 12.0908 2.57552 12.0957C2.58127 12.1054 2.58735 12.115 2.59375 12.1243C2.59714 12.129 2.60062 12.1335 2.60417 12.138C2.61043 12.1462 2.61694 12.1543 2.6237 12.1621C2.62795 12.167 2.63229 12.1717 2.63672 12.1764C2.64346 12.1836 2.6504 12.1905 2.65755 12.1973C2.66392 12.2031 2.67043 12.2087 2.67708 12.2142C2.68283 12.2193 2.68869 12.2243 2.69466 12.2292C2.70355 12.236 2.71267 12.2425 2.72201 12.2487C2.72545 12.2509 2.72892 12.2531 2.73242 12.2552C2.7451 12.2632 2.75814 12.2705 2.77148 12.2773C2.77257 12.278 2.77365 12.2786 2.77474 12.2793C2.78708 12.2857 2.79967 12.2915 2.8125 12.2969C2.81466 12.2977 2.81683 12.2986 2.81901 12.2995L9.07552 14.834C9.50035 15.0059 9.96882 15.0393 10.4134 14.9284L13.0384 14.2734H13.0391C13.7043 14.1071 14.1758 13.5038 14.1758 12.8177V3.21614C14.1758 2.53516 13.7112 1.93519 13.0521 1.76431V1.76366L10.4284 1.08397H10.4277C10.2086 1.02709 9.98294 1.00539 9.75977 1.01822ZM9.81706 2.01692C9.93714 2.00998 10.0585 2.02142 10.1764 2.05207H10.1771L12.8014 2.73176C13.0243 2.78954 13.1758 2.98578 13.1758 3.21614V12.8177C13.1758 13.0496 13.0216 13.247 12.7962 13.3034L10.1719 13.9577C9.93247 14.0174 9.68034 13.9996 9.45117 13.9069V13.9075L6.41406 12.6771L9.61719 12.9974C9.68666 13.0043 9.75682 12.9966 9.82313 12.9747C9.88944 12.9529 9.95044 12.9174 10.0022 12.8705C10.054 12.8237 10.0953 12.7665 10.1237 12.7027C10.152 12.6388 10.1666 12.5698 10.1667 12.5V3.83332C10.1667 3.75541 10.1485 3.67857 10.1135 3.60894C10.0786 3.5393 10.0278 3.4788 9.96535 3.43226C9.90286 3.38571 9.83037 3.35441 9.75364 3.34085C9.67692 3.32729 9.59809 3.33185 9.52344 3.35416L5.66536 4.5091C5.17361 4.65625 4.83333 5.11376 4.83333 5.62694V10.5039L3.5 11.0749V4.73762C3.5 4.52939 3.62541 4.34635 3.81966 4.27147L3.82031 4.27082L9.46419 2.09309C9.57812 2.04915 9.69697 2.02385 9.81706 2.01692ZM9.16667 4.5052V11.9479L4.97982 11.5293L5.5306 11.293C5.62049 11.2544 5.69708 11.1902 5.75089 11.1085C5.8047 11.0268 5.83336 10.9312 5.83333 10.8333V5.62694C5.83333 5.55098 5.8792 5.48848 5.95182 5.46679H5.95247L9.16667 4.5052Z" />
                        </svg>} fullWidth>
                            Sign up with Microsoft
                        </Button>
                    </div>
                    <Divider className="mt-5 mb-5" variant="secondary" />
                    <div className="mt-5 text-text-secondary text-sm flex items-center justify-center gap-2">
                        Already have an account?
                        <Link href="/login" className="text-primary hover:text-primary-hover text-lg">
                            Sign in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
        <div className="hidden md:block w-full h-full overflow-hidden">
            <img src={'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
                className="w-auto h-full object-cover" />
        </div>
    </Card >;
}