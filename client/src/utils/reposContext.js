import { createContext, useState, useEffect } from "react";
import { fetchRepositories } from "./axios";

export const   ReposContext=createContext()

export const ReposProvider=({children})=>{
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const repository = fetchRepositories()
        setRepos(repository)
      }, []);

    const value={repos}

    return(
        <ReposContext.Provider value={value}>
            {children}
        </ReposContext.Provider>
    )
}
