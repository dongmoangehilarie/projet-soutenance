import { useState } from "react";
import { FaEnvelope, FaLock, FaPhone, FaBell, FaUser, FaBuilding, FaCalendar, FaIdBadge } from "react-icons/fa";
import Layout from "./Layout";
const ParametresEmploye = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [poste, setPoste] = useState("");
  const [departement, setDepartement] = useState("");
  const [salaire, setSalaire] = useState("");
  const [dateEmbauche, setDateEmbauche] = useState("");
  const [identifiant, setIdentifiant] = useState("");
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    console.log("Données sauvegardées :", { nom, email, telephone, motDePasse, poste, departement, salaire, dateEmbauche, identifiant, notifications });
  };

  return (
    <Layout>
    <div className="max-w-lg mx-auto p-6">
      <div className="border border-gray-300 shadow-lg rounded-lg overflow-hidden bg-white">
        <div className="bg-gray-800 text-white p-4 text-lg font-semibold">Paramètres de l'Employé</div>
        <div className="p-6 space-y-4">
          <div className="flex items-center border border-gray-300 rounded p-2 bg-gray-100">
            <FaUser className="text-gray-600 mr-2" />
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom complet" className="w-full outline-none bg-transparent" />
          </div>
          <div className="flex items-center border border-gray-300 rounded p-2 bg-gray-100">
            <FaEnvelope className="text-gray-600 mr-2" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full outline-none bg-transparent" />
          </div>
          <div className="flex items-center border border-gray-300 rounded p-2 bg-gray-100">
            <FaPhone className="text-gray-600 mr-2" />
            <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="Téléphone" className="w-full outline-none bg-transparent" />
          </div>
          <div className="flex items-center border border-gray-300 rounded p-2 bg-gray-100">
            <FaLock className="text-gray-600 mr-2" />
            <input type="password" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} placeholder="Mot de passe" className="w-full outline-none bg-transparent" />
          </div>
          <div className="flex items-center border border-gray-300 rounded p-2 bg-gray-100">
            <FaIdBadge className="text-gray-600 mr-2" />
            <input type="text" value={identifiant} onChange={(e) => setIdentifiant(e.target.value)} placeholder="ID Employé" className="w-full outline-none bg-transparent" />
          </div>
          <div className="flex items-center border border-gray-300 rounded p-2 bg-gray-100">
            <FaBuilding className="text-gray-600 mr-2" />
            <input type="text" value={poste} onChange={(e) => setPoste(e.target.value)} placeholder="Poste" className="w-full outline-none bg-transparent" />
          </div>
          
          <div className="flex items-center border border-gray-300 rounded p-2 bg-gray-100">
            <FaCalendar className="text-gray-600 mr-2" />
            <input type="date" value={dateEmbauche} onChange={(e) => setDateEmbauche(e.target.value)} className="w-full outline-none bg-transparent" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaBell className="text-gray-600 mr-2" />
              <span className="text-gray-700">Recevoir des notifications</span>
            </div>
            <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} className="w-5 h-5 text-gray-600" />
          </div>
          <button onClick={handleSave} className="bg-gray-800 text-white w-full py-2 rounded hover:bg-gray-900">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ParametresEmploye;
