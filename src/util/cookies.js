import { Cookies } from "react-cookie";

const cookies = new Cookies();
export const auth_token_identifier = 'auth_token';

export function set_Cookie(name, value) {
    cookies.set(name, value, {
        path: '/', // Make cookie available on all pages
        httpOnly: false, // Since it's on client-side, make it accessible to JS
        secure: true, // Ensure the cookie is sent over HTTPS
        sameSite: 'Strict', // Prevent CSRF attacks
        maxAge: 3 * 3600 // Set cookie to expire in 3 hours
    });
}

export function get_Cookie(name) {
    return cookies.get(name);
}

export function remove_Cookie(name) {
    return cookies.remove(name);
}