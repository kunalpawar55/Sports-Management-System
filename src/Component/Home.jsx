import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../CSS/Home.css';
import Getpromo from './Getpromo';
import NewsAPi from './NewsAPi';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Button, Grid, Card, CardContent, CardActions } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Home() {
  const [matchData, setMatchData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then((response) => response.json())
      .then((finalData) => {
        setMatchData(finalData);
        setFilteredData(finalData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleWhatsAppClick = (contactNumber) => {
    const message = "Hello! I am interested in this tournament.";
    const whatsappURL = `https://wa.me/91${contactNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const handelPrize = () => {
    setFilteredData(matchData.filter((item) => item.first_Prize > 50000));
  };

  const handelAllData = () => {
    setFilteredData(matchData);
  };

  const tomorrow = () => {
    const today = new Date();
    const tomorrowDate = new Date(today);
    tomorrowDate.setDate(today.getDate() + 1);
    const tomorrowString = tomorrowDate.toISOString().split('T')[0];

    setFilteredData(matchData.filter((item) => item.date === tomorrowString));
  };

  const filterBySport = (sport) => {
    setFilteredData(matchData.filter((item) => item.sport_Name === sport));
  };

  return (
    <div>
      <Header />

      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2, mb: 3 }}>
        <Grid item><Button sx={{color:'white' ,backgroundColor:'black'}} variant="contained" onClick={handelAllData}>All Match</Button></Grid>
        <Grid item><Button sx={{color:'white' ,backgroundColor:'black'}} variant="contained" onClick={handelPrize}>High Prize</Button></Grid>
        <Grid item><Button sx={{color:'white' ,backgroundColor:'black'}} variant="contained" onClick={tomorrow}>Tomorrow</Button></Grid>
        <Grid item><Button sx={{color:'white' ,backgroundColor:'black'}} variant="contained" onClick={() => filterBySport('CRICKET')}>Cricket</Button></Grid>
        <Grid item><Button sx={{color:'white' ,backgroundColor:'black'}} variant="contained" onClick={() => filterBySport('FOOTBALL')}>Football</Button></Grid>
        <Grid item><Button sx={{color:'white' ,backgroundColor:'black'}} variant="contained" onClick={() => filterBySport('KABADDI')}>Kabaddi</Button></Grid>
        <Grid item><Button sx={{color:'white' ,backgroundColor:'black'}} variant="contained" onClick={() => filterBySport('BASKETBALL')}>Basketball</Button></Grid>
      </Grid>

      <div className="home-container">
        <Typography variant="h4" align="center" gutterBottom>Upcoming Matches</Typography>
        
        <Grid container spacing={3} justifyContent="center">
          {filteredData.length>0 ?( filteredData.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ minWidth: 275, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h5" color="primary">{item.sport_Name}</Typography>
                  <Typography>Date: {item.date || 'TBD'}</Typography>
                  <Typography>First Prize: ₹{item.first_Prize}</Typography>
                  <Typography>Second Prize: ₹{item.second_prize}</Typography>
                  <Typography>Third Prize: ₹{item.third_prize}</Typography>
                  <Typography>Contact: {item.contact_number}</Typography>
                  <Typography>Reporting Time: {item.reportin_Time || 'TBD'}</Typography>
                  <Typography sx={{ color: 'red' }}>Highest Age: {item.age} Years</Typography>
                  <Typography sx={{ color: 'red' }}>Highest Weight: {item.weight} Kg</Typography>
                  <Typography>Address: {item.adress}</Typography>

                  <Accordion sx={{ mt: 1 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6">Terms & Conditions</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{item.description}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>

                {/* WhatsApp Contact Button */}
                <CardActions>
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<WhatsAppIcon />}
                    fullWidth
                    onClick={() => handleWhatsAppClick(item.contact_number)}
                  >
                    Contact via WhatsApp
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))):(
            <>
            {[1, 2, 3, 4].map((_, index) => (
                <Stack key={index} spacing={2} sx={{ margin: '15px' }}>
                  <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                  <Skeleton variant="circular" width={60} height={60} />
                  <Skeleton variant="rectangular" width={310} height={60} />
                  <Skeleton variant="rounded" width={310} height={60} />
                </Stack>
              ))}
    </>
          )}
        </Grid>
      </div>

      <Getpromo />
      <NewsAPi />
      <Footer />
    </div>
  );
}
