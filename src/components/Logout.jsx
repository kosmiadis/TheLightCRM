import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";


export default function Logout () {

    const navigate = useNavigate();

    function handleLogout () {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return <section>
        <Button className="font-bold" onClick={handleLogout} variant="ghost" color='danger'>Logout</Button>
    </section>
}