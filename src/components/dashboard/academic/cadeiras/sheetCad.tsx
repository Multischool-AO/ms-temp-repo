import React, { useState, useEffect } from "react";
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
import { Button, Input, Checkbox } from "@heroui/react"; // Corrigir a importação de componentes
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PRESIDENTES, AREASENSINO, TIPOS_CADEIRA } from "@/constants/academic";

// import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { X } from "lucide-react";

const courses = [
  "Engenharia Informática",
  "Engenharia Mecânica",
  "Engenharia Civil",
  "Engenharia Elétrica",
  "Engenharia Química",
  "Engenharia de Produção",
  "Administração",
  "Economia",
  "Comunicação Social",
  "Psicologia",
  "Biologia",
  "Medicina",
  "Farmácia",
  "Medicina Veterinária",
  "Arquitetura",
  "Direito",
  "Engenharia Agronômica",
  "Educação",
  "Engenharia Computacional",
  "Física",
  "Química",
  "Matemática",
  "História",
  "Sociologia",
  "Filosofia",
  "Letras",
  "Música",
];

export default function CourseSelection() {
  // Definindo o tipo do estado como um array de strings
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  // Função para adicionar um curso
  const addCourse = (course: string) => {
    if (!selectedCourses.includes(course)) {
      setSelectedCourses((prev: string[]) => [...prev, course]);
    }
  };

  // Função para remover um curso
  const removeCourse = (course: string) => {
    setSelectedCourses((prev: string[]) =>
      prev.filter((c: string) => c !== course)
    );
  };

  // Função para selecionar todos os cursos
  const selectAllCourses = () => {
    setSelectedCourses([...courses]);
  };

  // Filtrando os cursos disponíveis
  const availableCourses = courses.filter(
    (course: string) => !selectedCourses.includes(course)
  );

  return (
    <div className="w-full p-4 bg-white rounded-xl shadow-lg border flex flex-col space-y-4 dark:bg-black">
      {/* Botões dos cursos selecionados */}
      <div className="flex flex-wrap gap-2">
        {selectedCourses.map((course: string) => (
          <div
            key={course}
            className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm dark:bg-gray-500"
          >
            <span className="text-gray-800 dark:text-white">{course}</span>
            <button
              onClick={() => removeCourse(course)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              <X className="w-4 h-4 " />
            </button>
          </div>
        ))}
      </div>

      {/* Popover para adicionar novos cursos */}
      <Popover>
        <PopoverTrigger asChild>
          <Button className="w-full">Adicionar curso</Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-2 bg-white shadow-lg rounded-lg dark:bg-gray-900">
          <ul className="space-y-2">
            {availableCourses.map((course: string) => (
              <li
                key={course}
                className="cursor-pointer p-2 hover:bg-gray-100 rounded-md"
                onClick={() => addCourse(course)}
              >
                {course}
              </li>
            ))}
          </ul>
          <Button className="mt-2 w-full" onClick={selectAllCourses}>
            Selecionar todos os cursos
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}

interface SheetDemoProps {
  cadId: number;
  isEditMode?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export function SheetCad({
  cadId,
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
  const [courseType, setCourseType] = useState<"anual" | "semestral">("anual");
  const [selectedCadeiras, setSelectedCadeiras] = useState<string[]>([]);

  // Simulação de busca de dados do curso
  useEffect(() => {
    if (isEditMode && cadId) {
      // Aqui você pode buscar os dados do curso com base no `cadId`
      // Exemplo de dados simulados:
      const cursoData = {
        name: "Estruturas de Dados e Algoritmos",
        identifier: "EDAD-I",
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
  }, [cadId, isEditMode]);

  const generateIdentifier = (
    name: string,
    courseType: "anual" | "semestral"
  ) => {
    const words = name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split(" ")
      .filter(
        (word) =>
          !["de", "e", "da", "do", "das", "dos"].includes(word.toLowerCase()) &&
          word.length > 0
      );

    let acronym = "";

    if (words.length >= 2) {
      acronym = (words[0][0] + words[1].slice(0, 3)).toUpperCase();
    } else if (words.length === 1) {
      acronym = words[0].slice(0, 4).toUpperCase();
    }

    if (courseType === "anual") {
      acronym += "-I";
    }

    setIdentifier(acronym);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    if (newName && courseType) {
      generateIdentifier(newName, courseType);
    }
  };

  const handleCourseTypeChange = (value: string) => {
    const newType = value as "anual" | "semestral";
    setCourseType(newType);

    if (name) {
      generateIdentifier(name, newType);
    }
  };

  const handleSave = () => {
    if (isEditMode) {
      console.log("Curso editado:", { cadId, name, identifier, duration });
    } else {
      console.log("Novo curso adicionado:", { name, identifier, duration });
    }
    onClose(); // Fechar a sheet após salvar
  };

  const options = [
    "Engenharia Informática",
    "Gestão Empresarial",
    "Ciências da Computação",
  ];
  const colors = ["success"];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[540px] !max-w-none overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            {isEditMode
              ? `Editar Cadeira: ${identifier}`
              : "Adicionar nova Cadeira"}
          </SheetTitle>
          <SheetDescription>
            {isEditMode
              ? "Edite os detalhes do Cadeira aqui. Clique em salvar quando terminar."
              : "Adicione os detalhes da nova Cadeira aqui. Clique em salvar quando terminar."}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              placeholder="Nome da Cadeira"
              value={name}
              onChange={handleNameChange}
              id="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="de">Tipo</Label>
            <Select onValueChange={handleCourseTypeChange}>
              <SelectTrigger className="max-w-lg">
                <SelectValue placeholder="Selecione o tipo de cadeira" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {TIPOS_CADEIRA.map((cad) => (
                    <SelectItem key={cad.key} value={cad.key}>
                      {cad.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
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
            <Label htmlFor="de">Cursos associados</Label>
            <CourseSelection />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="de">Carga horária (em h)</Label>
            <Input placeholder="0" type="number" id="nest" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={handleSave}>
              {isEditMode ? "Salvar Alterações" : "Salvar Cadeira"}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
