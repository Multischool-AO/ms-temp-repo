"use client";

import { Tabs as NextUITabs, Tab } from "@heroui/react";
import { BarChart3, Boxes, List } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Analytics from "./analytics";

const Tabs = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const [selected, setSelected] = useState(tab || "products");

  useEffect(() => {
    setSelected(tab || "products");
  }, [tab]);

  return (
    <NextUITabs
      variant="underlined"
      aria-label="Products"
      color="primary"
      className="max-w-full overflow-x-scroll md:overflow-hidden"
      selectedKey={selected}
    >
      <Tab
        key="products"
        as={Link}
        href="/dashboard/products"
        title={
          <div className="flex items-center gap-2">
            <List size={20} />
            <span>Turmas</span>
          </div>
        }
      >
        <h1 className="my-5 text-xl text-zinc-400">Todos as turmas </h1>
        {children}
      </Tab>
      {/* <Tab
        key="stats"
        href="/dashboard/products?tab=stats"
        as={Link}
        title={
          <div className="flex items-center gap-2">
            <BarChart3 size={20} />
            <span>Stats</span>
          </div>
        }
      >
        <Analytics />
      </Tab> */}
    </NextUITabs>
  );
};

export default Tabs;
