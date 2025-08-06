import React, { useEffect, useState } from "react";
import { IUser } from "../models/IUser";
import axios from "axios";
import {
  Container, Typography, Table, TableHead,
  TableRow, TableCell, TableBody, Paper
} from "@mui/material";

export default function Users() {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    const res = await axios.get<IUser[]>("http://localhost:8080/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom mt={2}>Users</Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.ID}>
                <TableCell>{user.ID}</TableCell>
                <TableCell>{user.FirstName}</TableCell>
                <TableCell>{user.LastName}</TableCell>
                <TableCell>{user.Email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}
