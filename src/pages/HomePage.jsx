import { useLoaderData, json } from 'react-router-dom';
import { get_Cookie, auth_token_identifier } from '../util/cookies';
import HeroSection from '../components/HomePage/HeroSection';
import AuthSection from "../components/HomePage/Auth";
import AccordionSection from '../components/HomePage/AccordionSection';

export default function HomePage () {
    
    const authResponse = useLoaderData();

    return <>
        <HeroSection />
        {/*
            This section needs to check whether the user is logged in or not to display the
            corresponding home page section. It is either an auth section, or an actions section
            depending if the user is logged in or not correspondingly.
        */}
            <AuthSection auth={authResponse} /> 
        {/*End of section that needs to check user auth*/}
        <AccordionSection />
    </>
}

export async function homePageLoader () {
    const auth_token = get_Cookie(auth_token_identifier);
    
    if (auth_token) {
        const response = await fetch('https://dummyjson.com/user/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${auth_token}`, 
          }, 
        })

        if (!response.ok) {
            return json({isLoggedIn: false, userEmail: undefined})
        }

        const user = await response.json();
        if (user) {
            return json({isLoggedIn: true, userEmail: user.email})
        }
        else { 
            return json({isLoggedIn: false, userEmail: undefined})
        }
    }
    else {
        return json({isLoggedIn: false, userEmail: undefined})
    }
}