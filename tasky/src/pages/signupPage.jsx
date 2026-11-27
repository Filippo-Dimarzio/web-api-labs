import { useState } from "react";
import { Container, Typography, TextField, Button, Stack } from "@mui/material";

const SignUpPage = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  
  return (
    <Container maxWidth="xs" sx={{ mt: 4, textAlign: "center" }}>
      <Stack spacing={2}>
        <Typography variant="h4">
          SignUp page
        </Typography>

        <Typography>
          You must register a username and password to log in.
          Usernames must be unique and passwords must contain a
          minimum of 8 characters (with at least one uppercase
          letter, one lowercase letter, one number, and one symbol).
        </Typography>

        <TextField
          label="User name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          label="Password again"
          type="password"
          value={passwordAgain}
          onChange={(e) => setPasswordAgain(e.target.value)}
        />

        <Button variant="contained">
          Register
        </Button>
      </Stack>
    </Container>
  );
};

export default SignUpPage;
