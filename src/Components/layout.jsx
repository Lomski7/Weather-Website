import React from "react";
import './layout.css'

const Layout = ({children}) => {
    return (
        <div className="background-container">
            {children}
        </div>
    )
}

export default Layout;