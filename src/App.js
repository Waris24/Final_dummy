import "./App.css";
import NavBar from "./components/NavBar";
import NavbarContent from "./components/NavbarContent";
import AdminNavbar from "./dashboards/Admin/AdminNavbar";
import AdminSignin from "./dashboards/Admin/AdminSignin";
import Doctor from "./dashboards/Doctors/Doctor";
import Patient from "./dashboards/Patients/Patient";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<NavbarContent />}></Route>
          <Route path="/admin" element={<AdminSignin />}></Route>
          <Route path="/doctor" element={<Doctor />}></Route>
          <Route path="/patient" element={<Patient />}></Route>
        </Routes>
      </Router>
      <AdminNavbar />
    </>
  );
}

export default App;
