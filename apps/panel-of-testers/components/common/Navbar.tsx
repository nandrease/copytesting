import React from 'react'
import Link from 'next/link'

import { ReactComponent as NxLogo } from '../../assets/nx-logo-white.svg';
import { ReactComponent as Person } from '../../assets/person-24px.svg'
import { ReactComponent as Email } from '../../assets/email-24px.svg'

const Navbar = () => (
    <div className="container">
        <div className="row justify-content-between align-items-center my-2">
            <div className="col-6 col-md-4">
                <NxLogo alt="" width="75" height="50" />
            </div>
            <div className="col-6 col-md-8 d-flex justify-content-end">
                <Link href="/dashboard/account/your-data">
                    <a className="d-flex flex-column align-items-center mx-2"><Email /> Notifications</a>
                </Link>
                <Link href="/dashboard/account">
                    <a className="d-flex flex-column align-items-center mx-2"><Person /> Account</a>
                </Link>
            </div>
        </div>
    </div>
)

export default Navbar