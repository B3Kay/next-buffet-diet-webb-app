'use server'
import type { FieldValues } from "react-hook-form";
import PocketBase, { ClientResponseError } from 'pocketbase';
import { SignupFormSchema, LoginFormSchema } from '@/lib/definitions'
import { redirect } from "next/navigation";

import { cookies } from "next/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import db from "@/db/db";

type User = {
    name: string
    email: string
    password: string
    passwordConfirm: string
}

type UserV1 = Partial<{
    id: string;
    collectionId: string;
    collectionName: string;
    username: string;
    verified: boolean;
    emailVisibility: boolean;
    email: string;
    created: string;
    updated: string;
    name: string;
    avatar: string;
}>;

export async function signup(values: FieldValues) {
    const { email, password, name, passwordConfirm, subscribe } = values;

    const validatedFields = SignupFormSchema.safeParse({
        email: email.toLowerCase(),
        password: password,
        name: name,
        passwordConfirm: passwordConfirm,
        subscribe: subscribe
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    try {
        // TODO: This should definately be somewhere else and auth handling and API needs to be refactored overall to run user action in client.
        const pb = new PocketBase(process.env.POCKET_BASE_URL);
        const userCollection = pb.collection<User>('users');

        const resp = await userCollection.create<UserV1>({
            name: name,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
            subscribed: subscribe,
        });
        if (!resp.username) {
            return { error: 'Could not create user' }
        }
    } catch (error) {
        if (error instanceof ClientResponseError) {
            const emailError = error.response?.data?.email;
            if (emailError?.code === 'validation_invalid_email') {
                return { error: emailError.message };
            }
        }
        return { error: 'Could not create user' }
    }
    redirect('/signup/welcome')
}

export async function login(values: FieldValues) {
    const { email, password } = values;

    // Validate input fields
    const validatedFields = LoginFormSchema.safeParse({
        email: email.toLowerCase(),
        password: password,
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        const cookieStore = cookies()

        await db.authenticate(email, password, cookieStore);

    } catch (error) {
        // console.error('Authentication error:', error);
        return { error: 'Invalid email or password' };
    }

    redirect('/');
}

export async function signOut() {
    cookies().set('pb_auth', '');
    db.client.authStore.clear();
    redirect('/');
}

export const isUserAuthenticated = async () => {
    const cookieStore = cookies();

    const result = await db.isAuthenticated(cookieStore);

    return result;
};

export const getUser = async () => {
    const cookieStore = cookies();

    const result = await db.getUser(cookieStore);

    return result;
};

export async function loadAuthFromCookie() {
    const cookieStore = cookies()

    const cookie = cookieStore.get('pb_auth');

    if (cookie) {
        db.client.authStore.loadFromCookie(cookie.value || '');
    }

    if (!db.client.authStore.isValid) {
        throw new Error('User is not authenticated');
    }

    try {
        await db.client.collection('users').authRefresh(); // Refresh session if needed
    } catch (err) {
        console.error("Session is invalid or expired:", err);
        throw new Error('Session is invalid or expired');
    }
    console.log('CLient is authenticated')
}
