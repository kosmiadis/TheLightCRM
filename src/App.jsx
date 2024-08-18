import { createBrowserRouter, redirect, RouterProvider, json } from "react-router-dom"
import ErrorPage from './pages/ErrorPage';
import RootLayout from './layouts/RootLayout';
import HomePage, { homePageLoader } from "./pages/HomePage";
import ProfilePage from './pages/ProfilePage';
import CustomersPage from './pages/CustomersPage';
import AgreementsPage from './pages/AgreementsPage';
import { useContext } from "react";
import { ThemeCtx } from "./Contexts/ThemeContext";
import LoginPage, { loginAction } from "./pages/LoginPage";
import SignUpPage, { signUpAction } from "./pages/SignUpPage";


//COOKIES
import { CookiesProvider } from 'react-cookie'
import { get_Cookie, remove_Cookie, auth_token_identifier } from "./util/cookies";

export default function App() {
  const { theme } = useContext(ThemeCtx)

  const router = createBrowserRouter([
    {path: '/', element: <RootLayout />, children: [
      {index: true, element: <HomePage />, loader: homePageLoader},
      {path: 'profile', element: <ProfilePage />, loader: authLoader},
      {path: 'customers', element: <CustomersPage />, loader: authLoader},
      {path: 'agreements', element: <AgreementsPage />, loader: authLoader},
      {path: 'login', element: <LoginPage />, action: loginAction},
      {path: 'signup', element: <SignUpPage />, action: signUpAction},
    ],
    errorElement: <ErrorPage />
  }
  ])
  return (
    <main className={`${theme} text-foreground bg-background min-h-screen`}>
      <CookiesProvider>
        <RouterProvider router={router}></RouterProvider>
      </CookiesProvider>
    </main>
  )
}


async function authLoader() {
  const token = get_Cookie(auth_token_identifier);

  if (token) {
    const response = await fetch('https://dummyjson.com/user/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token} `, 
      }, 
    });

    if (!response.ok) {
      remove_Cookie(auth_token_identifier); //remove the cookie if something went wrong
      return redirect('/login');
    }

    const user = await response.json();
    if (user) {
      return json({...user}, {status: 200});
    }
    else {
      remove_Cookie(auth_token_identifier); //remove the cookie if it is not verified upon server request.
      return redirect('/login');
    }
    
  }
  return redirect('/login'); // Redirect if no token is found or
}