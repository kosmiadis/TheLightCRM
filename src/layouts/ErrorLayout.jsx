import Footer from "../components/Footer";
import RootNavigation from "../components/RootNavigation";

export default function ErrorLayout ({children}) {
    return <>
        <RootNavigation />
            <section className="h-screen">
                {children}
            </section>
        <Footer />
    </>
}