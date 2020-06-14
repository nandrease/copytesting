import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Breadcrumbs = () => {
    const router = useRouter();
    const steps = router.pathname.split('/').filter(nonEmpty => nonEmpty)

    const capitalize = (str: string) => (str.charAt(0).toUpperCase() + str.slice(1))

    const breads = steps.map((t, i) => ({
        id: i,
        title: capitalize(t),
        url: i === steps.length - 1
            ? null
            : "/" + steps.slice(0, i + 1).join('/')
    }))

    return breads.length ? (
        <div className="container breadcrumbs">
            {breads.map<React.ReactNode>(({ title, url, id }) =>
                url ? <Link key={id} href={url}><a>{title}</a></Link>
                    : <span key={id}>{title}</span>
            ).reduce((prev, curr) => [prev, ' > ', curr])}
        </div>
    ) : null
}

export default Breadcrumbs;