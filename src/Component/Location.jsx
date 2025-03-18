import React, { useEffect, useState } from "react";

export default function Location() {
  const [googleMapsUrl, setGoogleMapsUrl] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Latitude:", latitude, "Longitude:", longitude);

        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        setGoogleMapsUrl(url);
        console.log("Google Maps URL:", url);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, []);

  const handleLocationClick = () => {
    if (googleMapsUrl) {
      window.open(googleMapsUrl, "_blank");
    } else {
      alert("Location is not ready yet. Please wait!");
    }
  };

  return (
    <div>
      <p>Fetching your location... Check console or click the button below!</p>
      <button onClick={handleLocationClick}>Open Location</button>
    </div>
  );
}
