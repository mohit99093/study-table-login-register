import React from 'react'
import './Front.scss'
// import {Button} from '@material-ui/core'

export default function Front() {
    function handle() {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
      }
    return (
        <div className="front" >
            <div className="contain" >
                <h1>IT'S TIME TO <br/> <span style={{color:'#2baba7'}} >LEVEL</span> UP.</h1>
                <div className="sub1" >
                   Schools are the place where future gets build.<br/>
                   Primary and secondary education years of a student is, alone, deciding factor  of their character and career.
                   These are the years when problem solving and logical thinking is at highest peak  <br/>
                   School is just not about passing the grade but building collaboration,  boosting creativity and pumping up the curiosity.  
                   </div>
                <div className="sub1" >
                Managing and filling the gap between students, teachers and school is a hard .
                Addressing need of students with a diversity of age, mind temparament and demand has it’s own diverse set of challenge. </div>
                <div className="sub1" >
                We are not a company who will build app or website for you. <br/>
                We bring teacher and student together and make each other understand better to learn and teach better.<br/>
                We will move you from  mass training educational process to address and bring individuality to your educational process.<br/>
                We will transform they you have been doing education.<br/>
                We will help you transform digitally.
                </div>
                <div className="sub1" >
                Currently We are only collaborating with schools from DELHI, Gurugram, Patna and Noida. <br/>
                Fill the contact Us form and our team will contact you shortly.
                </div>
            </div>
            <a className="down" onClick={handle} href > </a>
        </div>
    )
}
