import React from 'react'
import './Front.scss'
import {Button} from '@material-ui/core'

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
        <h1>WE GOT <br/> <span style = {{color:'#2baba7'}} >EMPATHY</span> FOR YOU.</h1>
        <div   className             = "sub1" >
                      We understand you.<br/>
                      A back-bencher needs extra help, so do the front bencher. It just their demands and requirements are different.
                </div>
                <div className = "sub1" >
                You might be having hard time to ask questions when others moved ahead and you still have some doubts.<br/>
                It may be your expectations are to move from 40% to 80%.<br/>
                It is also frustrating when the class stuck somewhere and you feel like last few class were completely waste of time.<br/>
                It may be you feel the difficulty level is not upto your mark and your hard work and high expectation needs extra attention.
                </div>
                <div className = "sub1" >
                We celebrate the unique challenge you got. <br/>
                We give the attention you require.<br/>
                We make a promise to you.<br/>
                We will bring the best of you.
                </div>
                <div className                            = "sub1" >
                If   you are a student of CBSE class 10th, 11th and 12th Download the App.<span> <Button className = "btn12" > Download </Button> </span><br/>
                We are working hard to bring you the best. <br/>
                Stay tuned and check back later for more products.
                </div>
            </div>
            <a className = "down" onClick = {handle} href> </a>
        </div>
    )
}
