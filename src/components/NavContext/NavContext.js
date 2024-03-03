'use client'

import React from 'react'

export const NavContext = React.createContext()

const NavProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = React.useState(null)

    // this is to detect change of url when using the back/forward buttons
    const updatePath = () => {
        setCurrentPath(window.location.pathname)
    }

    React.useEffect(() => {
        setCurrentPath(window.location.pathname)
    }
    , [])

    React.useEffect(() => {
        window.addEventListener('popstate', updatePath)
        return () => {
            window.removeEventListener('popstate', updatePath)
        }
    }
    , [])

    return (
        <NavContext.Provider value={{ currentPath, setCurrentPath }}>
            {children}
        </NavContext.Provider>
    )
}

export default NavProvider