import { Form, json, useActionData, useNavigate, useNavigation, redirect } from "react-router-dom"
import { Button, Input } from "@nextui-org/react";

export default function LoginPage () {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const errors = useActionData();
    const isSubmitting = navigation.state === 'submitting';

    function handleSignUp () {
        navigate('/signup');
    }

    return <>
            <h1 className="mx-auto min-w-[350px] max-w-[350px] text-3xl mb-4 font-bold">Login</h1>
            <Form method='POST' className="mx-auto min-w-[350px] max-w-[350px] flex flex-col gap-4">
                <Input type="text" name='username' size="lg" label="Username" />
                <Input type="password" name='password' size="lg" label="Password" />
                {errors && <p className="text-md pl-2 mb-2 text-red-500">{errors.message}</p>}
                <div className="flex gap-2 self-end">
                    <Button variant={isSubmitting ? 'light' : 'faded'} color='primary' type='button' onClick={handleSignUp} disabled={isSubmitting}>SignUp</Button>
                    <Button variant="ghost" color='primary' type='submit' className="w-min text-nowrap self-end text-blue-600" isLoading={isSubmitting}>Login</Button>
                </div>
            </Form>
    </>
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loginAction ({params, request}) {
    const formData = await request.formData();
    const username = formData.get('username');
    const password = formData.get('password');

    if (username.trim() === '' || password.trim() === '') {
        return json({ message: 'One or more input fields are empty!'}, {status: 400})
    }

    try {
        const response = await fetch('https://dummyjson.com/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: formData.get('username'),
                password: formData.get('password'),
            })
          })

        if (!response.ok) {
            return json({message: 'Login Failed!'}, {status: 400})
        }

        else {
            const resData = await response.json();
            localStorage.setItem('token', resData.token);
            return redirect("/profile");
        }
    } catch (e) {
        return json({message: 'Invalid Credentials!'}, {status: 400})
    }
}