"use client";

import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./sub-menu";
import { motion } from "framer-motion";
import { ChevronLeft, LayoutDashboard, Menu } from "lucide-react";

import {
  LayoutGrid,
  GraduationCap,
  Wallet,
  LineChart,
  UserCheck,
  BotIcon,
  Calendar,
} from "lucide-react";

import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarFooter } from "../ui/sidebar";
import { NavUser } from "../nav-user";

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

import Icon from "../ui/icon";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 912px)" });
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname, isTabletMid]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const data = {
    user: {
      name: "José de Almeida",
      email: "Secretário Administrativo",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    },
  };

  return (
    <div>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-msprimary text-sidebar-primary-foreground">
                  <Icon name="home"></Icon>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    Multischool Angola
                  </span>
                  <span className="truncate text-xs">ISPTEC - Luanda</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[48] max-h-screen bg-black/50 lg:hidden ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="text-gray fixed z-[49] h-screen w-[16rem] max-w-[16rem] overflow-hidden bg-white dark:bg-dark lg:relative"
      >
        <div className="flex h-full flex-col pb-32">
          <ul className="scrollbar-thin flex flex-1 flex-col gap-1 overflow-x-hidden whitespace-pre px-2.5 py-5 text-[0.9rem] font-medium md:h-[68%]">
            <li>
              <Link
                href="/dashboard"
                className={`${
                  pathname === "/dashboard" &&
                  "bg-zinc-200 text-primary dark:bg-zinc-800"
                } flex cursor-default items-center gap-5 rounded-md p-2.5 font-medium duration-300 md:cursor-pointer`}
              >
                <LayoutDashboard size={23} className="min-w-max" />
                Dashboard
              </Link>
            </li>
            <div className="flex flex-col">
              <SubMenu
                isOpen={open}
                data={{
                  name: "Académico",
                  icon: GraduationCap,
                  menus: [
                    {
                      title: "Cursos",
                      url: "/academico/cursos",
                    },
                    {
                      title: "Departamentos",
                      url: "/academico/departamentos",
                    },
                    { title: "Turmas", url: "/academico/turmas" },
                    { title: "Cadeiras", url: "/academico/cadeiras" },
                    {
                      title: "Matrículas e Transferências",
                      url: "/academico/matriculas",
                    },
                    { title: "Estudantes", url: "/academico/estudantes" },
                    // { title: "Docentes", url: "/matriculas" },
                  ],
                }}
              />
              <SubMenu
                isOpen={open}
                data={{
                  name: "Financeiro",
                  icon: Wallet,
                  menus: [
                    { title: "Propinas", url: "/financeiro/propinas" },
                    { title: "Pagamentos", url: "/financeiro/pagamentos" },
                    // { title: "Facturas", url: "/receita" },
                    { title: "Créditos", url: "/financeiro/creditos" },
                  ],
                }}
              />
              <SubMenu
                isOpen={open}
                data={{
                  name: "Avaliações e notas",
                  icon: LineChart,
                  menus: [
                    { title: "Visão geral", url: "/avalnotas/resumo" },
                    { title: "Desempenho", url: "/avalnotas/desempenho" },
                  ],
                }}
              />
              <SubMenu
                isOpen={open}
                data={{
                  name: "Secção do docente",
                  icon: UserCheck,
                  menus: [
                    { title: "Cadeiras", url: "/docente/cadeiras" },
                    { title: "Notas e avaliações", url: "/docente/notas" },
                    // { title: "Trabalhos", url: "/products" },
                    { title: "Materiais", url: "/docente/materiais" },
                    // { title: "Videoaulas", url: "/docente/videoaulas" },
                  ],
                }}
              />
              <SubMenu
                isOpen={open}
                data={{
                  name: "Gerados por IA",
                  icon: BotIcon,
                  menus: [
                    { title: "Relatórios", url: "/ia/relatorios" },
                    {
                      title: "Estatísticas",
                      url: "/ia/estatisticas",
                    },
                  ],
                }}
              />
              <li>
                <Link
                  href="/dashboard/calendarios"
                  className={`${
                    pathname === "/dashboard/offers" && "text-primary"
                  } flex cursor-default items-center justify-start rounded-md bg-transparent p-3 font-medium outline-none duration-300 md:cursor-pointer`}
                >
                  <Calendar size={23} className="min-w-max" />
                  <p className="ml-5 flex-1 text-left capitalize">
                    Calendários
                  </p>
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  rotate: 0,
                }
              : {
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className={`absolute bottom-3 ${
            open ? "right-2" : "right-5"
          } z-50 hidden h-fit w-fit cursor-pointer md:block`}
        >
          <SidebarFooter>
            <NavUser user={data.user} />
          </SidebarFooter>

          <ChevronLeft size={25} />
        </motion.div>
      </motion.div>
      <div
        className="absolute top-3 z-20 m-3 cursor-pointer md:top-5 lg:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
