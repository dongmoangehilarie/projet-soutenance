import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Dashboard from "./components/page/Dashboard.jsx";
import Arrivee from "./components/arrivee.jsx";
import Depart from "./components/depart.jsx";
import Historique from "./components/historique.jsx";
import Statistique from "./components/statistique.jsx";
import Employee from "./components/employee.jsx";
import Paie from "./components/paie.jsx";
import Paremployee from "./components/paremployee.jsx";
import Paradmin from "./components/paradmin.jsx";
import Payroll from "./components/payroll.jsx";
function App() {
  return (
    <Router>
          {/* Barre supérieure */}
          <Routes>
              <Route path="/" element={<Paie />} />
      

                <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/arrivee" element={<Arrivee />} />
              <Route path="/depart" element={<Depart />} />
              <Route path="/historique" element={<Historique />} />
              <Route path="/statistique" element={<Statistique />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/paremployee" element={<Paremployee />} />
              <Route path="/paradmin" element={<Paradmin />} />
              <Route path="/payroll" element={<Payroll />} />
           </Routes>
    </Router>
  );
}

export default App;
