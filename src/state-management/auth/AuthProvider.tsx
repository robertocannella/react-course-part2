import { ReactNode, useReducer } from 'react'
import AuthContext from './authContext'


// ************* REDUCER **************

interface LoginAction {
    type: 'LOGIN',
    username: string
}


interface LogoutAction {
    type: 'LOGOUT'
}

export type AuthAction = LoginAction | LogoutAction


const authReducer = (state: string, action: AuthAction) => {

    switch (action.type) {
        case 'LOGIN':
            return action.username;
        case 'LOGOUT':
            return '';
        default:
            return state

    }
}

// ************* END REDUCER **********

interface Props {
    children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
    const [user, dispatch] = useReducer(authReducer, '')

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
