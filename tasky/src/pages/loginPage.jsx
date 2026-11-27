import { Link } from "react-router";
import { Container, Typography, TextField, Button, Stack } from "@mui/material";

const LoginPage = () => {

    return (
        <Container maxWidth="xs" sx={{ mt: 4, textAlign: "center" }}>
            <Stack spacing={2}>
                <Typography variant="h4">
                    Login page
                </Typography>

                <Typography>
                    You must log in to view the protected pages
                </Typography>

                <TextField
                    id="username"
                    label="User name"
                />

                <TextField
                    id="password"
                    label="Password"
                    type="password"
                />

                <Button variant="contained">
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
