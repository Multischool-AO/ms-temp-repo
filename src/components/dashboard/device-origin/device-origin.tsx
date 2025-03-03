import { Card, CardBody } from "@heroui/react";
import DeviceOriginGraph from "./device-origin-graph";

const DeviceOrigin = () => {
  return (
    <Card className="mt-5 shadow-md md:mt-0">
      <CardBody>
        <h1 className="mx-2 mt-2 text-lg font-medium">Taxa de aprovação</h1>
        <DeviceOriginGraph />
      </CardBody>
    </Card>
  );
};

export default DeviceOrigin;
