"use client";
import Nav from "@/components/nav/nav";
import { useParams, useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Avatar } from "@heroui/react";
import { Edit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ests } from "@/constants/academic";

export default function Estudante() {
  const { id } = useParams();

  return (
    <div>
      <Nav>
        <DetailsStudent />
        <div className="pt-10">
          <TableInstit />
        </div>
      </Nav>
    </div>
  );
}

import * as React from "react";

import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TableInstit from "@/components/dashboard/matriculas/tableInstit";

export function DetailsStudent() {
  const { id } = useParams(); // Captura o número de matrícula da URL

  // Verificar se nmatr existe e garantir que seja uma string
  const studentNmatr = Array.isArray(id) ? id[0] : id;

  // Se nmatr não existir ou não for uma string, exibir mensagem de erro
  if (!studentNmatr || typeof studentNmatr !== "string") {
    return <div>Número de matrícula inválido ou não fornecido.</div>;
  }

  // Remover espaços em branco do nmatr
  const trimmedNmatr = studentNmatr.trim();

  // Encontrar o estudante com base no número de matrícula
  const student = ests.find((est) => est.nmatr.trim() === trimmedNmatr);

  if (!student) {
    return <div>Estudante não encontrado</div>;
  }

  return (
    <div className="p-1 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Profile Card */}
      <Card className="p-6 flex flex-col items-center text-center shadow-lg rounded-xl dark:bg-zinc-900">
        <Avatar
          isBordered
          color="success"
          className="w-24 h-24 mb-4"
          src={student.avatar}
        />
        <h1 className="text-lg font-semibold mt-4">{student.est}</h1>
        <Badge className="mt-5 px-6 py-2 bg-msprimary text-white rounded-full">
          Nº matrícula: {student.nmatr}
        </Badge>
        <div className="mt-4 text-gray-500 text-sm justify-start text-start dark:text-foreground-500">
          <p className="pt-3">
            <b>Curso: </b> Engenharia Informática
          </p>

          <p className="pt-4">
            <b>Ano académico: </b> {student.ano}
          </p>
          <p className="pt-4">
            <b>Turma: </b> {student.trm}
          </p>
          <p className="pt-4">
            {" "}
            <b>Turno: </b> Noturno
          </p>
          <p className="pt-4">
            <b>Estado: </b> {student.status}
          </p>
        </div>
      </Card>

      <div className="flex flex-col gap-6 col-span-2">
        {/* Account Details */}
        <Card className="p-6 relative shadow-lg rounded-xl dark:bg-zinc-900">
          <Edit size={16} className="absolute top-4 right-4 text-gray-500 " />
          <h3 className="text-lg font-semibold mb-4">Informações pessoais</h3>
          <div className="text-sm text-gray-700 space-y-2 dark:text-foreground-500">
            <p>
              <strong>Bilhete de identidade:</strong> 02984932LD2940
            </p>
            <p>
              <strong>Gênero:</strong> Feminino
            </p>
            <p>
              <strong>Nacionalidade: </strong> Angolana
            </p>
            <p>
              <strong>Data de nascimento:</strong> 17/05/2002
            </p>
          </div>
        </Card>

        {/* Shipping Address */}
        <Card className="p-6 relative shadow-lg rounded-xl dark:bg-zinc-900">
          <Edit size={16} className="absolute top-4 right-4 text-gray-500 " />
          <h3 className="text-lg font-semibold mb-4">Endereço</h3>
          <div className="text-sm text-gray-700 space-y-2 dark:text-foreground-500">
            <p>
              <strong>Cidade:</strong> Luanda
            </p>
            <p>
              <strong>Município:</strong> Talatona
            </p>
            <p>
              <strong>Bairro:</strong> Camama
            </p>
            <p>
              <strong>Rua:</strong> 25
            </p>
            <p>
              <strong>Casa nº:</strong> 17
            </p>
          </div>
        </Card>
      </div>

      {/* <div className="flex gap-6 bg-black w-full min-h-screen"> */}
      {/* Student Information */}
      <Card className="p-6 shadow-lg rounded-xl w-[550px] dark:bg-zinc-900">
        <Edit size={16} className="absolute top-4 right-4 text-gray-500" />
        <h3 className="text-lg font-semibold mb-4">Cartões</h3>
        <Carousel className="w-[400px] flex flex-col items-center ml-12">
          <div className="mb-2">
            <CarouselPrevious />
          </div>
          <CarouselContent>
            <CarouselItem className="p-2">
              <Card className="p-6 shadow-lg rounded-xl">
                <CardContent className="text-center">
                  <p className="text-lg font-bold">
                    Instituto Superior Politécnico de Tecnologias e Ciências -
                    ISPTEC
                  </p>
                  <p className="text-sm">Nome: Ana Correia de Assis Diogo</p>
                  <p className="text-sm">Curso: Engenharia Informática</p>
                  <p className="text-sm">Nº Matrícula: 20242190</p>
                  <p className="text-sm">Turma: ElNF-M1</p>
                  <p className="text-sm">Multischool Angola</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="p-2">
              <Card className="p-6 shadow-lg rounded-xl">
                <CardContent className="text-center">
                  <p className="text-lg font-bold">Multischool Angola</p>
                  <p className="text-sm">Telefone: 0433451609</p>
                  <p className="text-sm">Saldo: 50.000,00 Kz</p>
                  <p className="text-sm">Operadora: Kwik</p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <div className="mt-2">
            <CarouselNext />
          </div>
        </Carousel>
      </Card>

      {/* Student Profile */}
      <Card className="p-6 relative shadow-lg rounded-xl w-[400px] ml-60 dark:bg-zinc-900">
        <Avatar
          isBordered
          color="success"
          className="w-24 h-24 mb-4"
          src={student.avatar}
        />
        <h1 className="text-lg font-semibold mt-4">Informações académicas</h1>
        <Badge className="mt-5 px-6 py-2 bg-msprimary text-white rounded-full">
          Nº matrícula: {student.nmatr}
        </Badge>
        <div className="mt-4 text-gray-500 text-sm text-start dark:text-foreground-500">
          <p className="pt-3">
            <b>Curso: </b> Engenharia Informática
          </p>
          <p className="pt-4">
            <b>Ano académico: </b> {student.ano}
          </p>
          <p className="pt-4">
            <b>Turma: </b> {student.trm}
          </p>
          <p className="pt-4">
            <b>Turno: </b> Noturno
          </p>
          <p className="pt-4">
            <b>Estado: </b> {student.status}
          </p>
        </div>
      </Card>
      {/* </div> */}
    </div>
  );
}
