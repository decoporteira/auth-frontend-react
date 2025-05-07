// src/pages/ProtectedPage.js
import React, { useEffect, useState } from "react";
import api from "../services/Api";

export default function ProtectedPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/projects")
      .then((response) => setData(response.data))
      .catch(() => alert("Acesso negado"));
  }, []);

  return (
    <div>
      <h2 className="text-5xl font-bold dark:text-white pb-5">
        Área Protegida
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-md mt-6">
        <table className="min-w-full text-sm text-left text-gray-200 dark:text-gray-100">
          <thead className="bg-gray-700 dark:bg-gray-800 text-xs uppercase font-semibold text-gray-300 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Nome</th>
              <th className="px-4 py-3">Descrição</th>
              <th className="px-4 py-3">Criado em</th>
              <th className="px-4 py-3">Atualizado em</th>
            </tr>
          </thead>
          <tbody className="bg-gray-600 dark:bg-gray-900 divide-y divide-gray-700">
            {data.map((project) => (
              <tr
                key={project.id}
                className="hover:bg-gray-500 dark:hover:bg-gray-800 transition-colors"
              >
                <td className="px-4 py-2">{project.id}</td>
                <td className="px-4 py-2">{project.title}</td>
                <td className="px-4 py-2">{project.description}</td>
                <td className="px-4 py-2">
                  {new Date(project.created_at)
                    .toLocaleString()
                    .toLocaleString("pt-BR")}
                </td>
                <td className="px-4 py-2">
                  {new Date(project.updated_at)
                    .toLocaleString()
                    .toLocaleString("pt-BR")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
