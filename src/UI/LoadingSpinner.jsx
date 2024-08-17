import { Spinner } from "@nextui-org/react";

export default function LoadingSpinner ({text}) {
    return <main className="h-screen translate-y-[-10%] flex flex-col items-center justify-center">
        <Spinner size="lg" label={text} color="primary" />
    </main>
}