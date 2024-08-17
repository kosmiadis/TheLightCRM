import { Outlet } from "react-router-dom";
import RootNavigation from "../components/RootNavigation";
import Footer from '../components/Footer';
import PageContent from '../UI/PageContent';

export default function RootLayout () {
    return <>
        <RootNavigation />
        <main className="min-h-screen">
            <PageContent>
                <Outlet />
            </PageContent>
        </main>
        <Footer />
    </>
}