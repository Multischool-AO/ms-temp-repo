"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  ChipProps,
  Button,
  SelectItem,
  Select,
} from "@heroui/react";

import { Eye, ChevronRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";
import { useCallback } from "react";
import {
  recentStudentsColumns,
  recentStudents,
} from "@/lib/table-data/recent-students";

const statusColorMap: Record<string, ChipProps["color"]> = {
  finalizado: "success",
  pendente: "warning",
  cancelado: "danger",
};

type student = (typeof recentStudents)[0];

const Recentstudents = () => {
  const renderCell = useCallback((student: student, columnKey: React.Key) => {
    const cellValue = student[columnKey as keyof student];

    switch (columnKey) {
      case "sid":
        return <h1>{student.sid}</h1>;
      case "sname":
        return (
          <Link href="/dashboard/customers" className="hover:text-primary">
            {student.sname}
          </Link>
        );
      // case "Valor":
      //   return <h1>{formatCurrency(student.amount)}</h1>;
      case "date":
        return <h1>{student.date}</h1>;
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[student.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      // case "update_status":
      //   return (
      //     <Select
      //       placeholder="Actualizar estado"
      //       className="max-w-xs"
      //       defaultSelectedKeys={[student.status]}
      //       classNames={{
      //         trigger: "h-fit min-h-fit p-2",
      //         value: "text-xs",
      //       }}
      //       aria-label="Actualizar estado"
      //       size="sm"
      //     >
      //       {["Pendente", "Cancelado", "Finalizado"].map((value) => (
      //         <SelectItem
      //           key={value}
      //           value={value}
      //           className="capitalize"
      //           classNames={{
      //             title: "text-xs",
      //           }}
      //         >
      //           {value}
      //         </SelectItem>
      //       ))}
      //     </Select>
      //   );
      case "actions":
        return (
          <Tooltip content="Ver detalhes">
            <Button
              isIconOnly
              size="sm"
              variant="light"
              as={Link}
              radius="full"
              href={`/dashboard/students`}
            >
              <Eye className="text-zinc-500" />
            </Button>
          </Tooltip>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="mx-3 my-10 rounded-2xl bg-white px-4 pt-4 shadow-md dark:bg-dark">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium">Matrículas recentes</h1>
        <Button
          variant="flat"
          as={Link}
          href="/dashboard/students"
          size="sm"
          color="primary"
          className="dark:bg-zinc-800 dark:text-white"
          endContent={<ChevronRight size={15} />}
        >
          Ver todas
        </Button>
      </div>
      <Table
        aria-label="Recent students table"
        classNames={{
          wrapper: "px-0 shadow-none",
        }}
      >
        <TableHeader columns={recentStudentsColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={recentStudents}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
const RecentRequests = () => {
  const renderCell = useCallback((student: student, columnKey: React.Key) => {
    const cellValue = student[columnKey as keyof student];

    switch (columnKey) {
      case "sid":
        return <h1>{student.sid}</h1>;
      case "sname":
        return (
          <Link href="/dashboard/customers" className="hover:text-primary">
            {student.sname}
          </Link>
        );
      case "data":
        return <h1>{student.date}</h1>;
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[student.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "update_status":
        return (
          <Select
            placeholder="Actualizar estado"
            className="max-w-xs"
            defaultSelectedKeys={[student.status]}
            classNames={{
              trigger: "h-fit min-h-fit p-2",
              value: "text-xs",
            }}
            aria-label="Actualizar estado"
            size="sm"
          >
            {["Pendente", "Cancelado", "Finalizado"].map((value) => (
              <SelectItem
                key={value}
                value={value}
                className="capitalize"
                classNames={{
                  title: "text-xs",
                }}
              >
                {value}
              </SelectItem>
            ))}
          </Select>
        );
      case "actions":
        return (
          <Tooltip content="Ver detalhes">
            <Button
              isIconOnly
              size="sm"
              variant="light"
              as={Link}
              radius="full"
              href={`/dashboard/students`}
            >
              <Eye className="text-zinc-500" />
            </Button>
          </Tooltip>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="mx-3 my-10 rounded-2xl bg-white px-4 pt-4 shadow-md dark:bg-dark">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium">Pedidos recentes</h1>
        <Button
          variant="flat"
          as={Link}
          href="/dashboard/students"
          size="sm"
          color="primary"
          className="dark:bg-zinc-800 dark:text-white"
          endContent={<ChevronRight size={15} />}
        >
          Ver todos
        </Button>
      </div>
      {/* <Table
        aria-label="Recent students table"
        classNames={{
          wrapper: "px-0 shadow-none",
        }}
      >
        <TableHeader columns={recentstudentColumns}>
          {(column) => (
            <TableColumn
              key={column.id}
              align={column.id === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={recentstudents}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table> */}
    </div>
  );
};

export { Recentstudents, RecentRequests };
