import { ThemeCtx } from "../Contexts/ThemeContext"
import { useContext } from "react"

function CopyrightSection () {
    return <div className="footer-section copyright">
        <p>© 2024 TheLightCRM. All Rights Reserved.</p>
    </div>
}

export default function Footer () {

    const { theme } = useContext(ThemeCtx);

    return <footer className={`w-full text-center py-2 ${theme === 'light' ? 'bg-stone-100' : 'bg-stone-900'}`}>
        <CopyrightSection />
    </footer>
}