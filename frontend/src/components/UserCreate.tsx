import React, { useState } from "react";
import axios from "axios";
import { IUser } from "../models/IUser";
import {
  Container, TextField, Button,
  Typography, Grid, Snackbar, Alert
} from "@mui/material";

export default function UserCreate() {
  const [user, setUser] = useState<IUser>({
    FirstName: "",
    LastName: "",
    Email: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/users", user);
      setSuccess(true);
      setUser({ FirstName: "", LastName: "", Email: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom mt={2}>Add User</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="First Name"
            name="FirstName"
            fullWidth
            value={user.FirstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Last Name"
            name="LastName"
            fullWidth
            value={user.LastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Email"
            name="Email"
            fullWidth
            value={user.Email}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>
        Save
      </Button>

      <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)}>
        <Alert onClose={() => setSuccess(false)} severity="success">
          User added successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}
