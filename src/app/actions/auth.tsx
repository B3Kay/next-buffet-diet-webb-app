'use server'
import { FieldValues } from "react-hook-form";
import PocketBase from 'pocketbase';
import { SignupFormSchema, LoginFormSchema } from '@/app/lib/definitions'
import { redirect } from "next/navigation";
import db from "@/db";
import { cookies } from "next/headers";

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
    const { email, password, name } = values;

    const validatedFields = SignupFormSchema.safeParse({
        email: email,
        password: password,
        name: name
    });
    console.log('validatedFields', validatedFields)

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const pb = new PocketBase('http://127.0.0.1:8090');
    const userCollection = pb.collection<User>('users');

    const resp = await userCollection.create<UserV1>({
        name: name,
        email: email,
        password: password,
        passwordConfirm: password
    });
    if (!resp.username) {
        return { message: 'could not create user' }
    }
    console.log('resp', resp)

    redirect('/')
}
export async function login(values: FieldValues) {
    console.log('login values', values)
    const { email, password } = values;

    const validatedFields = LoginFormSchema.safeParse({
        email: email,
        password: password,
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const res = await db.authenticate(email, password);
    const { record, token } = res;

    record.token = token;
    cookies().set('pb_auth', db.client.authStore.exportToCookie());


    console.log('Redirecting to /')
    redirect('/')

}