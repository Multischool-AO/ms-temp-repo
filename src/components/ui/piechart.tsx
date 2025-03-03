"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface PieChartCProps {
  data: { name: string; value: number; fill: string }[]; // Dados do gráfico
  config: ChartConfig; // Configuração das cores e legendas
  title?: string; // Título do gráfico
  description?: string; // Descrição do gráfico
  centerLabel?: {
    total: number; // Valor total para exibir no centro
    label: string; // Texto do label central
  };
}

export function PieChartC({
  data,
  config,
  title,
  description,
  centerLabel,
}: PieChartCProps) {
  const totalValue = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.value, 0);
  }, [data]);

  return (
    <Card className="flex flex-col dark:bg-zinc-900">
      <CardHeader className="items-center pb-0">
        {title && <CardTitle className="text-foreground">{title}</CardTitle>}
        {/* {description && (
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        )} */}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={config}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart width={400} height={400}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={80}
              strokeWidth={5}
              fill="#8884d8" // Cor padrão (substituída pelo `fill` dos dados)
            >
              {data.map((entry, index) => (
                <React.Fragment key={`slice-${index}`}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="text-foreground dark:text-gray-50" // Ajuste para o modo escuro
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="text-3xl font-bold dark:text-white"
                            >
                              {centerLabel?.total || totalValue} %
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="text-muted-foreground dark:text-gray-50"
                            >
                              {centerLabel?.label || "Total"}
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </React.Fragment>
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none text-foreground">
          Dados atualizados em tempo real
        </div>
        <div className="leading-none text-muted-foreground">
          {description || "Gráfico de pizza personalizado"}
        </div>
      </CardFooter>
    </Card>
  );
}
