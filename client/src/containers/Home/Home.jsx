import React from 'react'
import About from '../../components/Home/About/About'
import Main from '../../components/Home/Main/Main'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
        <div style={{backgroundImage:'url("https://web-assets.cred.club/_next/assets/images/home-page/hero-bg.png")'}} >
            <Main/>
            <About/>
            <Footer/>
        </div>
    )
}
