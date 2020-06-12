import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import Navbar from './Navbar'

const Layout = ({ children }) => (
    <>
        <header>
            <Navbar />
            <hr />
            <Breadcrumbs />
        </header>
        <main>
            <div className="container my-4">
                {children}
            </div>
        </main>
    </>
)

export default Layout