import React from 'react'
import Team from '../../components/Team'
import Head from 'next/head'
function team() {
  return (
    <>
    <Head>
				<title>Team</title>
				<meta
					name='description'
					content='Team'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/team.ico'
				/>
			</Head>
     <div>
     <Team/>
     </div>

   
   
 </>
  )
}

export default team
