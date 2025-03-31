import { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaWhatsapp, FaEnvelope, FaSms } from "react-icons/fa";
import Layout from "./Layout";

const ParametresAdmin = () => {
  const [params, setParams] = useState({
    tauxHoraires: {
      employe: 10,
      manager: 20,
      directeur: 30,
    },
    notifications: true,
    contactWhatsApp: "",
    emailNotifications: true,
    accesEmployes: true,
    canalCommunication: "email",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleToggle = (name) => {
    setParams({ ...params, [name]: !params[name] });
  };

  const handleTauxChange = (role, value) => {
    setParams({
      ...params,
      tauxHoraires: { ...params.tauxHoraires, [role]: Number(value) },
    });
  };

  const handleSubmit = () => {
    if (params.contactWhatsApp.length < 10) {
      setMessage("❌ Le numéro WhatsApp doit contenir au moins 10 chiffres.");
      return;
    }
    setMessage("✅ Paramètres administrateur mis à jour avec succès !");
    console.log("Paramètres mis à jour", params);
  };

  return (
    <Layout>
   <div className=" flex-col p-6 flex">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">⚙️ Paramètres Administrateur</h2>

      {Object.keys(params.tauxHoraires).map((role) => (
        <div key={role} className="mt-4">
          <label className="block font-medium text-gray-700">
            Taux Horaire ({role}) (fcfa)
          </label>
          <input
            type="number"
            value={params.tauxHoraires[role]}
            onChange={(e) => handleTauxChange(role, e.target.value)}
            className="w-full p-3 border rounded-lg mt-1 bg-gray-50 focus:ring-2 focus:ring-blue-300"
          />
        </div>
      ))}

      <div className="mt-6 flex items-center justify-between p-3 bg-gray-100 rounded-lg">
        <label className="font-medium text-gray-700">Notifications</label>
        <span onClick={() => handleToggle("notifications")} className="cursor-pointer">
          {params.notifications ? <FaCheckCircle className="text-green-500 text-xl" /> : <FaTimesCircle className="text-red-500 text-xl" />}
        </span>
      </div>

      <div className="mt-4">
        <label className="block font-medium text-gray-700">Contact WhatsApp</label>
        <div className="relative">
          <input
            type="text"
            name="contactWhatsApp"
            value={params.contactWhatsApp}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-1 bg-gray-50 focus:ring-2 focus:ring-green-300 pl-10"
            placeholder="Ex: +237XXXXXXXXX"
          />
          <FaWhatsapp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 text-xl" />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between p-3 bg-gray-100 rounded-lg">
        <label className="font-medium text-gray-700">Accès Employés</label>
        <span onClick={() => handleToggle("accesEmployes")} className="cursor-pointer">
          {params.accesEmployes ? <FaCheckCircle className="text-green-500 text-xl" /> : <FaTimesCircle className="text-red-500 text-xl" />}
        </span>
      </div>

      <div className="mt-4">
        <label className="block font-medium text-gray-700">Canal de Communication</label>
        <div className="relative">
          <select
            name="canalCommunication"
            value={params.canalCommunication}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-1 bg-gray-50 focus:ring-2 focus:ring-blue-300 pl-10"
          >
            <option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="sms">SMS</option>
          </select>
          {params.canalCommunication === "email" && <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-xl" />}
          {params.canalCommunication === "whatsapp" && <FaWhatsapp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 text-xl" />}
          {params.canalCommunication === "sms" && <FaSms className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500 text-xl" />}
        </div>
      </div>

      {message && <p className="mt-6 text-center font-medium text-lg text-green-600">{message}</p>}

      <button
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
        onClick={handleSubmit}
      >
        💾 Sauvegarder
      </button>
      </div>
    </Layout>
  );
};

export default ParametresAdmin;

