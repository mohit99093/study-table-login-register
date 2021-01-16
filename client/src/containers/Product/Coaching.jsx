import React from 'react'
import Navbar from '../../components/Coaching/Navbar/Nav'
import Front from '../../components/Coaching/Front/Front'
import Footer from '../../components/Coaching/Footer/Footer'

export default function Product() {
    return (
        <React.Fragment>
           <Navbar/>
           <section>
              <Front/>
              <Footer/>
           </section>
        </React.Fragment>
    )
}
