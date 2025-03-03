import Nav from "@/components/nav/nav";
import { dehydrate } from "@tanstack/query-core";
import Hydrate from "@/lib/query-utils/hydrate-client";
import { QueryClient } from "@tanstack/react-query";
import Tabs from "@/components/products/tabs";
import { getProductsServer } from "@/lib/api/products/get-products";
import TurmasTable from "@/components/turmas/turmas-table";

const Products = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProductsServer,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Nav>
      <Tabs>
        <Hydrate state={dehydratedState}>
          <TurmasTable />
        </Hydrate>
      </Tabs>
    </Nav>
  );
};

export default Products;
