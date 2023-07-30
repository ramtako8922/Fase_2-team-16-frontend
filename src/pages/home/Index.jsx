import Home from '../../components/Home'
import React from 'react'
import Head from 'next/head'

function Index() {
  return (
    <>
        <Head>
				<title>Home</title>
				<meta
					name='description'
					content='Home'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/home.ico'
				/>
			</Head>
            <div>
                <Home/>
            </div>
      
    </>
  )
}

export default Index
