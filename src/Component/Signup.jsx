import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../CSS/Signup.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Button, TextField, Alert } from '@mui/material';

export default function Signup() {
  const [showfullname, setfullname] = useState('');
  const [showdob, setdob] = useState('');
  const [showemail, setemail] = useState('');
  const [showmobile, setmobile] = useState('');
  const [showpass, setpass] = useState('');
  const [msg, setMsg] = useState('');
  const [msgType, setMsgType] = useState('success');
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const logindata = {
      dob: showdob,
      email: showemail,
      fullname: showfullname,
      number: showmobile,
      password: showpass,
    };

    if (logindata.password.length < 10) {
      setMsg(" Password must be at least 10 characters long!");
      setMsgType("error");
      setShowAlert(true);
      return;
    }

    if (logindata.number.length !== 10) {
      setMsg("⚠️ Mobile number must be exactly 10 digits!");
      setMsgType("error");
      setShowAlert(true);
      return;
    }

    try {
      const response = await axios.get('http://localhost:8080/get-all');
      const users = response.data;
      const user = users.find((user) => user.email === logindata.email);

      if (!user) {
        await axios.post('http://localhost:8080/Login', logindata);
        setMsg(" Signup Successful! Redirecting...");
        setMsgType("success");
        setShowAlert(true);

        setTimeout(() => {
          setShowAlert(false);
          navigate('/');
        }, 2000);
      } else {
        setMsg(" Email is already registered!");
        setMsgType("error");
        setShowAlert(true);
      }
    } catch (error) {
      console.error(error);
      setMsg(" Error occurred while signing up!");
      setMsgType("error");
      setShowAlert(true);
    }
  }

  return (
    <div>
      <Header />
      <div className="signup">
        <div className="form-container">
          <h1>Sign-Up</h1>
          
          {showAlert && <Alert severity={msgType} style={{ marginBottom: '10px' }}>{msg}</Alert>}

          <form onSubmit={handleSubmit}>
            <TextField
            
              type="text"
              id="fullname"
              name="fullname"
              variant="standard"
              label="Full Name"
              value={showfullname}
              onChange={(e) => setfullname(e.target.value)}
              required
              fullWidth
            />
            <br />

            <TextField
            
              type="date"
              id="birthdate"
              name="birthdate"
              variant="standard"
              value={showdob}
              onChange={(e) => setdob(e.target.value)}
              required
              sx={{width:'100%'  }}
            />
            <br />

            <TextField
            
              type="email"
              id="email"
              name="email"
              variant="standard"
              label="Email"
              value={showemail}
              onChange={(e) => setemail(e.target.value)}
              required
              sx={{width:'100%'  }}
            />
            <br />

            <TextField
            
              type="tel"
              id="mobile"
              name="mobile"
              variant="standard"
              label="Mobile Number"
              placeholder="Enter your 10-digit mobile number"
              value={showmobile}
              onChange={(e) => setmobile(e.target.value)}
              required
              sx={{width:'100%' }}
            />
            <br />

            <TextField
            
              type="password"
              id="password"
              name="password"
              variant="standard"
              label="Password"
              placeholder="At least 10 characters"
              value={showpass}
              onChange={(e) => setpass(e.target.value)}
              required
              sx={{width:'100%' }}
            />
            <br />

            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '10px' }}>
              Submit
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
