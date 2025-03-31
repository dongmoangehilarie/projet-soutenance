import { useState } from "react";
import { FaMoneyBill, FaClock, FaUser, FaCalendar, FaShieldAlt } from "react-icons/fa";
import Layout from "./Layout";
const GestionPaie = () => {
  const [nom, setNom] = useState("Nom Employé");
  const [tauxHoraire, setTauxHoraire] = useState(10); // Taux fixé par l'entreprise
  const [heuresTravaillees, setHeuresTravaillees] = useState(0); // Initialisé à 0
  const [datePaiement, setDatePaiement] = useState("");

  // Calcul sécurisé du salaire mensuel
  const salaire = Math.max(0, tauxHoraire * heuresTravaillees);

  const handlePaiement = () => {
    if (heuresTravaillees <= 0) {
      alert("Le nombre d'heures doit être supérieur à zéro.");
      return;
    }
    alert(`Paiement sécurisé de ${salaire.toFixed(2)} € effectué pour ${nom}`);
  };

  return (
    <Layout>
    <div className="max-w-lg mx-auto p-6">
      <div className="border border-gray-300 shadow-lg rounded-lg overflow-hidden bg-white">
        <div className="bg-gray-900 text-white p-4 text-lg font-semibold flex items-center">
          <FaShieldAlt className="mr-2" /> SALAIRE
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center border border-gray-300 rounded p-2 bg-gray-100">
            <FaUser className="text-gray-600 mr-2" />
            <input type="text" value={nom} readOnly className="w-full outline-none bg-transparent font-semibold" />
          </div>
          <div className="flex items-center border border-gray-300 rounded p-2 bg-gray-100">
            <FaClock className="text-gray-600 mr-2" />
            <input 
              type="number" 
              value={heuresTravaillees} 
              onChange={(e) => setHeuresTravaillees(Math.max(0, Number(e.target.value)))} 
              placeholder="Nombre d'heures travaillées" 
              className="w-full outline-none bg-transparent" 
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded p-2 bg-gray-100">
            <FaMoneyBill className="text-gray-600 mr-2" />
            <input type="text" value={`${salaire.toFixed(2)} €`} readOnly className="w-full outline-none bg-transparent font-semibold text-gray-800" />
          </div>
          <div className="flex items-center border border-gray-300 rounded p-2 bg-gray-100">
            <FaCalendar className="text-gray-600 mr-2" />
            <input type="date" value={datePaiement} onChange={(e) => setDatePaiement(e.target.value)} className="w-full outline-none bg-transparent" />
          </div>
          <button onClick={handlePaiement} className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
            Effectuer le Paiement Sécurisé
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default GestionPaie;

