"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input2 } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
const calendario = [
  { dia: 26, descricao: "Prova de Física Geral I", horas: "14h" },
  { dia: 10, descricao: "Prova de Programação III", horas: "10h" },
  { dia: 26, descricao: "Prova de IA", horas: "16h" },
];

export default function Agenda() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Fevereiro de 2025</h2>
        <Button variant="default" onClick={() => setOpen(true)}>
          Nova Prova
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-2 border rounded-lg p-4 bg-white shadow-md">
        {dias.map((dia) => (
          <div key={dia} className="text-center font-semibold text-gray-600">
            {dia}
          </div>
        ))}
        {[...Array(31)].map((_, index) => {
          const evento = calendario.find((e) => e.dia === index + 1);
          return (
            <Card
              key={index}
              className="p-2 h-20 flex flex-col items-center justify-center"
            >
              <span className="text-sm font-bold">{index + 1}</span>
              {evento && (
                <CardContent
                  className={cn(
                    "text-xs text-center rounded-md mt-1 px-2 py-1 bg-blue-200"
                  )}
                >
                  {evento.descricao} ({evento.horas})
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nova Prova</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input2 placeholder="Nome da Prova" />
            <Input2 placeholder="Data" type="date" />
            <Input2 placeholder="Hora" type="time" />
            <Button onClick={() => setOpen(false)}>Salvar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
