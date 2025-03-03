import { formatCurrency } from "@/lib/utils";
import { User } from "@heroui/react";

type TopSalesProps = {
  image: string;
  amountSpent: number;
  name: string;
  items: number;
  lastPurchase: string;
};

const TopSales = ({ data }: { data: TopSalesProps[] }) => {
  return (
    <div className="col-span-2 mt-5 rounded-2xl bg-white p-3 ps-4 shadow-md dark:bg-dark md:mt-0">
      <h1 className="mt-2 text-lg font-medium">Pagamentos pendentes</h1>
      <p className="text-xs dark:text-zinc-400">
        Estudantes com pagamentos em atraso
      </p>
      <div className="mt-4 space-y-5">
        {data.map((sale, i) => (
          <div className="flex items-center justify-between" key={i}>
            <User
              name={sale.name}
              description={`${sale.items}29392`}
              avatarProps={{
                name: "",
                showFallback: true,
                src: sale.image,
              }}
            />
            <div className="flex flex-col text-right">
              <h1 className="text-sm font-medium">
                + {formatCurrency(sale.amountSpent)}
              </h1>
              <span className="text-xs text-zinc-500 dark:text-zinc-400/80">
                Atraso: {sale.lastPurchase}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSales;
