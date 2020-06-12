import React from 'react'
import Layout from '../components/common/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';

export default ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
)