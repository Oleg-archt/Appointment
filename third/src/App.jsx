import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Doctors from "./page/Doctors";
import About from "./page/About";
import Contact from "./page/Contact";
import Login from "./page/Login";
import Profile from "./page/Profile";
import MyAppointment from "./page/MyAppointments";
import Appointment from "./page/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
