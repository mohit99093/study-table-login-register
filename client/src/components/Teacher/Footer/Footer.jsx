import React,{useState} from 'react'
import './Footer.scss'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button } from '@material-ui/core';

export default function Footer() {
    const [email,setEmail] = useState('')
   const handleChange = (e)=>{
      setEmail({...email,[e.target.name]:e.target.value})
  }
  const [status,setStatus] = useState({})

  const postEmail = (e)=>{
            e.preventDefault();
            fetch('/api/email',{
                method:'POST',
                body: JSON.stringify(email),
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
       const m = status.message.split(':')
       msg = m[2];
    }
   
    return (
        <div className="fut" >
             <div className="containers">
                 <div className="head" >
                    <a href="/contact" >Contact Us</a><span><ChevronRightIcon fontSize="inherit" /></span>
                 </div>
                 <div class="middlegap"></div>
                 <div className="contact" >
                     <div className="address" >
                         <div><a href="/">Contact Us</a></div>
                         <div><a href="/">Student</a></div>
                         <div><a href="/">Teacher</a></div>
                         <div><a href="/">School</a></div>
                         <div><a href="/">Coaching</a></div>
                         <div><a href="/">Blogs</a></div>
                         <div style={{marginTop:'2em',fontSize:'15px'}} >copyright © 2020 Studytable Pvt Ltd.</div>
                     </div>
                     <div className="new" >
                     <div className="newsletter" >
                          <div className="join" > Join our Newsletter </div>
                          <form className="inp" onSubmit={postEmail} >
                             <input type="text" placeholder="Your Email..." name="email" onChange={handleChange} /><Button className="_btns" type="submit" >Submit</Button>
                          </form>
                          <div className="status" style={{marginTop:'0.5em'}} >
                             <p className={status.status===201?"green":"red"} > {msg} </p>
                          </div>   
                      </div>
                        <div className="social">
                       Follow us on : 
                       <span> 
                       <a href="https://mobile.twitter.com/ytablestud?lang=bg" target="blank" ><TwitterIcon style={{marginRight:'1em',color:'rgb(43, 171, 167)',fontSize:'30px'}} /></a>
                       <a href="https://www.linkedin.com/company/74602154/admin/" target="blank" ><LinkedInIcon style={{marginRight:'1em',color:'rgb(43, 171, 167)',fontSize:'30px'}} /> </a>
                       <FacebookIcon style={{marginRight:'1em',color:'rgb(43, 171, 167)',fontSize:'30px'}} />
                       <YouTubeIcon style={{marginRight:'1em',color:'rgb(43, 171, 167)',fontSize:'30px'}} />
                       <InstagramIcon style={{marginRight:'1em',color:'rgb(43, 171, 167)',fontSize:'30px'}} />
                       </span>                        
                       </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}
