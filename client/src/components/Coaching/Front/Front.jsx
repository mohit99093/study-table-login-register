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
                <h1>WE GIVE THE<br/> <span style={{color:'#2baba7'}} > WINGS</span> YOU NEED.</h1>
                <div className="sub1" style={{fontSize:'13px'}}  >
                Just like you  ADD an EXTRA WING to students,we give the WINGS  you need.<br/>
                Coachings got their own  place which is highly ir-replacable.<br/>
                They groom students to the highest level of Competitive edge.<br/>
                Neet or Jee Or Excelling Boards coachings do play an important rule .<br/>
                You are the one to help students at each step.
                </div>
                <div className="sub1" style={{fontSize:'13px'}}  >
                Tracking the study of every student and listening their requirement has it’s own challenge.<br/>
                Helping on every topic and every concept is what a coaching should aim and tries to do.
                Doing this is not easy.<br/>             
                </div>
                <div className="sub1" style={{fontSize:'13px'}}  >
                   Students do feel scare and shame in coming out of their shell and ask all they want to ask.<br/>  
                   Would you like to address the problems of your every student ?
                   Would you like to reach out to wide range of students ?
                   Would you like to expand your coaching and add another centre ?
                   Would you like to digitalize your curriculla ?
                   Would you like to have a better level of study material ?
                </div>
                <div className="sub1" style={{fontSize:'13px'}}  >
                We are not a company who will build app or website for you.<br/>
                We bring teacher and student together and make each other understand better to learn and teach better.<br/>
                We will move you from  mass training educational process to address and bring individuality to your educational process. 
                </div>
                <div className="sub1" style={{fontSize:'13px'}}  >
                Currently We are only collaborating with Coachings/institutes from DELHI, Gurugram, Patna and Noida.<br/>
                To know more, Fill the contact Us form and our team will contact you shortly.
                </div>
            </div>
            <a className="down" onClick={handle} href> </a>
        </div>
    )
}
