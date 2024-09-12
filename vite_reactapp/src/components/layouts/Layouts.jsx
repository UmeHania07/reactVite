import Footer from "./Footer"
import Header from "./Header"
import React from 'react'

function Layouts({ children }) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
            

        </>
    )
}

export default Layouts
