"use client";
import { useParams } from "next/navigation";

const CursoDetalhes = () => {
  const { id } = useParams(); // 'id' é o parâmetro dinâmico da URL

  // Aqui você pode buscar os detalhes do curso com base no `id`

  return (
    <div>
      <h1>Detalhes da turma {id}</h1>
      {/* Exiba os detalhes do curso aqui */}
    </div>
  );
};

export default CursoDetalhes;
