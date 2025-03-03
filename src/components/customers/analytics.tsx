import { newCustomerRegisters } from "@/lib/data";
import NewCustomerRegistrations from "../dashboard/customer-registrations/new-customer-registrations";
import SummaryCard from "../dashboard/summary/summary-card";
import { UserCheck, UserMinus, Users } from "lucide-react";
import TopCustomers from "./tables/top-customers";

const Analytics = () => {
  return (
    <div className="mt-5 space-y-5 @container">
      <div className="grid grid-cols-1 gap-3 @sm:grid-cols-2 @lg:grid-cols-4">
        <SummaryCard
          bgcolor="bg-[#23B7E5]"
          color="text-[#23B7E5]"
          icon={Users}
          title="Total de Estudantes"
          url="/dashboard/administrativo/matriculas"
          value={493}
          percentage={{ increased: true, value: 43 }}
        />
        <SummaryCard
          bgcolor="bg-success"
          color="text-success"
          icon={UserMinus}
          title="Activos"
          url="/dashboard/matriculas?tab=guest"
          value={293}
          percentage={{ increased: false, value: 10 }}
        />
        <SummaryCard
          bgcolor="bg-[#F5B849]"
          color="text-[#F5B849]"
          icon={UserCheck}
          title="Desistentes"
          url="/dashboard/matriculas?tab=analytics#top-customer"
          value={120}
          percentage={{ increased: true, value: 2 }}
        />
      </div>
      <NewCustomerRegistrations data={newCustomerRegisters} />
      <div className="pt-10" id="top-customer">
        <h1 className="text-xl font-medium text-zinc-400">Matriculados</h1>
        <TopCustomers />
      </div>
    </div>
  );
};

export default Analytics;
