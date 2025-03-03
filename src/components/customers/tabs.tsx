"use client";

import { Tabs as NextUITabs, Tab } from "@heroui/react";
import { BarChart3, UserMinus, Users } from "lucide-react";
import Analytics from "./analytics";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const Tabs = ({ children }: { children: React.ReactNode[] }) => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const [selected, setSelected] = useState(tab || "customers");

  useEffect(() => {
    setSelected(tab || "customers");
  }, [tab]);

  return (
    <NextUITabs
      variant="underlined"
      aria-label="Customers"
      color="primary"
      className="max-w-full overflow-x-scroll md:overflow-hidden"
      selectedKey={selected}
    >
      <Tab
        key="customers"
        as={Link}
        href="/dashboard/administrativo/matriculas"
        title={
          <div className="flex items-center gap-2">
            <Users size={20} />
            <span>Matrículas</span>
          </div>
        }
      >
        <h1 className="mt-5 text-xl text-zinc-400">Visão geral - Matrículas</h1>
        {children[0]}
      </Tab>
      {/* <Tab
        key="guest"
        as={Link}
        href="/dashboard/customers?tab=guest"
        title={
          <div className="flex items-center gap-2">
            <UserMinus size={20} />
            <span>Estudantes desvinculados</span>
          </div>
        }
      >
        <h1 className="my-5 text-xl text-zinc-400">Todos</h1>
        {children[1]}
      </Tab> */}
      <Tab
        key="analytics"
        href="/dashboard/administrativo/matriculas?tab=analytics"
        as={Link}
        title={
          <div className="flex items-center gap-2">
            <BarChart3 size={20} />
            <span>Estatísticas</span>
          </div>
        }
      >
        <Analytics />
      </Tab>
    </NextUITabs>
  );
};

export default Tabs;
