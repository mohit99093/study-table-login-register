import React,{useEffect, useState} from 'react'
import './Nav.scss'
import DehazeIcon from '@material-ui/icons/Dehaze';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

export default function Nav() {
    const [classes,setClasses] = useState('')
    const listenScrollEvent = e => {
        if (window.scrollY > (window.screen.height*0.8)) {
          setClasses("bgwhite")
        } else {
            setClasses("")
        }
      }   
     useEffect(()=>{
        window.addEventListener('scroll',listenScrollEvent)
     },[])  

     const [state, setState] = React.useState({
        right: false,
      });

      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <div
          className="drawer"
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <ListItem style={{padding:'20px',fontWeight:'bold',fontSize:'20px',display:'flex',justifyContent:'center'}} >
               STUDY<span style={{fontSize:'30px'}} >table</span>
            </ListItem>
            <Divider/>
            <ListItem style={{padding:'20px',fontWeight:'bold'}} >
               <a style={{color:'black', textDecoration:'none' }}  href="/" >Home</a>
            </ListItem>
            <Divider/>
            <ListItem style={{padding:'20px',fontWeight:'bold'}} >
               <a  href="/teacher" style={{color:'black', textDecoration:'none' }} >Teacher</a>
            </ListItem>
            <Divider/>
            <ListItem style={{padding:'20px',fontWeight:'bold'}} >
               <a  href="/coaching" style={{color:'black', textDecoration:'none' }} >Coaching</a>
            </ListItem>
            <Divider/>
            <ListItem style={{padding:'20px',fontWeight:'bold'}} >
              <a  href="/student" style={{color:'black', textDecoration:'none' }} >Student</a>
           </ListItem>
           <Divider/>
            <ListItem style={{padding:'20px',fontWeight:'bold'}} >
              <a  href="/school" style={{color:'black', textDecoration:'none' }} >School</a>
           </ListItem>
           <Divider/>
           <ListItem style={{padding:'20px',fontWeight:'bold'}} >
             <a  href="/contact" style={{color:'black', textDecoration:'none' }} >Contact Us</a>
          </ListItem>
           <Divider/>
          </List>
        </div>
      );
    return (
        <header className={classes+ " header_nav"} >
            <nav className="nav" >
                <div className="left" >
                   STUDY<span>table</span>
                </div>
                <div className="right" >
                   <ul>
                   <li><a href="/" >Home</a></li>
                   <li><a href="/student"  >Student</a></li>
                   <li><a href="/teacher" >Teacher</a></li>
                   <li><a href="/school">School</a></li>
                   <li><a href="/coaching" style={{color:'#2baba7'}} >Coaching</a></li>
                   <li><a href="/blog" >Blogs</a></li>
                   </ul>
                </div>
                <React.Fragment key="right">
               <div className="icon" onClick={toggleDrawer("right", true)} > <DehazeIcon/> </div> 
              <Drawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)}>
                 {list("right")}
              </Drawer>
      </React.Fragment>
            </nav>
        </header>
    )
}
