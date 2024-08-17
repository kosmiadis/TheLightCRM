import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { useState, useContext } from 'react';
import { ThemeCtx } from '../Contexts/ThemeContext';

const MENU_ITEMS = [
    {text: 'Home', to: '/'},
    {text: 'Profile', to: '/profile'},
    {text: 'Customers', to: '/customers'},
    {text: 'Agreements', to: '/agreements'},
]

function NavbarLink ({to, shouldIndicateActive=true, children, ...props}) {
    return <NavLink to={to} className={({isActive}) => {
        let cssClasses = 'text-xl pb-[4px] hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500'
        if (isActive && shouldIndicateActive) {
            cssClasses += ' text-blue-700 border-b-medium border-blue-500'
        }
        return cssClasses
    }} {...props} end>
        {children}
    </NavLink>
}

function NavbarItems ({belongsToNavbarMenu=false}) {
    if (belongsToNavbarMenu) {
        return <>
        {MENU_ITEMS.map(item => (
            <NavbarMenuItem key={item.text}>
                <NavbarLink to={item.to}>
                    {item.text}
                </NavbarLink>
            </NavbarMenuItem> 
        ))}
      </>
    }
    return <>
        {MENU_ITEMS.map(item => (
            <NavbarItem key={item.text}>
                <NavbarLink to={item.to}>
                    {item.text}
                </NavbarLink>
            </NavbarItem> 
        ))}
    </>
}

export default function RootNavigation () {
    const { theme, toggleTheme } = useContext(ThemeCtx);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleThemeToggle () {
        toggleTheme();
    }

    return <Navbar onMenuOpenChange={setIsMenuOpen} className="py-4">
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
        <NavbarLink to={MENU_ITEMS[0].to} shouldIndicateActive={false} className='font-bold text-2xl hover:text-blue-700'>TheLightCRM</NavbarLink>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItems />
    </NavbarContent>

    <NavbarContent justify="end">
        <Button onClick={handleThemeToggle} size='md' color='primary' variant="ghost" className="font-bold">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</Button>
    </NavbarContent>
    
    <NavbarMenu className={`pt-12 gap-4 ${theme === 'dark' ? 'bg-stone-950 text-white' : 'bg-white text-stone-800'}`}>
      <NavbarItems belongsToNavbarMenu/>
    </NavbarMenu>
  </Navbar>
}