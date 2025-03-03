"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react"; // Importe useEffect e useState

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // Estado para verificar se o componente foi montado

  // useEffect para garantir que o código seja executado apenas no cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  // Se o componente não foi montado, não renderize nada
  if (!mounted) {
    return null;
  }

  return (
    <Button
      isIconOnly
      variant="light"
      size="sm"
      radius="full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="text-zinc-400" />
      ) : (
        <Moon className="text-zinc-500" />
      )}
    </Button>
  );
}
