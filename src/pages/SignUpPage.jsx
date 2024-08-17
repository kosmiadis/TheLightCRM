import { Form, useNavigate, useActionData, useNavigation, json, redirect } from "react-router-dom"
import { Input, Button } from "@nextui-org/react"

export default function SignUpPage () {
    const navigation = useNavigation();
    const navigate = useNavigate();
    const errors = useActionData();

    const isSubmitting = navigation.state === 'submitting';

    function handleLogin () {
        navigate('/login');
    }
    
    return <>
        <h1 className="mx-auto min-w-[350px] max-w-[350px] text-3xl mb-4 font-bold">SignUp</h1>
        <Form method='POST' className="mx-auto min-w-[350px] max-w-[350px] flex flex-col gap-4">
            <Input type="text" name='first_name' size="lg" label="First Name" />
            <Input type="text" name='last_name' size="lg" label="Last Name" />
            <Input type="text" name='username' size="lg" label="Username" />
            <Input type="email" name='email' size="lg" label="Email" />
            <Input type="password" name='password' size="lg" label="Password" />
            {errors && <p className="text-md pl-2 mb-2 text-red-500">{errors.message}</p>}
            <div className="flex gap-2 self-end">
                <Button variant={isSubmitting ? 'light' : 'faded'} color='primary' type='button' onClick={handleLogin} isDisabled={isSubmitting}>Login</Button>
                <Button variant="ghost" color='primary' type='submit' className="w-min text-nowrap self-end text-blue-600" isLoading={isSubmitting}>Sign Up</Button>
            </div>
        </Form>
    </>
}

export async function signUpAction ({params, request}) {
    
    const formData = await request.formData();

    const first_name = formData.get('first_name')
    const last_name = formData.get('last_name')
    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')
    
    if (
        first_name.trim() === '' || 
        last_name.trim() === '' || 
        username.trim() === '' || 
        email.trim() === '' ||
        password.trim() === ''
    ) {
        return json({ message: 'One or more input fields are empty!'}, {status: 400})
    }

      try {
        const response = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                first_name: formData.get('first_name').trim().toUpperCase(),
                last_name: formData.get('last_name').trim().toUpperCase(),
                username: formData.get('username').trim().toUpperCase(),
                email: formData.get('email').trim().toUpperCase(),
                password: formData.get('password').trim().toUpperCase(),
            })
        })

        if (!response.ok) {
            return json({message: 'Something went wrong, trying to login!'}, {status: 400})
        }

        else {
            const resData = await response.json()
            localStorage.setItem('token', resData.token);
            return redirect("/profile");
        }
    } catch (e) {
        return json({message: 'Invalid Credentials!'}, {status: 400})
    }    
}