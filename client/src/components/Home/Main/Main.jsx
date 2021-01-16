import React from 'react'
import './Main.scss'
import DehazeIcon from '@material-ui/icons/Dehaze';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../../../store/actions/auth';

export default function Main() {

   const [state, setState] = React.useState({
      right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
    const dispatch = useDispatch()

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
             <a style={{color:'black', textDecoration:'none' }}  href="/student" >Students</a>
          </ListItem>
          <Divider/>
          <ListItem style={{padding:'20px',fontWeight:'bold'}} >
             <a style={{color:'black', textDecoration:'none' }} href="/teacher" >Teacher</a>
          </ListItem>
          <Divider/>
          <ListItem style={{padding:'20px',fontWeight:'bold'}} >
             <a style={{color:'black', textDecoration:'none' }} href="/coaching" >Coaching</a>
          </ListItem>
          <Divider/>
          <ListItem style={{padding:'20px',fontWeight:'bold'}} >
            <a style={{color:'black', textDecoration:'none' }} href="/school" >School</a>
         </ListItem>
         <Divider/>
         <ListItem style={{padding:'20px',fontWeight:'bold'}} >
           <a style={{color:'black', textDecoration:'none' }} href="/contact" >Contact Us</a>
        </ListItem>
         <Divider/>
        </List>
      </div>
    );

    const user = useSelector(state=>state.userName)
    const handle = ()=>{
       logout(dispatch);
    }
    return (
        <section className="main" >
            <div className="navbar" >                            
               <div className="menu" >
                   <div className="list" >
                      <a href="/student">Student</a>
                   </div>
                   <div className="list" >
                      <a href="/teacher">Teacher</a>
                   </div>
                   <div className="list" >
                      <a href="/school">School</a>
                   </div>
                   <div className="list" >
                      <a href="/coaching">Coaching</a>
                   </div>
                   <div className="list" >
                      <a href="/contact">Contact Us</a>
                   </div>
                   <div className="list" >
                      <a href="/">Blogs</a>
                   </div>
                   {user?<div className="list" >
                      <a href="/profile"> {user}</a>
                      <button onClick={handle} >Logout</button>
                   </div>:<a href="/SignIn" className="btns" >
                       Login
                   </a>}
               </div>
                 
        <React.Fragment key="right">
        <div className="ic" onClick={toggleDrawer("right", true)} > <DehazeIcon/> </div> 
        <Drawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)}>
          {list("right")}
        </Drawer>
      </React.Fragment>
            </div>
            <div className="heads">
                <div className="reward">
                   STUDY<span>table</span>
                </div>
                <div className="sub" >
                    Care a smile
                </div>
            </div>
            <div className="dwnld" >
                   Download Studytable
            </div>
        </section>
    )
}
