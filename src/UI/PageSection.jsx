import { ThemeCtx } from '../Contexts/ThemeContext';
import { useContext } from 'react';

export default function PageSection ({title, classes, children}) {

    const { theme } = useContext(ThemeCtx);

    return <section className={"p-2 w-full " + classes}>
        <h2 className={`text-xl underline font-semibold ${theme === 'light' ? 'text-stone-600' : 'text-stone-300'} mb-4`}>{title}</h2>
        {children}
    </section>
}