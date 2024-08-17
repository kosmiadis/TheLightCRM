import { Button } from '@nextui-org/react';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthCtx } from '../Contexts/AuthContext';

function HeroSection () {
    return <section className="text-center mt-[50px]">
        <h1 className="text-4xl font-extrabold my-8">TheLightCRM</h1>
        <p className="text-lg">An <span className='font-bold text-xl'>Easy-to-Use</span> <span className='text-xl'>CRM</span> for basic customers operations.</p>
        <p className="text-lg">The best part, is <span className="font-bold italic">100% free</span> :)</p>
    </section>
}

function AuthSection () {
    const { loggedAccount, loggedAccountDispatch } = useContext(AuthCtx);
    const navigate = useNavigate();

    function handleClick (identifier) {
        if (identifier === 'login') {
            navigate('/login');
        }
        else if (identifier === 'signup') {
            navigate('/signup');
        }
        else if (identifier === 'customers') {
            navigate('/customers');
        }
        else if (identifier === 'agreements') {
            navigate('/agreements');
        }
    }
    
    return <section className="flex flex-col gap-4 text-center mt-8">
        {!loggedAccount.account.isLoggedIn && (<>
            <h2><span className='font-semibold text-lg'>Login</span> or <span className='font-semibold text-xl'>Create an Account</span></h2>
            <div className="flex gap-4 justify-center">
                <Button onClick={() => handleClick('login')} size='lg' variant='ghost' color='primary' className='font-bold'>Login</Button>
                <Button onClick={() => handleClick('signup')} size='lg' variant='ghost' color='primary' className='font-bold'>SignUp</Button>
            </div>
        </>
        )}
        {loggedAccount.account.isLoggedIn && (<>
            <h2 className='text-[20px]'>Start Using TheLightCRM!</h2>
            <p className='m-0 text-[16px]'>Logged In as <span className='font-bold text-[18px] italic'>{loggedAccount.account.email}</span></p>
            <div className="flex gap-4 justify-center">
                <Button onClick={() => handleClick('customers')} size='lg' variant='ghost' color='primary' className='font-bold'>Customers</Button>
                <Button onClick={() => handleClick('agreements')} size='lg' variant='ghost' color='primary' className='font-bold'>Agreements</Button>
            </div>
        </>)}
    </section>
}

function AccordionSection () {
    const faqData = [
        {
          title: 'What is a CRM?',
          text: 'A CRM (Customer Relationship Management) system is software designed to help businesses manage customer interactions, track sales, and streamline processes.'
        },
        {
          title: 'Why do businesses need a CRM?',
          text: 'CRMs centralize customer data, making it easier to track interactions, manage leads, and improve customer service, ultimately increasing sales and customer satisfaction.'
        },
        {
          title: 'What are the key features of a CRM?',
          text: 'Key features of a CRM include contact management, sales tracking, email marketing, reporting, and analytics. Advanced CRMs may also offer automation and AI-driven insights.'
        },
        {
          title: 'How can a CRM improve customer relationships?',
          text: 'A CRM helps businesses better understand customer needs by tracking interactions and preferences, allowing for more personalized and timely communication.'
        }
    ];

    return <section className="mt-8 mb-12">
        <h2 className="text-4xl font-bold underline mb-6">FAQ's</h2>
        <Accordion className="w-full flex flex-col gap-2" variant="splitted">
           {faqData.map(question => (
            <AccordionItem size='lg' key={question.title} aria-label={question.title} title={question.title}>
                <article className='p-4 pl-0 pt-0'>
                    <p className='text-[16px]'>{question.text}</p>
                </article>
            </AccordionItem>
           ))}
        </Accordion>
    </section>
}

export default function HomePage () {

    return <>
        <HeroSection />
        <AuthSection />
        <AccordionSection />
    </>
}