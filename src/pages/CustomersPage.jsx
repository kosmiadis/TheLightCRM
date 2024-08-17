import { useLoaderData } from "react-router-dom";

export default function CustomersPage () {

    const user = useLoaderData();

    return <>
        <h1>CustomersPage</h1>
    </>
}