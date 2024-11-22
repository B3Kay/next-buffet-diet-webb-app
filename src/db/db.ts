import PocketBase from 'pocketbase';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

export const POCKET_BASE_URL = process.env.POCKET_BASE_URL;

export class DatabaseClient {
    client: PocketBase;

    constructor() {
        this.client = new PocketBase(POCKET_BASE_URL);
    }

    async authenticate(email: string, password: string, cookieStore: ReadonlyRequestCookies) {
        try {
            const result = await this.client.collection("users").authWithPassword(email, password);
            console.log('authenticate result:', result);
            const { record, token } = result
            record.token = token;
            cookieStore.set('pb_auth', db.client.authStore.exportToCookie());

            if (!result?.token) {
                throw new Error("Invalid email or password");
            }


            return result;
        } catch (err) {
            console.error(err);
            throw new Error("Invalid email or password");
        }
    }

    async register(name: string, email: string, password: string) {
        try {
            const result = await this.client.collection("users").create({
                name,
                email,
                password,
                passwordConfirm: password,
            });

            return result;
        } catch (err) {
            console.error("Registration error:", err); // Log the error
            throw new Error("Registration failed");
        }
    }

    async isAuthenticated(cookieStore: ReadonlyRequestCookies) {
        const cookie = cookieStore.get('pb_auth');
        if (!cookie) {
            return false;
        }

        this.client.authStore.loadFromCookie(cookie?.value || '');

        if (this.client.authStore.isValid === false) return false

        try {
            await this.client.collection('users').authRefresh(); // Refresh session if needed
            return true;
        } catch (err) {
            console.error("Session is invalid or expired:", err);
            return false;
        }

    }

    async getUser(cookieStore: ReadonlyRequestCookies) {
        const cookie = cookieStore.get('pb_auth');
        if (!cookie) {
            return false;
        }

        this.client.authStore.loadFromCookie(cookie?.value || '');
        return this.client.authStore.model;
    }
}

export const db = new DatabaseClient();

export default db;