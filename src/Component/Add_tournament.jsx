import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import AddPomplate from "./AddPomplate";
import { TextField, MenuItem, Button, Box, Typography } from "@mui/material";
import {SportsKabaddiSharp} from '@mui/icons-material';

export default function AddTournament() {
    const [sportName, setSportName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [ampm, setAmpm] = useState("");
    const [prizes, setPrizes] = useState({ first: "", second: "", third: "" });
    const [contact, setContact] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("NA");
    const [address, setAddress] = useState("");
    const [entryFee, setEntryFee] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        const tournamentData = {
            sport_Name: sportName,
            date,
            reportin_Time: time + ampm,
            first_Prize: prizes.first,
            second_prize: prizes.second,
            third_prize: prizes.third,
            contact_number: contact,
            address,
            age,
            weight,
            description,
            entryFees: entryFee,
        };

        try {
            if (contact.length === 10 && time <= 12) {
                await axios.post("http://localhost:8080", tournamentData);
                alert("Tournament added successfully!");
                navigate("/");
            } else {
                alert("Enter valid values");
            }
        } catch (error) {
            console.error("Error adding tournament:", error);
            alert("Failed to add tournament. Please try again.");
        }
    }

    return (
        <div>
            <Header />
            <Box className="add_tour" sx={{ maxWidth: 400, mx: "auto", my: 4 ,border:'1px solid black',padding:2 ,borderRadius:'10px'}}>
                <Typography variant="h5" color="primary" textAlign="center" gutterBottom>
                  <SportsKabaddiSharp/>  Add Tournament
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        select
                        label="Sport"
                        value={sportName}
                        onChange={(e) => setSportName(e.target.value)}
                        fullWidth
                        required
                        size="small"
                        margin="dense"
                    >
                        {["Kabaddi", "Kho-Kho", "Wrestling", "Football", "Cricket", "Volleyball", "Badminton"].map(
                            (sport) => (
                                <MenuItem key={sport} value={sport}>
                                    {sport}
                                </MenuItem>
                            )
                        )}
                    </TextField>

                    <TextField
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        fullWidth
                        size="small"
                        margin="dense"
                        required

                    />

                    <Box display="flex" gap={1}>
                        <TextField
                            type="number"
                            label="Time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                            size="small"
                            sx={{ flex: 1 }}
                        />
                        <TextField
                            select
                            label="AM/PM"
                            value={ampm}
                            onChange={(e) => setAmpm(e.target.value)}
                            required
                            size="small"
                            sx={{ flex: 1 }}
                        >
                            <MenuItem value="AM">AM</MenuItem>
                            <MenuItem value="PM">PM</MenuItem>
                        </TextField>
                    </Box>

                    <Box display="flex" gap={1}>
                        <TextField
                            type="number"
                            label="1st Prize"
                            value={prizes.first}
                            onChange={(e) => setPrizes({ ...prizes, first: e.target.value })}
                            required
                            size="small"
                            sx={{ flex: 1 }}
                        />
                        <TextField
                            type="number"
                            label="2nd Prize"
                            value={prizes.second}
                            onChange={(e) => setPrizes({ ...prizes, second: e.target.value })}
                            required
                            size="small"
                            sx={{ flex: 1 }}
                        />
                        <TextField
                            type="number"
                            label="3rd Prize"
                            value={prizes.third}
                            onChange={(e) => setPrizes({ ...prizes, third: e.target.value })}
                            required
                            size="small"
                            sx={{ flex: 1 }}
                        />
                    </Box>

                    <TextField
                        type="number"
                        label="Contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        fullWidth
                        required
                        size="small"
                        margin="dense"
                    />

                    <TextField
                        label="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        fullWidth
                        required
                        size="small"
                        margin="dense"
                    />

                    <Box display="flex" gap={1}>
                        <TextField
                            type="number"
                            label="Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}

                            size="small"
                            sx={{ flex: 1 }}
                        />
                        <TextField
                            type="number"
                            label="Weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            size="small"
                            sx={{ flex: 1 }}
                        />
                    </Box>

                    <TextField
                        type="number"
                        label="Entry Fee"
                        value={entryFee}
                        onChange={(e) => setEntryFee(e.target.value)}
                        fullWidth
                        required
                        size="small"
                        margin="dense"
                    />

                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        required
                        size="small"
                        margin="dense"
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
            <AddPomplate />
            <Footer />
        </div>
    );
}
