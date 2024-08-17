import { StrictMode } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { createRoot } from 'react-dom/client'
import ThemeContext from './Contexts/ThemeContext';
import AuthContext from './Contexts/AuthContext';

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContext>
      <AuthContext>
        <NextUIProvider>  
            <App />
        </NextUIProvider>
      </AuthContext>
    </ThemeContext>
  </StrictMode>,
)
