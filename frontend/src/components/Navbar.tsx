import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          User Management
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Users</Button>
          <Button color="inherit" component={Link} to="/create">Add User</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
