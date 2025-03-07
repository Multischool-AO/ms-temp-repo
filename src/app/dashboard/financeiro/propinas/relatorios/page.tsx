import React from "react";
import { Card, CardHeader, CardBody, Button } from "@heroui/react";
import {
  Archive,
  ClipboardList,
  TrendingUp,
  Users,
  Bot,
  Zap,
} from "lucide-react";
import Nav from "@/components/nav/nav";
import { PieChartC } from "@/components/ui/piechart";
import { BarLineChart } from "@/components/ui/barLineChart";
import { BarVchart } from "@/components/ui/barVchart";
import { ChartConfig } from "@/components/ui/chart";
import TableStudentF from "@/components/dashboard/financeiro/propinas/tableStudent";



export default function ReportsPage() {
  const reportsByDepartment = [
    { name: "Matinal", value: 1500, fill: "#FF6384" }, // Cores explícitas
    { name: "Vespertino", value: 900, fill: "#36A2EB" },
    { name: "Noturno", value: 200, fill: "#FFCE56" },
  ];

  const reportsConfig = {
    Matinal: {
      label: "Matinal",
      color: "#FF6384",
    },
    Vespertino: {
      label: "Vespertino",
      color: "#36A2EB",
    },
    Noturno: {
      label: "Noturno",
      color: "#FFCE56",
    },
    "Departamento D": {
      label: "Departamento D",
      color: "#4BC0C0",
    },
  };

  const browserData = [
    { browser: "EPI", visitors: 187, fill: "var(--color-chrome)" },
    { browser: "EINF", visitors: 200, fill: "var(--color-safari)" },
    { browser: "EQUIM", visitors: 275, fill: "var(--color-firefox)" },
    { browser: "DIR", visitors: 173, fill: "var(--color-edge)" },
    { browser: "ECON", visitors: 90, fill: "var(--color-other)" },
  ];

  const browserConfig = {
    visitors: {
      label: "Activos",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  const enrollmentData = [
    { month: "Engenharia informática", desktop: 186, mobile: 80 },
    { month: "Economia", desktop: 305, mobile: 200 },
    { month: "Gestão empresarial", desktop: 237, mobile: 120 },
    { month: "Eng. de Prod. Industrial", desktop: 123, mobile: 190 },
    { month: "Contabilidade", desktop: 209, mobile: 130 },
    { month: "Direito", desktop: 214, mobile: 140 },
  ];

  const enrollmentConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "var(--color-safari)",
    },
  
  } satisfies ChartConfig;

  return (
    <Nav>
      <div className="flex flex-col gap-6 p-2">
        {/* Top Metrics */}
        <div className="grid grid-cols-4 gap-4">
          {[
            {
              title: "Total Pagas",
              value: 1500,
              icon: <ClipboardList className="w-6 h-6 text-white" />,
              bg: "bg-blue-500",
            },
            {
              title: "Total Pendentes",
              value: 410,
              icon: <Archive className="w-6 h-6 text-white" />,
              bg: "bg-yellow-500",
            },
            {
              title: "Inadimplentes",
              value: 100,
              icon: <TrendingUp className="w-6 h-6 text-white" />,
              bg: "bg-green-500",
            },
            {
              title: "Recentes",
              value: 1000,
              icon: <Users className="w-6 h-6 text-white" />,
              bg: "bg-purple-500",
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              className="flex items-center justify-between p-4 rounded-xl shadow-md bg-card"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bg} shadow-lg flex-shrink-0`}
                >
                  {item.icon}
                </div>
                <div className="max-w-[120px]">
                  <p className="text-sm text-muted-foreground truncate">
                    {item.title}
                  </p>
                  <h3 className="text-2xl font-semibold text-foreground truncate">
                    {item.value}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-4">
          {/* BarLineChart */}
          <BarLineChart
            data={enrollmentData}
            config={enrollmentConfig}
            title="Propinas por curso"
            description="Outubro 2024 - Janeiro 2025"
            footerText="Crescimento de 4,5% em relação ao ano passado"
            footerSubtext="A exibir a distribuição de propinas por curso nos últimos 12 meses"
            growthText="Crescimento de 4,5% em relação ao ano passado"
          />
          {/* PieChartC */}
          <PieChartC
            data={reportsByDepartment}
            config={reportsConfig}
            title="Propinas por Turno"
            description="Distribuição de propinas por turno neste semestre "
            centerLabel={{
              total: reportsByDepartment.reduce((acc, curr) => 40, 0),
              label: "de aumento",
            }}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <BarVchart
            title="Distribuição por Estado"
            description="Outubro 2024 - Fevereiro de 2025"
            data={browserData}
            config={browserConfig}
            trendText="Registou uma redução de 27,8% em relação ao ano passado"
            footerText="Estado do pagamento das propinas"
            activeIndex={2}
          />
          {/* To Do List */}
          <Card className="col-span-2 p-4 bg-card">
            <CardHeader>
              <h2 className="text-lg font-semibold text-foreground">
                Últimos relatórios gerados
              </h2>
            </CardHeader>
            <CardBody className="flex flex-col gap-3">
              {[
                {
                  task: "Rel 2120-EPI",
                  status: "Cancelado",
                  color: "bg-red-500",
                },
                {
                  task: "Rel 1040-EINF",
                  status: "Finalizado",
                  color: "bg-success-400",
                },
                {
                  task: "Rel 140-GEMP",
                  status: "Pendente",
                  color: "bg-yellow-400",
                },
                {
                  task: "Rel 120-GEMP",
                  status: "Finalizado",
                  color: "bg-success-400",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border p-3 rounded-md bg-background"
                >
                  <div>
                    <h4 className="font-medium text-foreground">{item.task}</h4>
                    <p className="text-sm text-muted-foreground">
                      Todos os estudantes com propinas atrasadas ou inadimplentes
                    </p>
                  </div>
                  <span
                    className={`text-xs text-white px-2 py-1 rounded-full ${item.color}`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

        <TableStudentF />

        {/* Updates */}
        <Card className="p-4 bg-card">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 flex items-center justify-center rounded-[2.5rem] bg-green-400">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground">
                Relatórios Rápidos e Fiáveis
              </h3>
              <p className="text-sm text-muted-foreground">
                Deixe a IA tratar das actualizações e obtenha relatórios claros
                e fiáveis.
              </p>
            </div>
            <Button
              size="sm"
              className="ml-auto bg-success text-white"
              endContent={<Bot />}
            >
              Gerar relatório com IA
            </Button>
          </div>
        </Card>
      </div>
    </Nav>
  );
}
