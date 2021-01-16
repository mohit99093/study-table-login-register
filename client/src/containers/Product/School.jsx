import React  from 'react'
import Navbar from '../../components/School/Navbar/Nav'
import Front from '../../components/School/Front/Front'
import Footer from '../../components/School/Footer/Footer'

export default function Product() {
    return (
        <React.Fragment>
           <Navbar/>
           <section>
              <Front/>
              {/*<Sec1 title="Life at Studytable" image="https://www.indiaquotient.in/images/mantraimg.jpg" />
              <Grid/>
    <Sec1 title="Some hacks to our termsheet" image="https://www.indiaquotient.in/images/mantraimg2.jpg" />*/}
              <Footer/>
           </section>
        </React.Fragment>
    )
}
