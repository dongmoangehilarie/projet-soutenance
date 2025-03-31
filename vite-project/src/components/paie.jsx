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
         
        <div className="min-h-screen bg-gradient-to-r from-yellow-500 via-yellow-800 to-orange-500 flex justify-center items-center">
            <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className=" font-bold text-center italic mb-6 text-orange-500 text-5xl">HILTIME</h2>
                
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
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Votre mot de passe"
                            required
                        />
                    </div>
<Link to="/Dashboard">
                    <motion.button
                        type="submit"
                        className="w-full py-3 mt-4 bg-orange-600 text-white rounded-lg focus:outline-none"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05, backgroundColor: "#FF8C00" }} // Changer la couleur au survol
                        whileTap={{ scale: 0.95, backgroundColor: "#FF4500" }}  // Effet au clic
                        transition={{ duration: 0.2 }}
                    >
                        Se connecter
                    </motion.button></Link>
                </form>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">Pas encore de compte ? <a href="#" className="text-orange-600">S'inscrire</a></p>
                </div>
            </motion.div>
        </div>
    );
    
};

export default login;

