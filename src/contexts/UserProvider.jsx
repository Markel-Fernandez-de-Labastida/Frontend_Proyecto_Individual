import React, { useEffect, useRef, useState } from 'react'
import { UserContext } from './UserContext'
import { useJwt } from "react-jwt";

export const UserProvider = ({ children }) => {

    // Nota para mi yo del futuro: Chatgpt me recomendo 'jose' para el payload. Puta mierda, no da más que poblemas
    let token;
    let newUser;

    /*     useEffect(() => {
            if (decodedToken) {
                newUser = {
                    id: decodedToken.id || '',
                    role: decodedToken.role || ''
                }
            }
        }, [decodedToken]) */

    //console.log("token userProvider: ", token)
    //const privateKey = import.meta.env.JWT_SECRET;
    //console.log("UserProvider paiload: ", decodedToken);

    token = localStorage.getItem('token');

    const [user, setUser] = useState({});
    const [isRegister, setRegister] = useState(false);
    const [ahora, setAhora] = useState(false);
    const { decodedToken, isExpired } = useJwt(token);

    let firstUpdate2 = useRef(false);
    useEffect(() => {
        if (firstUpdate2.current) {
            token = localStorage.getItem('token');
            console.log("uuuuuuu")
        }
        firstUpdate2.current = true;
    }, [ahora])

    let firstUpdate = useRef(false);
    useEffect(() => {
        if (firstUpdate.current) {
            console.log("bhbhjbhj")
            if (decodedToken !== null) {
                console.log("UserProvider paiload: ", decodedToken);
                newUser = {
                    id: decodedToken.id,
                    role: decodedToken.role
                }
                console.log("NuevoUsuario: ", newUser)
                setUser(newUser);
            }
        }
        firstUpdate.current = true;
    }, [decodedToken])




    const logoutContext = () => {
        setRegister(false)
        setUser({})
    }
    const loginContext = () => { setRegister(true) }

    /*     const checkUserisRegistered = () => {
            token = localStorage.getItem('token') || '';
            if (token !== '') {
                setRegister(false);
            } else {
                console.log("token: ", token);
                setRegister(true);
            }
        }
     
        const loginUser = () => {
            token = localStorage.getItem('token');
            useEffect(() => {
                if (decodedToken) {
                    console.log("decoded token: ", decodedToken);
                    if (decodedToken) {
                        newUser = {
                            id: decodedToken.id,
                            role: decodedToken.role
                        }
                    }
                }
                setUser(newUser)
     
            }, [decodedToken])
     
     
        } */
    return (
        <UserContext.Provider value={{ user, setUser, isRegister, logoutContext, loginContext }}>
            {children}
        </UserContext.Provider>
    )
}