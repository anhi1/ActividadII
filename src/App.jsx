import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import "./App.css";
import ActivitiesPage from "./pages/ActivitiesPage";
import ActivityDetail from "./pages/ActivityDetail";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import MyReservations from "./pages/MyReservations";
import About from "./pages/About";
function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />

          {/* Rutas privadas */}
          <Route
            path="/activities"
            element={
              <PrivateRoute>
                <ActivitiesPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/activities/:id"
            element={
              <PrivateRoute>
                <ActivityDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/reservations"
            element={
              <PrivateRoute>
                <MyReservations />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
