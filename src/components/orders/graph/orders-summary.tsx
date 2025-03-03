import { Card, CardBody } from "@heroui/react";
import OrdersSummaryGraph from "./orders-summary-graph";

const OrdersSummary = () => {
  return (
    <Card className="mt-5 shadow-md md:mt-0">
      <CardBody className="min-h-[400px]">
        <h1 className="mx-2 mt-2 text-lg font-medium"></h1>
        <OrdersSummaryGraph />
      </CardBody>
    </Card>
  );
};

export default OrdersSummary;
