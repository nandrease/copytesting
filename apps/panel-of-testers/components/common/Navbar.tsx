import React from 'react'
import Link from 'next/link'

import { ReactComponent as NxLogo } from '../../assets/nx-logo-white.svg';
import { ReactComponent as Person } from '../../assets/person-24px.svg'
import { ReactComponent as Email } from '../../assets/email-24px.svg'

const Navbar = () => (
    <div className="container">
        <nav className="navbar navbar-expand justify-content-between">
            <Link href="/">
                <a className="navbar-brand">
                    <NxLogo alt="" width="75" height="50" />
                </a>
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href="/dashboard/account/your-data">
                        <a className="nav-link d-flex flex-column align-items-center mx-2"><Email /> Notifications</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/dashboard/account">
                        <a className="nav-link d-flex flex-column align-items-center mx-2"><Person /> Account</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
)

export default Navbar