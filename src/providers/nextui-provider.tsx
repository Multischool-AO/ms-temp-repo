"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const NextUIProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider className="flex flex-1 flex-col">
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
};

export default NextUIProvider;
