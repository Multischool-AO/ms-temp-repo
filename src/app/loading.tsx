import { Card, CardBody } from "@heroui/react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed z-[9999] flex min-h-screen min-w-full items-center justify-center bg-black/50">
      <Card className="rounded-md">
        <CardBody>
          <div className="flex gap-4">
            <Loader2
              color="secondary"
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Loading;
