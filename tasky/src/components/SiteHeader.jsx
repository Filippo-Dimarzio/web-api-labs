import { useContext } from "react";
import { useNavigate, Link } from "react-router";
import { AuthContext } from "../contexts/authContext";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";

const Header = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: "#4f4f4f", mb: '1em'}}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{ color: "inherit", textDecoration: "none", fontWeight: "bold" }}
          >
            Tasky
          </Typography>

          <Box component="nav" sx={{ display: "flex", gap: 3 }}>
            {context.isAuthenticated ? (
              <>
                <Button color="inherit" component={Link} to="/tasks">
                  Tasks
                </Button>
                <Button color="inherit" component={Link} to="/profile">
                  Profile
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/signup">
                  Signup
                </Button>
              </>
            )}
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {context.isAuthenticated ? (
            <>
              <Typography>Welcome {context.userName}!</Typography>
              <Button
                color="inherit"
                variant="outlined"
                onClick={() => context.signout()}
              >
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Typography>You are not logged in</Typography>
              <Button
                color="inherit"
                variant="outlined"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
