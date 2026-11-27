import { useContext, useState } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../contexts/authContext";
import { Container, Typography, TextField, Button, Stack, Alert } from "@mui/material";

const SignUpPage = () => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const register = async () => {
    setErrorMessage("");

    let passwordRegEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (!validPassword) {
      setErrorMessage("Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number and a symbol.");
      return;
    }
    if (password !== passwordAgain) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      let result = await context.register(userName, password);
      if (result.success) {
        setRegistered(true);
      } else {
        setErrorMessage(result.msg);
      }
    } catch {
      setErrorMessage("Unable to reach the server. Please try again.");
    }
  };

  if (registered === true) {
    return <Navigate to="/login" />;
  }

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

        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

        <TextField
          label="User name"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />

        <TextField
          label="Password again"
          type="password"
          value={passwordAgain}
          onChange={e => {
            setPasswordAgain(e.target.value);
          }}
        />

        <Button variant="contained" onClick={register}>
          Register
        </Button>
      </Stack>
    </Container>
  );
};

export default SignUpPage;
