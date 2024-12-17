import { createContext, useState, useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase.config";



const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        // Liten to authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // Storse user in localStorage
            localStorage.setItem('user', JSON.stringify(user));
            const activeUser = JSON.parse(localStorage.getItem("user"))
            setUser(activeUser);
    
          } else {
            // Clear localStorage if no user is signed in
            localStorage.removeItem('user');
            setUser({});
          }
        });
    
        return unsubscribe; // Clean up on unmount
      }, []);



        const data = {
            user,
            setUser
        }
    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    )
}


export default AppContext