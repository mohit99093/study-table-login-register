import React  from 'react'
import Navbar from '../../components/Student/Navbar/Nav'
import Front from '../../components/Student/Front/Front'
import Footer from '../../components/Student/Footer/Footer'

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
