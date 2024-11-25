'use server'
import { FieldValues } from "react-hook-form";
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
        email: email,
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
        const pb = new PocketBase('http://127.0.0.1:8090');
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
            console.log('error statuscode', error.status)
            if (error.response.data.email.code === 'validation_invalid_email') {
                return { error: error.response.data.email.message }
            }
        }
        return { error: 'Could not create user' }
    }
    redirect('/welcome')
}

export async function login(values: FieldValues) {
    const { email, password } = values;

    // Validate input fields
    const validatedFields = LoginFormSchema.safeParse({
        email: email,
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
