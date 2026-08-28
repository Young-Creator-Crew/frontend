import { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext(null);

function AuthProvider ({children}) {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };
