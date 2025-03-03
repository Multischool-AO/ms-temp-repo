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
import TableRelatorios from "@/components/dashboard/academic/dept/tableRel";
import { PieChartC } from "@/components/ui/piechart";

export default function ReportsPage() {
  const reportsByDepartment = [
    { name: "Departamento A", value: 15, fill: "#FF6384" }, // Cores explícitas
    { name: "Departamento B", value: 10, fill: "#36A2EB" },
    { name: "Departamento C", value: 8, fill: "#FFCE56" },
    { name: "Departamento D", value: 5, fill: "#4BC0C0" },
  ];

  const reportsConfig = {
    "Departamento A": {
      label: "Departamento A",
      color: "#FF6384",
    },
    "Departamento B": {
      label: "Departamento B",
      color: "#36A2EB",
    },
    "Departamento C": {
      label: "Departamento C",
      color: "#FFCE56",
    },
    "Departamento D": {
      label: "Departamento D",
      color: "#4BC0C0",
    },
  };

  return (
    <Nav>
      <div className="flex flex-col gap-6 p-2">
        {/* Top Metrics */}
        <div className="grid grid-cols-4 gap-4">
          {[
            {
              title: "Departamentos Activos",
              value: 15,
              icon: <ClipboardList className="w-6 h-6 text-white" />,
              bg: "bg-blue-500",
            },
            {
              title: "Departamentos Inativos",
              value: 21,
              icon: <Archive className="w-6 h-6 text-white" />,
              bg: "bg-yellow-500",
            },
            {
              title: "Relatórios Gerados",
              value: 3,
              icon: <TrendingUp className="w-6 h-6 text-white" />,
              bg: "bg-green-500",
            },
            {
              title: "Total de funcionários",
              value: 10,
              icon: <Users className="w-6 h-6 text-white" />,
              bg: "bg-purple-500",
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              className="flex items-center justify-between p-4 rounded-xl shadow-md bg-card dark:bg-zinc-900"
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
        <div className="grid grid-cols-3 gap-4 ">
          {/* To Do List */}
          <Card className="col-span-2 p-4 bg-card dark:bg-zinc-900">
            <CardHeader>
              <h2 className="text-lg font-semibold text-foreground">
                Últimos relatórios gerados
              </h2>
            </CardHeader> 
            <CardBody className="flex flex-col gap-3 dark:bg-zinc-900">
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
                      Solicitar adiamento para o relatório fiscal
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

          {/* Reports */}
          <PieChartC
            data={reportsByDepartment}
            config={reportsConfig}
            title="Relatórios por Departamento"
            description="Número de relatórios gerados por departamento"
            centerLabel={{
              total: reportsByDepartment.reduce(
                (acc, curr) => acc + curr.value,
                0
              ),
              label: "Relatórios",
            }}
          />
        </div>

        <TableRelatorios />

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
