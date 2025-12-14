import { createContext, useState } from "react";
import axios from 'axios'
import { useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        skills: [],
    });

    const getUserDetails = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/user/profile', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setUser({ ...user, ...response.data.user });
            console.log(response.data.user);
        } catch (error) {
            console.log("Error in fetching user profile!!", error)
        }
    }



    useEffect(() => {
        getUserDetails();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};