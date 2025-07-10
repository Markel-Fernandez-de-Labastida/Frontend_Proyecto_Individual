import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [isRegister, setRegister] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser, isRegister, setRegister }}>
            {children}
        </UserContext.Provider>
    )
}