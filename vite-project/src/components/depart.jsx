import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "./Layout";
const PointageDepart = ({ employeId, heurePrevue = "17:00", heureLimite = "23:59" }) => {
    const [heureActuelle, setHeureActuelle] = useState(new Date());
    const [message, setMessage] = useState("");
    const [pointageEffectue, setPointageEffectue] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeureActuelle(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formaterHeure = (date) => {
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    const enregistrerDepart = async () => {
        const heureActuelleStr = formaterHeure(heureActuelle);

        if (heureActuelleStr >= heureLimite) {
            setMessage("Le pointage de départ est fermé pour aujourd'hui. Essayez demain !");
            return;
        }

        if (pointageEffectue) {
            setMessage("Vous avez déjà pointé votre départ aujourd'hui.");
            return;
        }

        const differenceMinutes =
            (new Date(`1970-01-01T${heureActuelleStr}:00`).getTime() -
                new Date(`1970-01-01T${heurePrevue}:00`).getTime()) /
            60000;

        let msg = `Bonne fin de journée ! Vous avez pointé à ${heureActuelleStr}. `;
        if (differenceMinutes === 0) {
            msg += "Bravo, vous avez quitté à l'heure exacte ! 🎉";
        } else if (differenceMinutes > 0) {
            msg += `Vous avez quitté avec ${differenceMinutes} minutes de retard. Bon courage et reposez-vous bien ! ⏳`;
        } else {
            msg += `Vous partez ${Math.abs(differenceMinutes)} minutes plus tôt. Assurez-vous d'avoir fini votre travail ! ⚡`;
        }

        setMessage(msg);
        setPointageEffectue(true);
    };

    return (
         <Layout>
        <motion.div 
            className="flex flex-col items-center justify-center min-h-screen bg-purple-100 p-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1 
                className="text-3xl font-bold text-purple-700 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Pointage de Départ
            </motion.h1>
            <p className="text-lg text-gray-700">Heure actuelle : <strong>{formaterHeure(heureActuelle)}</strong></p>
            <button 
                onClick={enregistrerDepart} 
                disabled={pointageEffectue || heureActuelle >= heureLimite}
                className={`mt-4 px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-300 
                    ${pointageEffectue || heureActuelle >= heureLimite ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"}`}
            >
                Pointer mon départ
            </button>
            {message && (
                <motion.div 
                    className="mt-4 p-4 bg-white shadow-lg rounded-lg text-center text-gray-800"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {message}
                </motion.div>
            )}
        </motion.div>
        </Layout>
    );
};

export default PointageDepart;

