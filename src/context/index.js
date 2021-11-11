import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = props => {
    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState({});
    const [followers, setFollowers] = useState({});
    const [followings, setFollowing] = useState({});

    return (
        <context.Provider value={{
            userData,
            repos,
            followers,
            followings,
            setUserData,
            setRepos,
            setFollowers,
            setFollowing
        }}>
            {props.children}
        </context.Provider>
    )
}