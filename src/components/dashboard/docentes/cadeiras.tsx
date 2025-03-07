"use client";
import React, { useState } from "react";
import { Input, Select, SelectItem, Button } from "@heroui/react";
import CardTurmas from "./cardCadeiras";
import { Search, PlusIcon } from "lucide-react";
import { SheetDocentes } from "./sheetDocentes";
import { DeleteModal } from "../modal/delete";

interface Turma {
  id: number;
  nome: string;
  turma: string;
  ano: string;
  tags: string[];
  color: string;
  estado: string;
  numbers: number;
}

const dadosMock: Turma[] = [
  {
    id: 1,
    ano: "1º ano",
    nome: "Engenharia informática - EINF-1",
    turma: "Introd. à Eng. Informática",
    tags: ["Sala B4", "Diurno"],
    color: "bg-blue-100",
    estado: "Prestes a iniciar",
    numbers: 50,
  },
  {
    id: 2,
    ano: "1º ano",
    nome: "Gestão Empresarial - GEMP-1",
    turma: "Empreendedorismo",
    tags: ["Sala C2", "Noturno"],
    color: "bg-green-100",
    estado: "Aguardando Início",
    numbers: 30,
  },
  {
    id: 3,
    ano: "2º ano",
    nome: "ARQ2-1 - Arquitectura",
    turma: "Desenho Técnico",
    tags: ["Sala A2", "Diurno"],
    color: "bg-yellow-100",
    estado: "Encerrada",
    numbers: 20,
  },
  {
    id: 4,
    ano: "2º ano",
    nome: "DIR2-1 - Direito",
    turma: "Código Penal",
    tags: ["Sala A4", "Noturno"],
    color: "bg-red-100",
    estado: "Aguardando Início",
    numbers: 35,
  },
  {
    id: 5,
    ano: "3º ano",
    nome: "DIR3-1 - Direito",
    turma: "Legislação",
    tags: ["Sala B3", "Noturno"],
    color: "bg-dark-100",
    estado: "Em aulas",
    numbers: 45,
  },
  {
    id: 6,
    ano: "3º ano",
    nome: "DIR3-1 - Informática",
    turma: "Álgebra Linear",
    tags: ["Sala B5", "Noturno"],
    color: "bg-pink-100",
    estado: "Aguardando Início",
    numbers: 38,
  },
];

const TurmaList: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedTurmaId, setSelectedTurmaId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTurma = () => {
    setSelectedTurmaId(null); // Modo de adição
    setIsSheetOpen(true);
  };

  const handleEditCurso = (turmaId: number) => {
    setSelectedTurmaId(turmaId); // Modo de edição
    setIsSheetOpen(true);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
    setSelectedTurmaId(null);
  };

  const handleDeleteClick = (turmaId: number) => {
    setSelectedTurmaId(turmaId);
    setIsModalOpen(true); // Abrir a modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTurmaId(null);
  };

  const [anoFiltro, setAnoFiltro] = useState<string>("");
  const [pesquisa, setPesquisa] = useState<string>("");

  // Remover duplicatas de anos e manter apenas anos únicos
  const anosUnicos = Array.from(new Set(dadosMock.map((turma) => turma.ano)));

  const handleAnoChange = (value: string) => {
    setAnoFiltro(value);
  };

  const handlePesquisaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPesquisa(e.target.value);
  };

  const turmasFiltradas = dadosMock
    .filter((turma) => (anoFiltro ? turma.ano === anoFiltro : true))
    .filter(
      (turma) =>
        turma.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
        turma.turma.toLowerCase().includes(pesquisa.toLowerCase())
    );

  return (
    <div>
      {/** 
      {selectedTurmaId !== null && (
        <DeleteModal
          isOpen={isModalOpen}
          onClose={closeModal}
          turmaId={selectedTurmaId}
        />
      )} */}
      {/* Sheet */}
      <SheetDocentes
        isOpen={isSheetOpen}
        onClose={closeSheet}
        turmaId={selectedTurmaId || 0}
        isEditMode={!!selectedTurmaId}
      />
      {/* Filtros */}
      <div className="flex space-x-4 mb-4 items-center">
        <div className="w-1/3">
          {/* Input de Pesquisa */}
          <Input
            value={pesquisa}
            isClearable
            onChange={handlePesquisaChange}
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
            }}
            placeholder="Pesquise pelo nome ou turma..."
            radius="lg"
            startContent={
              <Search className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>

        <div className="w-1/3">
          {/* Seletor de Ano */}
          <Select
            label="Selecione o ano"
            className="max-w-xs"
            selectedKeys={anoFiltro ? [anoFiltro] : []}
            onChange={(e) => handleAnoChange(e.target.value)}
          >
            {anosUnicos.map((ano) => (
              <SelectItem key={ano} value={ano}>
                {ano}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      {/* Exibição das turmas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-90">
        {turmasFiltradas.map((turma) => (
          <CardTurmas
            key={turma.id}
            date={`Ano: ${turma.ano}`}
            turma={turma.nome}
            courseName={turma.turma}
            tags={turma.tags}
            numbers={turma.numbers}
            location={turma.estado}
            color={turma.color}
            onDetailsClick={() => handleDeleteClick(turma.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TurmaList;
