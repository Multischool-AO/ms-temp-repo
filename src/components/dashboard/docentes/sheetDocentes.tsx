import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
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
import { AREASENSINO, ANOACADEMICO, SALAS } from "@/constants/academic";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

interface SheetDemoProps {
  turmaId?: number | null;
  isEditMode?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const existingClasses = [
  "GEMP1-M1",
  "GEMP2-M1",
  "GEMP1-T1",
  "GEMP1-T2",
  "GEMP3-T2",
];

const ANOS_UNICOS = ["1", "2", "3"]; // Anos disponíveis para seleção
const PERIODOS_UNICOS = ["manhã", "tarde", "noite"]; // Períodos disponíveis

export function SheetDocentes({
  turmaId,
  isEditMode = false,
  isOpen,
  onClose,
}: SheetDemoProps) {
  const [courseName, setCourseName] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [year, setYear] = useState<string | null>(null);
  const [period, setPeriod] = useState("");

  const generateIdentifier = (
    courseName: string,
    existingClasses: string[]
  ): string => {
    if (!courseName || !year || !period) return "";

    const words = courseName.trim().split(" ");
    let acronym =
      words.length >= 2
        ? (words[0][0] + words[1].slice(0, 3)).toUpperCase()
        : words[0].slice(0, 4).toUpperCase();

    const periodAcronym = period.charAt(0).toUpperCase();

    const matchingClasses = existingClasses
      .filter((className) =>
        className.startsWith(`${acronym}${year}-${periodAcronym}`)
      )
      .map((className) => parseInt(className.split("-")[1].slice(1)))
      .filter((num) => !isNaN(num));

    const nextNumber =
      matchingClasses.length > 0 ? Math.max(...matchingClasses) + 1 : 1;

    return `${acronym}${year}-${periodAcronym}${nextNumber}`;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setCourseName(newName);

    if (year && period) {
      const newIdentifier = generateIdentifier(newName, existingClasses);
      setIdentifier(newIdentifier);
    }
  };

  const handleSave = () => {
    if (isEditMode) {
      console.log("Turma editada:", { turmaId, courseName, identifier });
    } else {
      console.log("Nova turma adicionada:", { courseName, identifier });
    }
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[540px] !max-w-none overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            {isEditMode
              ? `Editar Material: ${identifier}`
              : "Adicionar Novo Material"}
          </SheetTitle>
          <SheetDescription>
            {isEditMode
              ? "Edite os detalhes do material aqui. Clique em salvar quando terminar."
              : "Adicione os detalhes do novo material aqui. Clique em salvar quando terminar."}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Curso</Label>
            <Input
              placeholder="Nome do material"
              value={courseName}
              onChange={handleNameChange}
              id="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="ano">Selecione o ano</Label>
            <Select
              value={year || ""}
              onValueChange={(value) => setYear(value)}
            >
              <SelectTrigger aria-labelledby="ano" className="max-w-lg">
                <SelectValue placeholder="Selecione o ano" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {ANOS_UNICOS.map((ano) => (
                    <SelectItem key={ano} value={ano}>
                      {ano}º Ano
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="periodo">Selecione o turno</Label>
            <Select value={period} onValueChange={(value) => setPeriod(value)}>
              <SelectTrigger aria-labelledby="periodo" className="max-w-lg">
                <SelectValue placeholder="Selecione o período" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {PERIODOS_UNICOS.map((per) => (
                    <SelectItem key={per} value={per}>
                      {per.charAt(0).toUpperCase() + per.slice(1)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="identifier">Identificador</Label>
            <Input
              color="success"
              id="identifier"
              value={identifier}
              readOnly
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="de">Ano académico</Label>
            <Select>
              <SelectTrigger className="max-w-lg">
                <SelectValue placeholder="Selecione o semestre" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {ANOACADEMICO.map((turma) => (
                    <SelectItem key={turma.key} value={turma.key}>
                      {turma.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="de">Departamento</Label>
            <Select>
              <SelectTrigger className="max-w-lg">
                <SelectValue placeholder="Selecione a área de ensino" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {AREASENSINO.map((turma) => (
                    <SelectItem key={turma.key} value={turma.key}>
                      {turma.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="de">Sala</Label>
            <Select>
              <SelectTrigger className="max-w-lg">
                <SelectValue placeholder="Selecione a sala" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {SALAS.map((turma) => (
                    <SelectItem key={turma.key} value={turma.key}>
                      {turma.label}
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
              {isEditMode ? "Salvar Alterações" : "Salvar Turma"}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
