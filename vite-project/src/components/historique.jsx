import React, { useState } from "react";
import { FaCalendarDay, FaCalendarWeek, FaCalendarAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Layout from "./Layout";

const Historique = () => {
  const [periode, setPeriode] = useState("jour");

  const historiqueData = {
    jour: [
      { date: "2025-03-22", heuresTravaillees: "7h 30m", statut: "Présent" },
      { date: "2025-03-21", heuresTravaillees: "8h", statut: "Présent" },
      { date: "2025-03-20", heuresTravaillees: "0h", statut: "Absent" },
    ],
    semaine: [
      { semaine: "Semaine 12", totalHeures: "40h", joursAbsence: 1 },
      { semaine: "Semaine 11", totalHeures: "38h", joursAbsence: 2 },
    ],
    mois: [
      { mois: "Mars 2025", totalHeures: "160h", joursAbsence: 4 },
      { mois: "Février 2025", totalHeures: "155h", joursAbsence: 5 },
    ],
  };

  return (
    <Layout>
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Titre */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📊 Historique de présence</h2>

      {/* Sélecteur de période */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-5 py-2 flex items-center space-x-2 rounded-lg transition ${
            periode === "jour" ? "bg-orange-600 text-white" : "bg-white shadow"
          }`}
          onClick={() => setPeriode("jour")}
        >
          <FaCalendarDay />
          <span>Jour</span>
        </button>
        <button
          className={`px-5 py-2 flex items-center space-x-2 rounded-lg transition ${
            periode === "semaine" ? "bg-orange-600 text-white" : "bg-white shadow"
          }`}
          onClick={() => setPeriode("semaine")}
        >
          <FaCalendarWeek />
          <span>Semaine</span>
        </button>
        <button
          className={`px-5 py-2 flex items-center space-x-2 rounded-lg transition ${
            periode === "mois" ? "bg-orange-600 text-white" : "bg-white shadow"
          }`}
          onClick={() => setPeriode("mois")}
        >
          <FaCalendarAlt />
          <span>Mois</span>
        </button>
      </div>

      {/* Contenu historique */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        {periode === "jour" && (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3">Date</th>
                <th className="p-3">Heures Travaillées</th>
                <th className="p-3">Statut</th>
              </tr>
            </thead>
            <tbody>
              {historiqueData.jour.map((entry, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{entry.date}</td>
                  <td className="p-3">{entry.heuresTravaillees}</td>
                  <td className="p-3 flex items-center space-x-2">
                    {entry.statut === "Présent" ? (
                      <FaCheckCircle className="text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-red-500" />
                    )}
                    <span>{entry.statut}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {periode === "semaine" && (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3">Semaine</th>
                <th className="p-3">Total Heures</th>
                <th className="p-3">Jours d'Absence</th>
              </tr>
            </thead>
            <tbody>
              {historiqueData.semaine.map((entry, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{entry.semaine}</td>
                  <td className="p-3">{entry.totalHeures}</td>
                  <td className="p-3">{entry.joursAbsence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {periode === "mois" && (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3">Mois</th>
                <th className="p-3">Total Heures</th>
                <th className="p-3">Jours d'Absence</th>
              </tr>
            </thead>
            <tbody>
              {historiqueData.mois.map((entry, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{entry.mois}</td>
                  <td className="p-3">{entry.totalHeures}</td>
                  <td className="p-3">{entry.joursAbsence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
    </Layout>
  );
};

export default Historique;
