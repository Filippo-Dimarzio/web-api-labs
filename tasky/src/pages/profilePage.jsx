import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { useNavigate } from "react-router";
import { Container, Typography, Button } from "@mui/material";

const ProfilePage = () => {
    const context = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <Container sx={{ textAlign: 'center' }}>
            {context.isAuthenticated ? (
                <Typography variant="h6">
                    User profile: {context.userName}
                </Typography>
            ) : (
                <>
                    <Typography variant="h6">
                        You must log in to see your profile!
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{mt:2}}
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </Button>
                </>
            )}
        </Container>
    );
};

export default ProfilePage;
