import "./App.css";
import NavBar from "./components/NavBar";
import NavbarContent from "./components/NavbarContent";
import AdminSignin from "./dashboards/Admin/AdminSignin";
import Doctor from "./dashboards/Doctors/Doctor";
import Patient from "./dashboards/Patients/Patient";
import MedicalData from "./dashboards/Patients/MedicalData";
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
          <Route path="/medicaldata" element={<MedicalData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
