
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "../Layout";
const slogans = [
  "Soyez ponctuel, votre temps compte!",
  "La présence est la clé du succès.",
  "Ensemble, optimisons notre productivité!",
  "Chaque minute compte, faisons la différence!",
];

const images = [
  "/src/assets/image/one.png",
  "/src/assets/image/two.png",
  "/src/assets/image/three.png"
];

export default function Accueil() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  // Mettre à jour l'heure toutes les secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Faire défiler les slogans toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Faire défiler les images toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      <motion.h1
        className="text-5xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       <div>  Bienvenue sur <h3 className="italic text-orange-500">HILTIME</h3> Presence</div>
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Gérez la présence des employés en temps réel.
      </motion.p>

      <div className="mb-6 text-xl font-semibold text-gray-700">
        <motion.div
          className="text-2xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {currentTime.toLocaleTimeString()}
        </motion.div>
        <motion.div
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {currentTime.toLocaleDateString()}
        </motion.div>
      </div>

      <div className="w-full h-40 bg-gray-300 mt-6 p-4 rounded-lg overflow-hidden">
        <motion.div
          className="text-xl font-semibold text-gray-800"
          initial={{ x: "100%" }}
          animate={{ x: "0" }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
        >
          {slogans[currentSlogan]}
        </motion.div>
      </div>

      {/* Défilement des images */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <img
          src={images[currentImage]}
          alt="Motivational"
          className="rounded-lg shadow-lg w-80"
        />
      </motion.div>
    </div>
    </Layout>

  );
}
