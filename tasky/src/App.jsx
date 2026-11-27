import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import TasksPage from "./pages/tasksPage";
import StartPage from "./pages/startPage";
import ProfilePage from "./pages/profilePage";
import { Container, Typography } from "@mui/material";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
        {/* App Header */}
          <Container component="main">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
              sx={{
                backgroundColor: 'gray',
                textAlign: 'center',
                color: 'white',
                padding: '20px',
                margin: '20px 0 40px 0',
                borderRadius: '4px'
              }}
            >
              Tasky
            </Typography>
          </Container>
        {/* End App Header */}

        <Routes>
          <Route path="/" element={< StartPage />} />
          <Route path="/login" element={< LoginPage />} />
          <Route path="/signup" element={< SignupPage />} />
          <Route path="/tasks" element={< TasksPage />} />
          <Route path="/profile" element={< ProfilePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
