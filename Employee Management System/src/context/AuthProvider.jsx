import React, {createContext, useEffect, useState} from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    // localStorage.clear()

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // BUG: setLocalStorage() ran unconditionally on every mount,
        // overwriting 'employees' with the original seed data every time —
        // wiping newly added employees and any task status changes that
        // only existed in memory.
        // setLocalStorage()

        // FIX: only seed localStorage the first time ever (when nothing is
        // stored yet). After that, keep whatever's already saved.
        const existing = localStorage.getItem('employees')
        if (!existing) {
            setLocalStorage()
        }

        const {employees, admin} = getLocalStorage()
        setUserData(employees)
    
    }, []);

    // FIX: persist userData back to localStorage whenever it changes,
    // so accepted tasks / new employees / new tasks all survive a refresh
    // instead of reverting to seed data.
    useEffect(() => {
        if (userData) {
            localStorage.setItem('employees', JSON.stringify(userData))
        }
    }, [userData]);


    // console.log(data)
    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    );
}

export default AuthProvider;