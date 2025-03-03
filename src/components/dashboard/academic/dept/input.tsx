"use client";

import { Input } from "@heroui/input";
import { useState } from "react";
import { DurationInputProps } from "@/lib/types/academic";

export default function DurationInput({ institutionType }: DurationInputProps) {
  const [years, setYears] = useState<string>("");
  const [periods, setPeriods] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setYears(value);

    const numericValue = parseInt(value, 10);

    if (!isNaN(numericValue)) {
      if (institutionType === "superior") {
        setPeriods(numericValue * 2);
      } else if (institutionType === "medio") {
        setPeriods(numericValue * 3);
      }
    } else {
      setPeriods(0);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Input
        type="number"
        // label="Duração (anos)"
        placeholder="Ex.: 4"
        value={years}
        onChange={handleChange}
        min={1}
        className="w-full"
      />
      <p className="text-sm text-gray-500">
        {years
          ? `Duração calculada: ${periods} ${institutionType === "superior" ? "semestres" : "trimestres"}`
          : "Digite a duração em anos para calcular."}
      </p>
    </div>
  );
}
