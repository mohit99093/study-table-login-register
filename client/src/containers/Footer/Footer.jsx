import React, { useState } from 'react'
import './Footer.scss'
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
// import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button } from '@material-ui/core';

export default function Footer() {
   const [email,setEmail] = useState('')
   const handleChange     = (e)=>{
      setEmail({...email,[e.target.name]:e.target.value})
  }
  const [status,setStatus] = useState({})

  const postEmail = (e)=>{
            e.preventDefault();
            fetch('/api/email',{
                method : 'POST',
                body   : JSON.stringify(email),
                headers: {
                    'Content-Type': 'application/json'
                  },
            }).then(res=>res.json()).then(res=>{
                console.log(res)
                setStatus(res)
            }).catch(err => {
                console.log(err);
            })
    }
    let msg
    if(status.status===201){
        setTimeout(()=>{
            window.location.reload()
        },2500)
        msg = status.message;
    }
    else if(status.status===401){
       const m   = status.message.split(':')
             msg = m[2];
    }
    return (
        <footer>
           <div    className = "foot" >
           <div    className = "flex" >
           <div    className = "lists" >
           <div><a href      = "/">Student</a></div>
           <div><a href      = "/">Teacher</a></div>
           <div><a href      = "/">School</a></div>
           <div><a href      = "/">Coaching</a></div>
           <div><a href      = "/">Blogs</a></div>
           <div><a href      = "/">Contact Us</a></div>
                       {/*<div className="odd" ><a href="/">Complete security. no asterisks.</a></div>
                       <p   className = "par" >CRED encrypts all data and transactions to ensure a completely secure experience for our members.</p>
                       <img src       = "https://web-assets.cred.club/_next/assets/images/home-page/security-cert.png" alt = "pic" />*/}
                   </div>
                   <div   className = "lis" >
                   <div   className = "newsletter" >
                   <div   className = "join" > Join our Newsletter </div>
                   <form  className = "inp" onSubmit     = {postEmail} >
                   <input type      = "text" placeholder = "Your Email..." name = "email" onChange = {handleChange} /><Button className = "_btns" type = "submit" >Submit</Button>
                          </form>
                          <div className = "status">
                          <p   className = {status.status===201?"green":"red"} > {msg} </p>
                          </div>                         
                      </div>
                      {/*<div><span>calculators</span><a href="/calculators/sip-calculator">SIP calculator</a><a href="/calculators/emi-calculator" >EMI calculator</a><a href="/calculators/ppf-calculator" >PPF calculator</a><a href="/calculators/home-loan-calculator">home loan calculator</a><a href="/calculators/car-loan-calculator" >car loan calculator</a></div>
                       <div><span>About Studytable</span>
                          <div className = "desc" >CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on CRED.</div>
                       </div>
                       <div><span>About Studytable</span>
                          <div className = "desc" >CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on CRED.</div>
                       </div>
                       <div><span>About Studytable</span>
                          <div className = "desc" >CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on CRED.</div>
                       </div>
                       <div><span>About Studytable</span>
                          <div className = "desc" >CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on CRED.</div>
                       </div>
                       <div><span>About Studytable</span>
                          <div className = "desc" >CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on CRED.</div>
                       </div>
                       <div><span>About Studytable</span>
                          <div className = "desc" >CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on CRED.</div>
                     </div> */  }      
                     <div className = "soc">
                       Follow us on: 
                       <span> 
                       <a             href  = "https://mobile.twitter.com/ytablestud?lang=bg" target    = "blank" ><TwitterIcon style  = {{marginRight:'1em',color:'white',fontSize:'30px'}} /></a>
                       <a             href  = "https://www.linkedin.com/company/74602154/admin/" target = "blank" ><LinkedInIcon style = {{marginRight:'1em',color:'white',fontSize:'30px'}} /> </a>
                       <MailIcon      style = {{marginRight:'1em',color:'white',fontSize:'30px'}} />
                       <InstagramIcon style = {{marginRight:'1em',color:'white',fontSize:'30px'}} />
                       </span>                        
                     </div>          
                   </div>
               </div>
               <div className = "par odd" >copyright © 2020 Studytable Pvt Ltd.</div>
           </div>
        </footer>
    )
}
