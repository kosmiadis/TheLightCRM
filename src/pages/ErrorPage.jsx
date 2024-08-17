import { useRouteError, useNavigate } from "react-router-dom"
import ErrorLayout from '../layouts/ErrorLayout';
import { Button } from "@nextui-org/react";

function Error ({text, description}) {
    const navigate = useNavigate();

    return <section className="mt-28 flex flex-col gap-4 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{text}</h1>
        <p className="text-xl">{description}</p>
        <Button className="mx-auto w-min text-nowrap font-bold" size='lg' variant='ghost' color='secondary' onClick={() => navigate('/')}>Go to Home</Button>
    </section>
} 

export default function ErrorPage () {
    
    const error = useRouteError();

    return <ErrorLayout>
        <div className="translate-y-[50%] text-center">
            {error.status === 404 && <Error text="Page not Found!" description="You may have misstyped a url or a link is broken."/>}
            {error.status === !404 && <Error text="Oops... Something went wrong!" description="You are facing an error, please try again later!" />}
        </div>
    </ErrorLayout>
}