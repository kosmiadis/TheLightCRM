import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function AuthContent({ auth }) {
    const navigate = useNavigate();

    function handleClick(identifier) {
        if (identifier === 'login') {
            navigate('/login');
        } else if (identifier === 'signup') {
            navigate('/signup');
        } else if (identifier === 'customers') {
            navigate('/customers');
        } else if (identifier === 'agreements') {
            navigate('/agreements');
        }
    }

    if (auth.isLoggedIn) {
        return (
            <section className="flex flex-col gap-4 text-center mt-8">
                <h2 className='text-[20px]'>Start Using TheLightCRM!</h2>
                <p className='m-0 text-[16px]'>Logged In as <span className='font-bold text-[18px] italic'>{auth.userEmail}</span></p>
                <div className="flex gap-4 justify-center">
                    <Button onClick={() => handleClick('customers')} size='lg' variant='ghost' color='primary' className='font-bold'>Customers</Button>
                    <Button onClick={() => handleClick('agreements')} size='lg' variant='ghost' color='primary' className='font-bold'>Agreements</Button>
                </div>
            </section>
        );
    } else {
        return (
            <section className="flex flex-col gap-4 text-center mt-8">
                <h2><span className='font-semibold text-lg'>Login</span> or <span className='font-semibold text-xl'>Create an Account</span></h2>
                <div className="flex gap-4 justify-center">
                    <Button onClick={() => handleClick('login')} size='lg' variant='ghost' color='primary' className='font-bold'>Login</Button>
                    <Button onClick={() => handleClick('signup')} size='lg' variant='ghost' color='primary' className='font-bold'>SignUp</Button>
                </div>
            </section>
        );
    }
}

export default function AuthSection ({auth}) {
    return (
        <AuthContent auth={auth}/>
    );
}