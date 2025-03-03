import Nav from "@/components/nav/nav";
import GenericCard from "@/components/dashboard/academic/dept/cardWelcome";
import { CreditCard, AlertTriangle, Book } from "lucide-react";
import TableStudentP from "@/components/dashboard/financeiro/pagamentos/tableStudentP";

export default async function Departamentos() {
   const departmentData = {
     title: "Gestão de Pagamentos",
     description: "Visualização total dos pagamentos via multischool",
     imageUrl: "/payments.jpeg",
     iconUrl:
       "https://scontent.flad1-1.fna.fbcdn.net/v/t39.30808-6/348317224_2443130649195579_3173088235776457879_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=M_VyJUjbu9oQ7kNvgFDnDDl&_nc_oc=AdiUOQiaPkeU385oz5_2_Fu26lAVeexyHcnoqlaqLuYpLP6YK7kGcXxwvnZMDvj6Y9E&_nc_zt=23&_nc_ht=scontent.flad1-1.fna&_nc_gid=Apy9bKIguS2ik6CBhVY90AW&oh=00_AYAJMfuuO5Yn6PPglZuezEp4fJ_n5tIjTfzlLPRBGktptA&oe=67B6A74F",
     summary: [
       {
         icon: <CreditCard size={18} />,
         label: "1500 pgamentos este mês",
       },
       {
         icon: <AlertTriangle size={18} />,
         label: "50 entidades frequentadas",
       },
       {
         icon: <Book size={18} />,
         label: "200 novos pagamentos",
       },
     ],
     buttonText: "Ver Relatórios",
     buttonLink: "",
   };

  return (
    <Nav>
      <div className="@container my-5">
        <GenericCard {...departmentData} />
        <div className="my-10">
          <TableStudentP/>
        </div>
      </div>
    </Nav>
  );
}
