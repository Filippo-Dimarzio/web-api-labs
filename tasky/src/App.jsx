import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import TasksPage from "./pages/tasksPage";
import StartPage from "./pages/startPage";
import ProfilePage from "./pages/profilePage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";
import Header from "./components/SiteHeader";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Header />

        <Routes>
          <Route path="/" element={< StartPage />} />
          <Route path="/login" element={< LoginPage />} />
          <Route path="/signup" element={< SignupPage />} />
          <Route path="/profile" element={< ProfilePage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/tasks" element={< TasksPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
