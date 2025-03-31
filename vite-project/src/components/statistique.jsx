import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { FaChartLine, FaPercentage, FaCalendarAlt } from "react-icons/fa";
import Layout from "./Layout";
// Enregistrer les composants Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Statistiques = () => {
  // Données de statistiques pour l'exemple
  const data = {
    // Données pour le graphique des heures travaillées
    heuresTravaillées: [8, 7, 8, 6, 8, 7, 7, 8, 7, 8, 7, 8],
    // Données de présence
    presence: [100, 95, 100, 80, 100, 85, 90],
    // Données d'absence
    absence: [0, 5, 0, 20, 0, 15, 10],
  };

  const semaine = ["Semaine 1", "Semaine 2", "Semaine 3", "Semaine 4", "Semaine 5", "Semaine 6", "Semaine 7"];

  const graphiqueHeures = {
    labels: semaine,
    datasets: [
      {
        label: "Heures travaillées (par semaine)",
        data: data.heuresTravaillées,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const graphiquePresence = {
    labels: semaine,
    datasets: [
      {
        label: "Présence (%)",
        data: data.presence,
        borderColor: "rgba(0, 255, 0, 1)",
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Absence (%)",
        data: data.absence,
        borderColor: "rgba(255, 0, 0, 1)",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Calcul des pourcentages d'absence et de présence
  const presenceTotal = data.presence.reduce((acc, val) => acc + val, 0);
  const absenceTotal = data.absence.reduce((acc, val) => acc + val, 0);

  const pourcentagePresence = (presenceTotal / (data.presence.length * 100)) * 100;
  const pourcentageAbsence = (absenceTotal / (data.absence.length * 100)) * 100;

  return (
    <Layout>
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Titre */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📊 Statistiques des Heures et Présence</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Graphique des heures travaillées */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <FaChartLine />
            <span>Heures Travaillées par Semaine</span>
          </h3>
          <Line data={graphiqueHeures} />
        </div>

        {/* Graphique de présence et absence */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <FaPercentage />
            <span>Présence et Absence par Semaine</span>
          </h3>
          <Line data={graphiquePresence} />
        </div>
      </div>

      {/* Évaluation des pourcentages de présence et d'absence */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <FaCalendarAlt />
          <span>Évaluation de la Présence et de l'Absence</span>
        </h3>
        <div className="flex space-x-6">
          <div className="text-center">
            <h4 className="text-lg font-semibold">Présence</h4>
            <div className="text-4xl font-bold text-green-500">{pourcentagePresence.toFixed(2)}%</div>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold">Absence</h4>
            <div className="text-4xl font-bold text-red-500">{pourcentageAbsence.toFixed(2)}%</div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Statistiques;

