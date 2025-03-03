import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@heroui/react";
import { Settings, LogOut } from "lucide-react";
import Link from "next/link";

const User = () => {
  // Removemos a lógica de sessão para evitar erros
  const session = null; // Defina como null ou um objeto mockado, se necessário

  return (
    <Popover
      showArrow
      placement="bottom"
      classNames={{
        base: "before:z-10 before:shadow-none",
      }}
    >
      <PopoverTrigger className="rounded-full bg-zinc-100 dark:bg-zinc-800">
        <Avatar
          isBordered
          color="success"
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          alt="User"
        />
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <UserCard session={session} />
      </PopoverContent>
    </Popover>
  );
};

export default User;

const UserCard = ({ session }: { session: any }) => {
  return (
    <Card
      shadow="none"
      className="border-non min-w-[250px] max-w-[300px] bg-transparent"
    >
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            showFallback
            classNames={{
              fallback: "w-full h-full",
            }}
            fallback={
              <Image
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                alt="avatar"
                radius="full"
              />
            }
            size="md"
            src={session?.user?.image || ""}
          />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none">
              {session?.user?.name || "José de Almeida"}
            </h4>
            <h5 className="text-xs font-medium tracking-tight text-success">
              {session?.user?.role || "Secretário administrativo"}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="pl-px text-small dark:text-default-500">
          {session?.user?.name || "Bem-vindo"}
          <span aria-label="confetti" role="img"></span>
        </p>
      </CardBody>
      <CardFooter className="flex-col gap-3">
        <Button
          as={Link}
          href="#"
          startContent={<Settings size={15} />}
          size="sm"
          variant="flat"
          className="w-full justify-start"
        >
          Definições
        </Button>
        <Button
          as={Link}
          href="#"
          startContent={<LogOut size={15} />}
          size="sm"
          variant="flat"
          color="danger"
          className="w-full justify-start"
        >
          Terminar sessão
        </Button>
      </CardFooter>
    </Card>
  );
};
