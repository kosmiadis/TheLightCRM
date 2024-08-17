import { useLoaderData } from "react-router-dom"
import Logout from "../components/Logout";

export default function ProfilePage () {
    
    const user = useLoaderData();

    return <>
        <h1>Profile</h1>
        <Logout />
    </>
}