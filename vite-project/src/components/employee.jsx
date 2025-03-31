import { useState } from "react";
import { motion } from "framer-motion";
import { FaRegEdit, FaTrashAlt, FaWhatsapp } from "react-icons/fa"; // Importation des icônes
import Layout from "./Layout";
const GestionEmployes = () => {
    const [employes, setEmployes] = useState([
        { id: 1, nom: "Jean Dupont", email: "jean@example.com", contact: "+237673672886", role: "Développeur" },
        { id: 2, nom: "Marie Curie", email: "marie@example.com", contact: "+237695904521", role: "Designer" }
    ]);
    const [formData, setFormData] = useState({ id: null, nom: "", email: "", contact: "", role: "" });
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            setEmployes(employes.map(emp => (emp.id === formData.id ? formData : emp)));
        } else {
            setEmployes([...employes, { ...formData, id: Date.now() }]);
        }
        setFormData({ id: null, nom: "", email: "", contact: "", role: "" });
        setIsEditing(false);
    };

    const handleEdit = (employe) => {
        setFormData(employe);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        setEmployes(employes.filter(emp => emp.id !== id));
    };

    const postesOptions = ["Développeur", "Designer", "Manager", "Technicien", "Comptable"];

    const getWhatsAppLink = (contact, nom) => {
        return `https://wa.me/${contact.replace(/\D/g, "")}?text=Bonjour ${nom}, je vous contacte depuis l'application de gestion des employés. Votre emploi du temps et pointage des heures est en cours.`;
    };

    return (
        <Layout>
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <motion.h1 className="text-3xl font-bold mb-6 text-orange-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >Gestion des Employés</motion.h1>
            
            <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg w-96">
                <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" className="w-full mb-3 p-2 border rounded" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full mb-3 p-2 border rounded" required />
                <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact (+237)" className="w-full mb-3 p-2 border rounded" required />
                <select name="role" value={formData.role} onChange={handleChange} className="w-full mb-3 p-2 border rounded" required>
                    <option value="">Sélectionnez un poste</option>
                    {postesOptions.map((poste) => (
                        <option key={poste} value={poste}>{poste}</option>
                    ))}
                </select>
                <button type="submit" className="w-full p-2 bg-orange-600 text-white rounded hover:bg-orange-700">
                    {isEditing ? "Modifier" : "Ajouter"} Employé
                </button>
            </form>
            
            <div className="mt-6 w-full max-w-lg">
                {employes.map((emp) => (
                    <motion.div key={emp.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div>
                            <p className="font-semibold">{emp.nom}</p>
                            <p className="text-gray-600">{emp.email}</p>
                            <p className="text-gray-500 text-sm">{emp.role}</p>
                            <p className="text-gray-500 text-sm">{emp.contact}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button onClick={() => handleEdit(emp)} className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
                                <FaRegEdit /> {/* Icône de crayon */}
                            </button>
                            <button onClick={() => handleDelete(emp.id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                                <FaTrashAlt /> {/* Icône de corbeille */}
                            </button>
                            <a href={getWhatsAppLink(emp.contact, emp.nom)} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
                                <FaWhatsapp /> {/* Icône WhatsApp */}
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
        </Layout>
    );
};

export default GestionEmployes;

