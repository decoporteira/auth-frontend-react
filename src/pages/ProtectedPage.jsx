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
      <h2>Área Protegida</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Criado em</th>
            <th>Atualizado em</th>
          </tr>
        </thead>
        <tbody>
          {data.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>{new Date(project.created_at).toLocaleString()}</td>
              <td>{new Date(project.updated_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
