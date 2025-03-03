import { Card, CardBody } from "@heroui/react";

const recentActivities = [
  "Abertura do Ano Lectivo - 31 de Outubro",
  "Início das Primeiras Provas Parcelares - 31 de Novembro",
  "Palestra Multischool - A revolução da indústria tecnológica com IA",
  "Início das Segundas Parcelares - 02 de Dezembro",
  "Pausa para quadra festiva - 23 de Dezembro",
  "Reinicio das aulas - 01 de Janeiro",
  "Início dos exames - 23 de Fevereiro",
];

const RecentActivities = () => {
  return (
    <Card className="mt-5 shadow-md md:mt-0">
      <CardBody>
        <h1 className="text-lg font-medium">Eventos Próximos</h1>
        <div className="mt-3 space-y-[1px] text-sm">
          <ActivitiesList data={recentActivities} />
        </div>
      </CardBody>
    </Card>
  );
};

export default RecentActivities;

function ActivitiesList({ data }: { data: string[] }) {
  const colors = [
    "34 197 94",
    "99 102 241",
    "6 182 212",
    "239 68 68",
    "234 179 8",
    "236 72 153",
    "217 70 239",
  ];
  return (
    <>
      {data.map((item, i) => (
        <div
          className={`relative flex items-start gap-5 ${
            data.indexOf(item) !== data.length - 1 &&
            "before:absolute before:left-2 before:h-full before:w-0.5 before:border-l before:border-dashed before:border-gray-300 dark:before:border-gray-500"
          }`}
          key={i}
        >
          <div
            className="relative h-4 w-4 flex-shrink-0 rounded-full"
            style={{ backgroundColor: `rgb(${colors[i]} / 0.4)` }}
          >
            <div
              className="absolute left-[50%] top-[50%] h-2 w-2 translate-x-[-50%] translate-y-[-50%] rounded-full bg-red-500"
              style={{ backgroundColor: `rgb(${colors[i]})` }}
            ></div>
          </div>
          <div className="max-w-xs pb-5">{item}</div>
        </div>
      ))}
    </>
  );
}
