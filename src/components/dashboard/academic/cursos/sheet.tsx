"use client";
import { useState, useEffect } from "react";
import { Textarea } from "@heroui/input";
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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEPARTAMENTOS, COORDENADORES } from "@/constants/academic";
import DurationInput from "./input";
import { toast } from "sonner"; // Importe o toast da biblioteca sonner

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
  cursoId?: number; // ID do curso para edição
  isEditMode?: boolean; // Modo de edição
  isOpen: boolean; // Controla se a sheet está aberta
  onClose: () => void; // Função para fechar a sheet
}

export function SheetDemo({
  cursoId,
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
    if (isEditMode && cursoId) {
      // Aqui você pode buscar os dados do curso com base no `cursoId`
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
  }, [cursoId, isEditMode]);

  const generateIdentifier = (name: string) => {
    const words = name.trim().split(" ");
    if (words.length >= 2) {
      const acronym = (words[0][0] + words[1].slice(0, 3)).toUpperCase();
      setIdentifier(acronym);
    } else if (words.length === 1) {
      const acronym = words[0].slice(0, 4).toUpperCase();
      setIdentifier(acronym);
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
      console.log("Curso editado:", { cursoId, name, identifier, duration });
      toast.success("Curso editado com sucesso!"); // Exibe um toast de sucesso
    } else {
      console.log("Novo curso adicionado:", { name, identifier, duration });
      toast.success("Novo curso criado com sucesso!"); // Exibe um toast de sucesso
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
              ? `Editar Curso: ${identifier}`
              : "Adicionar Novo Curso"}
          </SheetTitle>
          <SheetDescription>
            {isEditMode
              ? "Edite os detalhes do curso aqui. Clique em salvar quando terminar."
              : "Adicione os detalhes do novo curso aqui. Clique em salvar quando terminar."}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              placeholder="Nome do curso"
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
            <Textarea
              className="max-w-lg"
              defaultValue="Descreva o curso..."
              errorMessage="A descrição deve ter até 200 caracteres."
              isInvalid={true}
              label="Descrição"
              placeholder="Insira a descrição do curso"
              variant="bordered"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="de">Departamento</Label>
            <Select>
              <SelectTrigger className="max-w-lg">
                <SelectValue placeholder="Selecione o departamento" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {DEPARTAMENTOS.map((dept) => (
                    <SelectItem key={dept.key} value={dept.key}>
                      {dept.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="de">Coordenador do curso</Label>
            <Select>
              <SelectTrigger className="max-w-lg">
                <SelectValue placeholder="Selecione o coordenador" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {COORDENADORES.map((coord) => (
                    <SelectItem key={coord.key} value={coord.key}>
                      Prof. {coord.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="de">Duração (anos)</Label>
            <DurationInput
              institutionType={institutionType}
              value={duration}
              onChange={setDuration}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">kz</span>
                </div>
              }
              label="Preço"
              labelPlacement="outside"
              placeholder="0.00"
              type="number"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={handleSave}>
              {isEditMode ? "Salvar Alterações" : "Salvar Curso"}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
