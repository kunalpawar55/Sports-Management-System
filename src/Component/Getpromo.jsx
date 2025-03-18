import React, { useEffect, useState } from "react";
import "../CSS/Getpromo.css";
import { useNavigate } from "react-router-dom";

export default function Getpromo() {
  const [showimage, setimage] = useState([]);
  let navigate=useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/GetAllImage")
      .then((res) => res.json())
      .then((data) => setimage(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  let onimage=()=>{
    navigate('/GetPomp')
  }

  return (
    <div className="getpromo">
      <h1>Download your Fav Template</h1>
      <div className="images1">
        {showimage.map((image, index) => (
          <div key={index}>
            <img src={`data:${image.type};base64,${image.contain}`} alt={image.name} onClick={onimage} />
          </div>
        ))}
      </div>
    </div>
  );
}
