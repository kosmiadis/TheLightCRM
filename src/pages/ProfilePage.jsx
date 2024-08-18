import { useLoaderData } from "react-router-dom"
import ProfileCard from "../components/Profile/ProfileCard";

export default function ProfilePage () {
    
    const user = useLoaderData();

    return <div className="mb-[50px]">
        <h1 className="text-4xl font-semibold mb-4">Profile</h1>
        <ProfileCard user={user} />
    </div>
}