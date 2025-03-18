import axios from 'axios';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import '../CSS/Login.css';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [msgType, setMsgType] = useState('success'); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get('http://localhost:8080/get-all')
      .then((response) => {
        const users = response.data;
        const user = users.find((user) => user.email === email && user.password === password);

        console.log(response.data);

        if (user) {
          setMsg(`Hello, ${user.fullname || 'User'}!`);
          setMsgType('success'); 
          setTimeout(() => navigate('/'), 2000);
        } else if (email === "kunalpawar@11" && password === "123456") {
          setMsg(`Hello, Admin!`);
          setMsgType('success'); 
          setTimeout(() => navigate('/Admin'), 2000); 
        } else {
          setMsg('Invalid email or password! Please try again.');
          setMsgType('error'); 
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setMsg('An error occurred while fetching data.');
        setMsgType('error'); 
      });
  };

  return (
    <div>
      <Header />
      <div className="login">
        <h1>Login Details</h1>
        
        {msg && <Alert severity={msgType} style={{ marginBottom: '10px' }}>{msg}</Alert>}
        
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email" variant="standard" sx={{width:'100%' ,margin:'2px'}}
            required
          /> <br />
          <TextField
            type="password"
             label="Password" variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{width:'100%', margin:'2px'}}
            required
          /> <br />
          <Button type="submit" variant="contained" color="primary" sx={{margin:'6px'}}>
            Submit
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
