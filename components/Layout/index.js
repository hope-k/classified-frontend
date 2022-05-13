import React from 'react'
import Head from 'next/head'
const Layout = ({ children, description = 'Create Ads and Buy from Us', title = 'Welcome to HeeHee' }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
            </Head>
            {children}
        </div>
    )
}

export default Layout