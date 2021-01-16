import React, { useState } from 'react';
import {
    Select,
    InputLabel,
    TextField,
    Button,
    Fade,
    MenuItem,
  } from "@material-ui/core";
  import Autocomplete from "@material-ui/lab/Autocomplete";

import "./register.scss"

export default function Firsttry() {
        const schema = { Type: "", class: "", subjects: [], name:'',email:'',contact:'',city:'',school:'',suitable_time_for_call:'', password:'' }
        const [inp, setinp] = useState(schema);
        const [count, setcount] = useState(0);
        let errortext = ""
        let render_value = ""
        let option = ["Social science", "hindi", "English" , "Sanskrit" , "Maths" , "Science" , "Enviromenwhitetal" , "Chemistry" , "Physics" , "Biology", "History" , "Geography" , "Polititical Science" , "Economics" , "Sociology" , "Psychology" , "Business Studies" , "Sccountancy"  ];
        const handleChangetype = (e)=>{
                setinp({...inp, [e.target.name]:e.target.value})
        }
        const hendlesearch = (value) => {
            setinp({ ...inp, subjects: value });
          };
        const handle =() => {
          if(errortext==="")
              setcount(count + 1)
              
          
        };
       const handle_edit = ()=>{
                setinp(schema)
                setcount(0)
        }
        const special = ()=>{
            setcount(100)
        }

        const [status, setStatus] = useState({status:2});
         //backend-frontend integration
  const postContact =async () => {
    alert("1")
     await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(inp),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        special()
        setStatus(res);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let msg;
  if (status.status === 201) {
    setTimeout(() => {
      window.location.reload();
    }, 2500);
    msg = status.message;
  } else if (status.status === 401) {
    const m = status.message.split(":");
    msg = m[2];
  }
              console.log(msg);
        if(count===0)
        {
          render_value = <h6>  <InputLabel style={{ marginBottom: "15px" }}>Type</InputLabel>
            <Select
                value={inp.ptype}
                onChange={handleChangetype}
                name="Type"
                label="type"
            >
            <MenuItem value={"student"}>Student</MenuItem>
            <MenuItem value={"other"}>Teacher</MenuItem>
        </Select>
        </h6>
        }
        else if(count===1 && inp.Type==="student")
        {
                render_value = <h6>
                <InputLabel style={{ marginBottom: "15px" }}>Class</InputLabel>
                <Select
                  value={inp.class}
                  onChange={handleChangetype}
                  name="class"
                  label="Class"
                >
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                </Select>
              </h6>
        }
        else if(count===2 && inp.Type==="student")
        {
            render_value =  <h6>
            <Autocomplete
              multiple
              id="tags-standard"
              options={option}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              value={inp.subjects}
              onChange={(event, getOptionSelected) =>
                hendlesearch(getOptionSelected)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Slelect multiple Subject"
                  placeholder="Subjects"
                />
              )}
            />
          </h6>
        }
        else if( ( count===3 && inp.Type==="student" ) || count===1 )
        {
                render_value = <h6><TextField type="text" id="outlined-basic" value={inp.name} name="name" label="name" required onChange={handleChangetype} /> </h6>
        }
        else if( ( count===4 && inp.Type==="student" ) || count===2 )
        {
                render_value = <h6><TextField type="email" id="outlined-basic" value={inp.email} name="email" label="email" required onChange={handleChangetype} /> </h6>
        }
        else if( ( count===5 && inp.Type==="student" ) || count===3 )
        {
                render_value = <h6><TextField type="number" id="outlined-basic" value={inp.contact} name="contact" label="contact" required onChange={handleChangetype} /> </h6>
        }
        else if( ( count===6 && inp.Type==="student" ) || count===4 )
        {
                render_value =<h6> <TextField type="text" id="outlined-basic" value={inp.city} name="city" label="city" required onChange={handleChangetype} /> </h6>
        }
        else if( ( count===7 && inp.Type==="student" ) || count===5 )
        {
                render_value = <h6><TextField type="text" id="outlined-basic" value={inp.school} name="school" label="Institute / School / Collage" placeholder="Institute / School / Collage" required onChange={handleChangetype} /> </h6>
        }
        else if( ( count===8 && inp.Type==="student" ) || count===6 )
        {
                render_value = <h6><TextField type="text" id="outlined-basic" value={inp.suitable_time_for_call} name="suitable_time_for_call" label="suitable time for call" required onChange={handleChangetype} /> </h6>
        }
        else if( ( count===9 && inp.Type==="student" ) || count===7 )
        {
                render_value = <h6><TextField type="password" id="outlined-basic" value={inp.password} name="password" label="password" required onChange={handleChangetype} /> </h6>
        }
        else if(( count===10 && inp.Type==="student" ) || count===8 )
        {
            let Mainerror = false
          render_value = Object.keys(inp).map(function (key) {
        
                let e = false
                if((key==="name" && inp[key]==="") || (key==="email" && inp[key]==="") || (key==="contact" && inp[key]==="contact")|| (key==="city" && inp[key]==="")  || (key==="password" && inp[key]===""))
                 e = true 
                if(e)
                {
                    Mainerror = true
                } 
                return (
                  <h6>
                  <TextField
                  key={key}
                    margin="dense"
                    type={ (key === "password" && inp[key]!=="") ? "password" : ""}
                    value ={inp[key] }
                    error = {e}
                    label={key==="suitable_time_for_call" ? "suitable time for call" : key}
                   
                    placeholder=" "
                  />
                  </h6>
                );
              });

             if(Mainerror)
             {
               errortext="Fields required*"
             } 
        }  
        else if(( count===11 && inp.Type==="student" ) || count===9)
        {
            postContact()
        }         
        return (
            <>
                        <div className="register">
                    <a className="logo" href="/">
                         STUDY<span style={{ color: "#b9b3a2" }}>table </span>
                    </a>
                   
                    <div className="form">
                  
                        <form>
                            <div className="required-field">{errortext}</div>
                            <div className="input">
                            <Fade  in={true} timeout={{ enter: 1000}}>
                              <div> {render_value}</div>
                            </Fade>
                                
                            </div>
                            { (( count<=8 && inp.Type==="student" ) || count<=6) ?
                                      <div className="next" >
                                          <Button className="btn13" variant="contained" onClick={handle} > Next </Button>
                                      </div>: 
                            ( count===11 && inp.Type==="student" ) || (count===9 && inp.Type==="other") ?<></> :
                            <div className="subm">
                              { count<50 ?  <Button className="btn13" variant="contained" onClick={(( count===10 && inp.Type==="student" ) || count===8) ? postContact : handle} > Submit </Button> : <></>}
                             
                              { (count===10 || count===8) ?  <Button className="btn14" variant="contained" onClick={handle_edit} > Edit </Button> :<></>}
                            </div>}
                        </form>
                        <div className="status">
                             <p className={status.status === 201 ? "green" : "red"}> {msg} </p>
                         </div>
                 
                        </div>
                </div>
            </>
        )
}