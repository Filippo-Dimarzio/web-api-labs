import { useContext } from "react";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router";
import { Container, Typography } from "@mui/material";

const StartPage = () => {
    const context = useContext(AuthContext);

    return (
        <Container sx={{ textAlign: 'center' }}>
            {context.isAuthenticated ? (
                <Typography variant="h6">
                    Welcome {context.userName}! View your <Link to="/tasks">Tasks</Link> or your <Link to="/profile">Profile</Link>.
                </Typography>
            ) : (
                <Typography variant="h6">
                    <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to create tasks!
                </Typography>
            )}
        </Container>
    );
};

export default StartPage;
