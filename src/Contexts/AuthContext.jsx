import { useReducer, createContext } from "react";

export const AuthCtx = createContext({
    account: {
        isLoggedIn: Boolean,
        email: String,
    }
})

function accountReducer (state, action) {
    if (action.type === 'SUCCESSFUL_LOGIN') {
        return { ...state, account: { ...state.account, isLoggedIn: true } }
    }
    if (action.type === 'LOGGOUT') {
        return { ...state, account: { ...state.account, isLoggedIn: false } }
    }
}

export default function AuthContext ({ children }) {

    const [ loggedAccount, loggedAccountDispatch] = useReducer(accountReducer, {
        account: {
            isLoggedIn: false,
            email: 'vageliskosmiadis@gmail.com'
        }
    })

    return <AuthCtx.Provider value={{loggedAccount, loggedAccountDispatch}}>
        {children}
    </AuthCtx.Provider>
}