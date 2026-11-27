import { Link } from "react-router";
import { Container, Typography } from "@mui/material";

const StartPage = () => {

    return (
        <Container sx={{ textAlign: 'center' }}>
            <Typography variant="h6">
                Welcome to Tasky! View your <Link to="/tasks">Tasks</Link> or your <Link to="/profile">Profile</Link>.
            </Typography>

            <Typography variant="h6">
                <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to create tasks!
            </Typography>
        </Container>
    );
};

export default StartPage;
