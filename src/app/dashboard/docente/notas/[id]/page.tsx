"use client";
import Nav from "@/components/nav/nav";
import { useParams, useRouter } from "next/navigation";
import * as React from "react";

export default function Estudante() {
  const { id } = useParams();

  return (
    <div>
      <Nav>
        <EditableGradesTable />
      </Nav>
    </div>
  );
}

import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

import { Input2 } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const studentsData = [
  {
    id: 1,
    matricula: "20241001",
    nome: "João Silva",
    turma: "A1",
    curso: "Engenharia Informática",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 2,
    matricula: "20241002",
    nome: "Maria Santos",
    turma: "A1",
    curso: "Engenharia Informática",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 3,
    matricula: "20241003",
    nome: "Carlos Mendes",
    turma: "A2",
    curso: "Gestão Empresarial",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 4,
    matricula: "20241004",
    nome: "Ana Oliveira",
    turma: "B1",
    curso: "Medicina",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 5,
    matricula: "20241005",
    nome: "Ricardo Costa",
    turma: "B2",
    curso: "Direito",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 6,
    matricula: "20241006",
    nome: "Tatiana Gomes",
    turma: "C1",
    curso: "Engenharia Civil",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 7,
    matricula: "20241007",
    nome: "Fernando Ribeiro",
    turma: "C2",
    curso: "Arquitetura",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 8,
    matricula: "20241008",
    nome: "Beatriz Lima",
    turma: "D1",
    curso: "Ciências da Computação",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 9,
    matricula: "20241009",
    nome: "Gustavo Nunes",
    turma: "D2",
    curso: "Administração",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 10,
    matricula: "20241010",
    nome: "Lara Fernandes",
    turma: "E1",
    curso: "Psicologia",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 11,
    matricula: "20241011",
    nome: "Rafael Martins",
    turma: "E2",
    curso: "Engenharia Elétrica",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 12,
    matricula: "20241012",
    nome: "Camila Rocha",
    turma: "F1",
    curso: "Marketing",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 13,
    matricula: "20241013",
    nome: "Paulo Andrade",
    turma: "F2",
    curso: "Ciências Contábeis",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 14,
    matricula: "20241014",
    nome: "Juliana Xavier",
    turma: "G1",
    curso: "Engenharia Mecânica",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 15,
    matricula: "20241015",
    nome: "Vitor Lopes",
    turma: "G2",
    curso: "Ciências Biológicas",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 16,
    matricula: "20241016",
    nome: "Bianca Souza",
    turma: "H1",
    curso: "Física",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 17,
    matricula: "20241017",
    nome: "Roberto Figueiredo",
    turma: "H2",
    curso: "Matemática",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 18,
    matricula: "20241018",
    nome: "Patrícia Barros",
    turma: "I1",
    curso: "Química",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 19,
    matricula: "20241019",
    nome: "Daniel Neves",
    turma: "I2",
    curso: "Engenharia de Produção",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
  {
    id: 20,
    matricula: "20241020",
    nome: "Vanessa Cunha",
    turma: "J1",
    curso: "Farmácia",
    PP1: "",
    PP2: "",
    exame: "",
    recurso: "",
    media: "",
    estado: "",
  },
];


export function EditableGradesTable() {
  const [students, setStudents] = useState(studentsData);

  const handleChange = (id, field, value) => {
    let numericValue = parseFloat(value);
    if (numericValue < 1) numericValue = 1;
    if (numericValue > 20) numericValue = 20;

    setStudents((prev) =>
      prev.map((student) => {
        if (student.id === id) {
          const updatedStudent = { ...student, [field]: numericValue };
          updatedStudent.media = calculateMedia(updatedStudent);
          updatedStudent.estado = determineStatus(updatedStudent);
          return updatedStudent;
        }
        return student;
      })
    );
  };

  const calculateMedia = (student) => {
    const PP1 = parseFloat(student.PP1) || 0;
    const PP2 = parseFloat(student.PP2) || 0;
    const exame = parseFloat(student.exame) || 0;
    const recurso = parseFloat(student.recurso);

    if (!isNaN(recurso)) return recurso.toFixed(2); // Nota seca

    const mediaPPs = ((PP1 + PP2) / 2) * 0.4;
    const mediaExame = exame * 0.6;
    return (mediaPPs + mediaExame).toFixed(2);
  };

  const determineStatus = (student) => {
    const media = parseFloat(student.media);
    if (isNaN(media)) return "Recurso";
    if (media > 9.3) return "Aprovado";
    if (!student.recurso) return "Recurso";
    return "Reprovado";
  };

  const publishGrades = () => {
    console.log("Notas publicadas", students);
  };

  return (
    <div className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Nº Matrícula</TableCell>
            <TableCell>Nome Completo</TableCell>
            <TableCell>Turma</TableCell>
            <TableCell>Curso</TableCell>
            <TableCell>PP1</TableCell>
            <TableCell>PP2</TableCell>
            <TableCell>Exame</TableCell>
            <TableCell>Recurso</TableCell>
            <TableCell>Média Final</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.matricula}</TableCell>
              <TableCell>{student.nome}</TableCell>
              <TableCell>{student.turma}</TableCell>
              <TableCell>{student.curso}</TableCell>
              {["PP1", "PP2", "exame", "recurso"].map((field) => (
                <TableCell key={field}>
                  <Input2
                    type="number"
                    value={student[field] || ""}
                    onChange={(e) =>
                      handleChange(student.id, field, e.target.value)
                    }
                    className="w-16"
                  />
                </TableCell>
              ))}
              <TableCell>{student.media}</TableCell>
              <TableCell
                className={
                  student.estado === "Aprovado"
                    ? "text-green-600 font-bold"
                    : student.estado === "Reprovado"
                      ? "text-red-600 font-bold"
                      : ""
                }
              >
                {student.estado}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4">
        <Button
          onClick={publishGrades}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Publicar Notas
        </Button>
      </div>
    </div>
  );
}

