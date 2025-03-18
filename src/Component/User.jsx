import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Paper, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from './Header.jsx';

export default function User() {
    const [showuser, setUser] = useState([]);
    const[showalrt,setalert]=useState('success')
    const[showmsg,setmsg]=useState('')

    useEffect(() => {
        axios.get('http://localhost:8080/get-all')
            .then((response) => {
                const usersWithId = response.data.map((user) => ({
                    id: user.id,  
                    fullname: user.fullname,
                    dob: user.dob,
                    number: user.number,
                    email: user.email,
                    password: user.password
                }));
                setUser(usersWithId);
            })
            .catch(err => console.log("API Error:", err));
    }, []);

    const handleDelete = (id, event) => {
       
        axios.delete(`http://localhost:8080/Delete-id/${id}`)
            .then(() => {
                setmsg("User Deleted Successfully");
                setUser(prevUsers => prevUsers.filter(user => user.id !== id));
            })
            .catch(err => console.log("Delete Error:", err));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'fullname', headerName: 'Full Name', width: 180 },
        { field: 'dob', headerName: 'Date of Birth', width: 150 },
        { field: 'number', headerName: 'Contact Number', width: 170 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'password', headerName: 'Password', width: 150 },
        {
            field: 'delete',
            headerName: 'Action',
            width: 120,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{ textTransform: 'none', fontSize: '13px', fontWeight: 'bold' }}
                    onClick={() => handleDelete(params.row.id)}  
                >
                    Delete
                </Button>
            )
        }
    ];

    return (
        <div style={{ textAlign: 'center', overflow: 'hidden' }}>
            <Header />
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
                User List
            </Typography>
        
        {showmsg && <Alert severity={showalrt} style={{ marginBottom: '10px' }}>{showmsg}</Alert>}

            {showuser.length > 0 ? (
                <Paper
                    sx={{
                        height: 400,
                        width: '100%',
                        overflow: 'hidden',
                        borderRadius: '12px',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        padding: '10px'
                    }}
                >
                    <DataGrid
                        rows={showuser}
                        columns={columns}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                         
                    />
                </Paper>
                
            ) : (
                <Typography variant="h6" color="textSecondary">
                    Loading...
                </Typography>
            )}
        </div>
    );
}
