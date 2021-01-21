import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function DefaultComponent({children, title}) {
    return(
        <>
            <Header title={title}/>
                {children}
            <Footer/>
        </>
    )
}