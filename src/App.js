import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Topratedpage from "./pages/Topratedpage";
import Upcoming from './pages/Upcoming'
import Moviedetailpage from "./pages/Moviedetailpage";
import Popular from "./pages/Popular";
import Loginpage from "./pages/Loginpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Homepage" element={<Homepage/>} />
        <Route path="/popular" element={<Popular/>} />
        <Route path="/movie/:id" element={<Moviedetailpage/>} />
        <Route path="/movie" element={<Moviedetailpage/>} />
        <Route path="/toprated" element={<Topratedpage/>} />
        <Route path="/upcoming" element={<Upcoming/>}/>
        <Route path="/" element={<Loginpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
