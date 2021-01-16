import React from 'react'
import './Front.scss'
// import {Button} from '@material-ui/core'

export default function Front() {
    function handle() {
        window.scroll({
          top     : document.body.offsetHeight,
          left    : 0,
          behavior: 'smooth',
        });
      }
    return (
        <div   className             = "front" >
        <div   className             = "contain" >
        <h1>WE GOT <br/> <span style = {{color:'#2baba7'}} >EVERYTHING</span> YOU NEED.</h1>
        <div   className             = "sub1" >
                A teacher is nothing but the backbone of education system.<br/> From working extra hard for next class 
                to putting extra effort for the getting the knowledge into each student’s mind.<br/>
                Being a teacher is not just about making a livelihood but to alter lives of many.<br/>
                We understand it is hard to bring best of each student
                </div>
                <div className = "sub1" >
                It is  hard to full fill the requirement of every student.<br/>
                Constantly interacting with parents and students is hard.<br/>
                With the pressure of finding new students and digging the digital way of modern world.<br/>
                
                </div>
                <div className = "sub1" >
                Are you looking to  expand the horizons of your teaching ?<br/>
                Would you like to reach  a much broader audience. ? <br/>
                </div>
                <div className = "sub1" >
                Currently we are collaboration with teachers from DELHI, Gurugram, Noida, Greater Noida, Bengaluru and Patna.<br/>
                Fill  the contact us form and our team will reach out to you shortly.
                </div>
            </div>
            <a className = "down" onClick = {handle} href> </a>
        </div>
    )
}
