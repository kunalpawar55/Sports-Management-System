import React, { useState } from 'react';
import '../CSS/AddImage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddPomplate() {
  const [file, setFile] = useState(null);
  const [showspName,setspname]=useState();
  let navi=useNavigate()
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert('Please select a file to upload.');

    try {
      const formData = new FormData();
      formData.append('Doc', file);
      formData.append( 'sportname',showspName);
    

      const { data } = await axios.post('http://localhost:8080/UploadImage', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('File uploaded successfully:', data);
      alert('File uploaded successfully:')
    navi("/")
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="addimage">
      <h1>Postdata</h1>
      <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
    </div>
  );
}