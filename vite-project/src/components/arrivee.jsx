import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "./Layout";
const PointageArrivee = ({ employeId, heurePrevue = "08:00", heureLimite = "20:00" }) => {
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

    const enregistrerArrivee = async () => {
        const heureActuelleStr = formaterHeure(heureActuelle);

        if (heureActuelleStr >= heureLimite) {
            setMessage("Le pointage est fermé pour aujourd'hui. Essayez demain !");
            return;
        }

        if (pointageEffectue) {
            setMessage("Vous avez déjà pointé votre arrivée aujourd'hui.");
            return;
        }

        const differenceMinutes =
            (new Date(`1970-01-01T${heureActuelleStr}:00`).getTime() -
                new Date(`1970-01-01T${heurePrevue}:00`).getTime()) /
            60000;

        let msg = `Bonjour ! Vous avez pointé à ${heureActuelleStr}. `;
        if (differenceMinutes === 0) {
            msg += "Félicitations, vous êtes pile à l'heure ! 🎉";
        } else if (differenceMinutes > 0) {
            msg += `Vous avez ${differenceMinutes} minutes de retard. Essayez d'être plus ponctuel ! ⏳`;
        } else {
            msg += `Bravo ! Vous êtes en avance de ${Math.abs(differenceMinutes)} minutes. Continuez ainsi ! 🚀`;
        }

        setMessage(msg);
        setPointageEffectue(true);
    };

    return (
          <Layout>
        <motion.div 
            className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1 
                className="text-3xl font-bold text-blue-700 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Pointage d'Arrivée
            </motion.h1>
            <p className="text-lg text-gray-700">Heure actuelle : <strong>{formaterHeure(heureActuelle)}</strong></p>
            <button 
                onClick={enregistrerArrivee} 
                disabled={pointageEffectue || heureActuelle >= heureLimite}
                className={`mt-4 px-6 py-3 text-white font-semibold rounded-lg shadow-md transition-all duration-300 
                    ${pointageEffectue || heureActuelle >= heureLimite ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
            >
                Pointer mon arrivée
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

export default PointageArrivee;
