"use client";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Button } from "@heroui/react";
import React, { SVGProps } from "react";
import { Input } from "@heroui/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { PRESIDENTES, AREASENSINO } from "@/constants/academic";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const PlusIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M6 12h12" />
        <path d="M12 18V6" />
      </g>
    </svg>
  );
};

interface SheetDemoProps {
  deptId: number; // ID do curso para edição
  isEditMode?: boolean; // Modo de edição
  isOpen: boolean; // Controla se a sheet está aberta
  onClose: () => void; // Função para fechar a sheet
}

export function SheetDemo({
  deptId,
  isEditMode = false,
  isOpen,
  onClose,
}: SheetDemoProps) {
  const [name, setName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [institutionType, setInstitutionType] = useState<"superior" | "medio">(
    "superior"
  );
  const [duration, setDuration] = useState<number>(1);

  // Simulação de busca de dados do curso
  useEffect(() => {
    if (isEditMode && deptId) {
      // Aqui você pode buscar os dados do curso com base no `deptId`
      // Exemplo de dados simulados:
      const cursoData = {
        name: "Engenharia Informática",
        identifier: "ENG-INF",
        duration: 5,
        department: "DEEI",
        coordinator: "Sérgio Oliveira",
        price: 120000,
      };

      setName(cursoData.name);
      setIdentifier(cursoData.identifier);
      setDuration(cursoData.duration);
      // Preencha os outros campos conforme necessário
    }
  }, [deptId, isEditMode]);

  const generateIdentifier = (name: string) => {
    const words = name.trim().split(" ");
    if (words.length >= 2) {
      const acronym = (words[0][0] + words[1].slice(0, 3)).toUpperCase();
      setIdentifier("DEP - "+ acronym);
    } else if (words.length === 1) {
      const acronym = words[0].slice(0, 4).toUpperCase();
      setIdentifier("DEP - "+ acronym);
    } else {
      setIdentifier("");
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    generateIdentifier(newName);
  };

  const handleSave = () => {
    if (isEditMode) {
      console.log("Curso editado:", { deptId, name, identifier, duration });
    } else {
      console.log("Novo curso adicionado:", { name, identifier, duration });
    }
    onClose(); // Fechar a sheet após salvar
  };

  const colors = ["success"];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[540px] !max-w-none overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            {isEditMode
              ? `Editar Departamento: ${identifier}`
              : "Adicionar Novo Departamento"}
          </SheetTitle>
          <SheetDescription>
            {isEditMode
              ? "Edite os detalhes do departamento aqui. Clique em salvar quando terminar."
              : "Adicione os detalhes do novo departamento aqui. Clique em salvar quando terminar."}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              placeholder="Nome do departamento"
              value={name}
              onChange={handleNameChange}
              id="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="id">Identificador</Label>
            {colors.map((color) => (
              <Input
                key={color}
                color={"success"}
                id="identifier"
                value={identifier}
                readOnly
              />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="de">Descrição do departamento</Label>
            <Input placeholder="Descrição do curso" id="desc" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="de">Presidente</Label>
            <Select>
              <SelectTrigger className="max-w-lg">
                <SelectValue placeholder="Selecione o presidente" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {PRESIDENTES.map((dept) => (
                    <SelectItem key={dept.key} value={dept.key}>
                      Dr.(ª) {dept.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="de">Área de ensino</Label>
            <Select>
              <SelectTrigger className="max-w-lg">
                <SelectValue placeholder="Selecione a área de ensino" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {AREASENSINO.map((dept) => (
                    <SelectItem key={dept.key} value={dept.key}>
                      {dept.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={handleSave}>
              {isEditMode ? "Salvar Alterações" : "Salvar Departametno"}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
