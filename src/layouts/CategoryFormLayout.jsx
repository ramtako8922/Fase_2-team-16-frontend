import React from 'react'

function CategoryFormLayout({children, title, description}) {
    return (
        <>
            <main className='h-90 flex items-center justify-center overflow-x-scroll'>
                {children}

            </main>

        </>
    )
}

export default CategoryFormLayout
