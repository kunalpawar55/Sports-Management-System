import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import '../CSS/Getpomp.css'
import Footer from './Footer';
export default function FetchImages() {
  const [showdata, setdata] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/GetAllImage')
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Header/>
      <div className='image'><h1>Get Your Sport Invitation</h1>
      <ul>
        {showdata.map((image) => (
          <li key={image.id}>
            <img src={`data:${image.type};base64,${image.contain}`} alt={image.name} />
          <button>  <a
              href={`data:${image.type};base64,${image.contain}`}
              download={image.name} 
              style={{ display: 'block', marginTop: '10px', textDecoration: 'none' }}
            >
              Download
            </a></button>
          </li>
        ))}
      </ul>
      </div>
      <Footer/>
    </div>
  );
}
