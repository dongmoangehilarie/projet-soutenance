import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Veuillez remplir tous les champs");
        } else {
            // Implémenter la logique de connexion ici (API, validation)
            setError(""); // Réinitialiser l'erreur
            console.log("Connexion réussie");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">
            <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Connexion Employé</h2>
                
                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Votre email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Votre mot de passe"
                            required
                        />
                    </div>
<Link to="/App">
                    <motion.button
                        type="submit"
                        className="w-full py-3 mt-4 bg-indigo-600 text-white rounded-lg focus:outline-none"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05, backgroundColor: "#4338CA" }} // Changer la couleur au survol
                        whileTap={{ scale: 0.95, backgroundColor: "#3B82F6" }}  // Effet au clic
                        transition={{ duration: 0.2 }}
                    >
                        Se connecter
                    </motion.button></Link>
                </form>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">Pas encore de compte ? <a href="#" className="text-indigo-600">S'inscrire</a></p>
                </div>
            </motion.div>
        </div>
    );
};

export default login;

