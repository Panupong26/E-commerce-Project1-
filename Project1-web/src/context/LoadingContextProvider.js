import { createContext, useState } from "react";


export const loadingContext = createContext();

export default function LoadingContextProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    
    return <loadingContext.Provider value={{isLoading, setIsLoading}}>{children}</loadingContext.Provider>
}