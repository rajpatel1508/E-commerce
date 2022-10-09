import React from 'react'
import Header from '../header'

export default function Layout(props) {
    return (
        <>
            <Header />
            
            {props.children}
            
        </>
    )
}
