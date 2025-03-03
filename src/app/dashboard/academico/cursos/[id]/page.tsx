'use client';
import { useParams, useRouter } from "next/navigation";

const CursoDetalhes = () => {
  const { id } = useParams();

  // Aqui você pode buscar os detalhes do curso com base no `id`

  return (
    <div>
      <h1>Detalhes do Curso {id}</h1>
      {/* Exiba os detalhes do curso aqui */}
    </div>
  );
};

export default CursoDetalhes;


