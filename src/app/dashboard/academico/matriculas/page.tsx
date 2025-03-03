import Nav from "@/components/nav/nav";
import GenericCard from "@/components/dashboard/academic/dept/cardWelcome";
import { GraduationCap, CheckCircle, Clock } from "lucide-react";
import TableMatr from "@/components/dashboard/matriculas/tableMatr";

export default async function Departamentos() {
  const matriculasData = {
    title: "Gestão de Matrículas",
    description: "Gerencie as matrículas de forma eficiente e organizada.",
    imageUrl: "/matr.jpeg",
    iconUrl:
      "https://scontent.flad1-1.fna.fbcdn.net/v/t39.30808-6/348317224_2443130649195579_3173088235776457879_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=M_VyJUjbu9oQ7kNvgFDnDDl&_nc_oc=AdiUOQiaPkeU385oz5_2_Fu26lAVeexyHcnoqlaqLuYpLP6YK7kGcXxwvnZMDvj6Y9E&_nc_zt=23&_nc_ht=scontent.flad1-1.fna&_nc_gid=Apy9bKIguS2ik6CBhVY90AW&oh=00_AYAJMfuuO5Yn6PPglZuezEp4fJ_n5tIjTfzlLPRBGktptA&oe=67B6A74F",
    summary: [
      {
        icon: <GraduationCap size={18} />,
        label: "500 matrículas no último mês",
      },
      {
        icon: <CheckCircle size={18} />,
        label: "1000 estudantes no ano lectivo",
      },
      { icon: <Clock size={18} />, label: "40 transferências" },
    ],
    buttonText: "Ver Relatórios",
    buttonLink: "matriculas/relatorios",
  };

  return (
    <Nav>
      <div className="@container my-5">
        <GenericCard {...matriculasData} />
        <div className="my-10">
          <TableMatr />
        </div>
      </div>
    </Nav>
  );
}
