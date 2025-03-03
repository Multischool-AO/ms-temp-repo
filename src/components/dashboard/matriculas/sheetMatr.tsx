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
import { TIPOSESTUDANTE, CURSOS_SUPERIOR, TURNO } from "@/constants/academic";

// import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { X } from "lucide-react";

import FileInput from "@/components/ui/inputFile";

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

export default function CadeirasEspecial() {
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
          <Button className="w-full">Matricular estudante</Button>
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

export function SheetMatr({
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
  const [tipoEstudante, setTipoEstudante] = useState<string>("");
  const [periodo, setPeriodo] = useState<string>("");

  // Array de identificadores já usados (simulação)
  const [usedIdentifiers, setUsedIdentifiers] = useState<number[]>([
    20250001, 20250002, 20250003,
  ]);

  // Função para gerar um identificador único
  const generateUniqueIdentifier = () => {
    let newIdentifier: number;
    do {
      // Gera um número sequencial de 4 dígitos
      newIdentifier = 20250000 + usedIdentifiers.length + 1;
    } while (usedIdentifiers.includes(newIdentifier)); // Garante que não seja repetido

    // Adiciona o novo identificador ao array de usados
    setUsedIdentifiers((prev) => [...prev, newIdentifier]);

    // Retorna o identificador formatado como string
    return newIdentifier.toString();
  };

  // Gera o identificador automaticamente ao abrir o componente
  useEffect(() => {
    if (isOpen) {
      const newIdentifier = generateUniqueIdentifier();
      setIdentifier(newIdentifier);
    }
  }, [isOpen]);

  const handleTipoEstudanteChange = (value: string) => {
    setTipoEstudante(value);
  };

  const handlePeriodoChange = (value: string) => {
    setPeriodo(value);
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

  const turmasMatinal = ["EINF-M1", "EINF-M2", "EINF-M3", "GEMP-M1", "GEMP-M2"];
  const turmasVespertino = [
    "EINF-T1",
    "EINF-T2",
    "EINF-T3",
    "GEMP-T1",
    "GEMP-T2",
  ];
  const turmasNoturno = ["EINF-N1", "EINF-N2", "EINF-N3", "GEMP-N1", "GEMP-N2"];
  
  const handleFileChange = (file: File | null) => {
    if (file) {
      console.log("Arquivo válido selecionado:", file);
    } else {
      console.log("Nenhum arquivo válido selecionado.");
    }
  };

  const turmas =
    periodo === "Matinal"
      ? turmasMatinal
      : periodo === "Vespertino"
        ? turmasVespertino
        : turmasNoturno;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[540px] !max-w-none overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            {isEditMode
              ? `Editar matrícula: ${identifier}`
              : "Matricular novo estudante"}
          </SheetTitle>
          <SheetDescription>
            {isEditMode
              ? "Edite os detalhes da matrícula aqui. Clique em salvar quando terminar."
              : "Adicione os detalhes do novo estudante aqui. Clique em salvar quando terminar."}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 pt-7">
          <Label htmlFor="id">Número de matrícula</Label>
          {colors.map((color) => (
            <Input
              key={color}
              id="identifier"
              value={identifier}
              color={"success"}
              readOnly
            />
          ))}
        </div>
        <div className="grid gap-6 py-4 pt-7">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nome do estudante</Label>
            <Input placeholder="Nome do estudante" value={name} id="name" />
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <Label htmlFor="de">Tipo de estudante</Label>
            <Select onValueChange={handleTipoEstudanteChange}>
              <SelectTrigger className="max-w-lg">
                <SelectValue placeholder="Selecione o tipo de estudante" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {TIPOSESTUDANTE.map((matr) => (
                    <SelectItem key={matr.key} value={matr.key}>
                      {matr.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Bilhete de Identidade/Passaporte</Label>
            <Input
              placeholder="Documento de identificação"
              value={name}
              id="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <FileInput
              label="Selecione um arquivo"
              helpText="Apenas arquivos .pdf, .docx ou .jpg são permitidos."
              acceptedTypes={[".pdf", ".docx", ".jpg", ".jpeg"]}
              onChange={handleFileChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Número de telefone 1</Label>
            <Input placeholder="(+244) XXX XXX XXX" value={name} id="name" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Número de telefone 2 (Opcional)</Label>
            <Input placeholder="(+244) XXX XXX XXX" value={name} id="name" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="de">Curso</Label>
            <Select>
              <SelectTrigger className="max-w-lg">
                <SelectValue placeholder="Selecione o curso" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {CURSOS_SUPERIOR.map((matr) => (
                    <SelectItem key={matr.key} value={matr.key}>
                      {matr.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="de">Turno</Label>
            <Select onValueChange={handlePeriodoChange}>
              <SelectTrigger className="max-w-lg">
                <SelectValue placeholder="Selecione o período" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {TURNO.map((matr) => (
                    <SelectItem key={matr.key} value={matr.key}>
                      {matr.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="de">Turma</Label>
            <Select>
              <SelectTrigger className="max-w-lg">
                <SelectValue placeholder="Selecione a turma" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {turmas.map((turma) => (
                    <SelectItem key={turma} value={turma}>
                      {turma}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {(tipoEstudante === "Transferido" ||
            tipoEstudante === "Especial") && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="de">Selecionar cadeiras/equivalência</Label>
              <CadeirasEspecial />
            </div>
          )}
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
