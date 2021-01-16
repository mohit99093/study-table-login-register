import React, { useState } from "react";
import "./Contact.scss";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export default function Contact() {
  //contact
  const schema = { name: "", email: "", contact: "", city: "", school: "" };
  const [contact, setContact] = useState(schema);
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  //input next
  const [inp, setInp] = useState([{ name: "name", val: "name" }]);
  const handle = () => {
    if (inp.length === 1) {
      setInp([...inp, { name: "email", val: "email" }]);
    } else if (inp.length === 2) {
      setInp([...inp, { name: "contact", val: "contact" }]);
    } else if (inp.length === 3) {
      setInp([...inp, { name: "city", val: "city" }]);
    } else if (inp.length === 4) {
      setInp([...inp, { name: "school", val: "Institute/school/coaching" }]);
    }
  };
  //response state
  const [status, setStatus] = useState({});

  //backend-frontend integration
  const postContact = (e) => {
    e.preventDefault();
    fetch("/api/info", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
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
  console.log(inp);
  return (
    <div className="contacts">
      <a className="logo" href="/">
        {" "}
        STUDY<span>table </span>{" "}
      </a>
      <h1>Contact Us</h1>
      <div className="form">
        <form onSubmit={postContact}>
          {inp.map((item) => {
            return (
              <div className="input" key={item.name}>
                <h6>
                  <TextField
                    id="outlined-basic"
                    name={item.name}
                    label={item.val}
                    required
                    onChange={handleChange}
                  />{" "}
                </h6>
              </div>
            );
          })}
          {inp.length < 5 ? (
            <div className="next">
              {" "}
              <Button className="btn13" onClick={handle}>
                {" "}
                Next{" "}
              </Button>{" "}
            </div>
          ) : (
            <div className="subm">
              {" "}
              <Button className="btn13" type="submit">
                {" "}
                Submit{" "}
              </Button>{" "}
            </div>
          )}
        </form>
        <div className="status">
          <p className={status.status === 201 ? "green" : "red"}> {msg} </p>
        </div>
      </div>
    </div>
  );
}
