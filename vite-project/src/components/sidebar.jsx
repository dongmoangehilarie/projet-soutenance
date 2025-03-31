import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaClock, FaHistory, FaChartBar, FaUsers,FaUserCog, FaMoneyBill, FaCog, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPointageOpen, setIsPointageOpen] = useState(false);

  return (
    <div className="flex w-full ">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-orange-900 text-white transition-transform duration-300 md:translate-x-0`}>
        <h2 className="text-xl font-bold p-4 border-b border-gray-700 italic">HILTIME</h2>
        <ul className="p-4 space-y-2">
          <li>
            <button 
              onClick={() => setIsPointageOpen(!isPointageOpen)}
              className="flex items-center gap-3 p-3 w-full rounded-md hover:bg-orange-700"
            >
              <FaClock /> Pointage
            </button>
            {isPointageOpen && (
              <ul className="pl-8">
                <li>
                  <Link to="/arrivee" className="flex items-center gap-3 p-2 rounded-md hover:bg-orange-700">
                    <FaSignInAlt /> Arrivée
                  </Link>
                </li>
                <li>
                  <Link to="/depart" className="flex items-center gap-3 p-2 rounded-md hover:bg-orange-700">
                    <FaSignOutAlt /> Départ
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/historique" className="flex items-center gap-3 p-3 rounded-md hover:bg-orange-700">
              <FaHistory /> Historique
            </Link>
          </li>
          <li>
            <Link to="/statistique" className="flex items-center gap-3 p-3 rounded-md hover:bg-orange-700">
              <FaChartBar /> Statistique
            </Link>
          </li>
          <li>
            <Link to="/employee" className="flex items-center gap-3 p-3 rounded-md hover:bg-orange-700">
              <FaUsers /> Gestion des Employés
            </Link>
          </li>
          <li>
            <Link to="/payroll" className="flex items-center gap-3 p-3 rounded-md hover:bg-orange-700">
              <FaMoneyBill /> Paie
            </Link>
          </li>
          <li>
            <button 
              onClick={() => setIsPointageOpen(!isPointageOpen)}
              className="flex items-center gap-3 p-3 w-full rounded-md hover:bg-orange-700"
            >
              <FaCog /> parametre
            </button>
            {isPointageOpen && (
              <ul className="pl-8">
                <li>
                  <Link to="/paremployee" className="flex items-center gap-3 p-2 rounded-md hover:bg-orange-700">
                    <FaSignInAlt /> employé
                  </Link>
                </li>
                <li>
                  <Link to="/paradmin" className="flex items-center gap-3 p-2 rounded-md hover:bg-orange-700">
                    <FaUserCog /> admin
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
