import { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router";
import { Container, Typography, TextField, Button, Stack, Alert } from "@mui/material";

const LoginPage = () => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const login = async () => {
        setErrorMessage("");
        try {
            const result = await context.authenticate(userName, password);
            if (!result.token) {
                setErrorMessage(result.msg);
            }
        } catch {
            setErrorMessage("Unable to reach the server. Please try again.");
        }
    };

    let location = useLocation();

    // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <Container maxWidth="xs" sx={{ mt: 4, textAlign: "center" }}>
            <Stack spacing={2}>
                <Typography variant="h4">
                    Login page
                </Typography>

                <Typography>
                    You must log in to view the protected pages
                </Typography>

                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

                <TextField
                    id="username"
                    label="User name"
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                />

                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                />

                <Button variant="contained" onClick={login}>
                    Log in
                </Button>

                <Typography>
                    Not Registered? {" "}
                    <Link to="/signup">Sign Up!</Link>
                </Typography>
            </Stack>
        </Container>
    );
};

export default LoginPage;
