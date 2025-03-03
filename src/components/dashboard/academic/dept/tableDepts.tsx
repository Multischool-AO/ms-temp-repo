"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
  Tooltip,
} from "@heroui/react";

import {
  EyeIcon,
  DeleteIcon,
  EditIcon,
  ChevronDownIcon,
  SearchIcon,
  PlusIcon,
} from "@/components/ui/icon";

import { SheetDemo } from "./sheetDept";

import { DeleteModal } from "./modalDelDp";

export function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

export const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "DEPARTAMENTO", uid: "dept", sortable: true },
  { name: "IDENTIFICAÇÃO", uid: "idf", sortable: true },
  { name: "PRESIDENTE", uid: "pr", sortable: true },
  { name: "Nº FUNCIONÁRIOS", uid: "totalF" },
  { name: "CAMPUS", uid: "date" },
  { name: "ESTADO", uid: "status", sortable: true },
  { name: "ACÇÕES", uid: "actions" },
];

export const statusOptions = [
  { name: "Activo", uid: "activo" },
  { name: "Encerrado", uid: "Encerrado" },
  { name: "Suspenso", uid: "Suspenso" },
];

// TOREPLACEDYN
export const depts = [
  {
    id: 1,
    dept: "Engenharia informática",
    pr: "Sérgio Oliveira",
    totalF: 10,
    status: "activo",
    date: "B2",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    idf: "DEP-ENGINF",
  },
  {
    id: 2,
    dept: "Zoey Lang",
    pr: "Mateus Matias",
    totalF: 20,
    status: "Encerrado",
    date: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    idf: "zoey.lang@example.com",
  },
  {
    id: 3,
    dept: "Jane Fisher",
    pr: "Sr. Dev",
    totalF: 8,
    status: "activo",
    date: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    idf: "jane.fisher@example.com",
  },
  {
    id: 4,
    dept: "William Howard",
    pr: "C.M.",
    totalF: 5,
    status: "Suspenso",
    date: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    idf: "william.howard@example.com",
  },
  {
    id: 5,
    dept: "Kristen Copper",
    pr: "S. Manager",
    totalF: 9,
    status: "activo",
    date: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    idf: "kristen.cooper@example.com",
  },
  {
    id: 6,
    dept: "Brian Kim",
    pr: "P. Manager",
    totalF: "Management",
    date: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    idf: "brian.kim@example.com",
    status: "activo",
  },
  {
    id: 7,
    dept: "Michael Hunt",
    pr: "Designer",
    totalF: "Design",
    status: "Encerrado",
    date: "27",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    idf: "michael.hunt@example.com",
  },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  activo: "success",
  Encerrado: "danger",
  Suspenso: "warning",
};

const INITIAL_VISIBLE_COLUMNS = [
  "dept",
  "pr",
  "totalF",
  "date",
  "status",
  "actions",
];

type User = (typeof depts)[0];

export default function TableRelatorios() {
  const router = useRouter();

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedDeptId, setSelectedDeptId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddDept = () => {
    setSelectedDeptId(null); // Modo de adição
    setIsSheetOpen(true);
  };

  const handleEditCurso = (cursoId: number) => {
    setSelectedDeptId(cursoId); // Modo de edição
    setIsSheetOpen(true);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
    setSelectedDeptId(null);
  };

  const handleDeleteClick = (cursoId: number) => {
    setSelectedDeptId(cursoId);
    setIsModalOpen(true); // Abrir a modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDeptId(null);
  };

  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "data",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...depts];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((dept) =>
        dept.dept.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((dept) =>
        Array.from(statusFilter).includes(dept.status)
      );
    }

    return filteredUsers;
  }, [depts, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((dept: User, columnKey: React.Key) => {
    const cellValue = dept[columnKey as keyof User];

    switch (columnKey) {
      case "dept":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {dept.idf}
            </p>
          </div>
        );
      case "pr":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {dept.pr}
            </p>
          </div>
        );
      case "totalF":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize text-center">
              {cellValue}
            </p>
          </div>
        );
      case "date":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize text-center">
              {cellValue}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[dept.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <div className="relative flex items-center gap-2">
              <Tooltip content="Visualizar">
                <span
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                  onClick={() => router.push(`cursos/${dept.id}`)}
                >
                  <EyeIcon />
                </span>
              </Tooltip>
              <Tooltip content="Editar departamento">
                <span
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                  onClick={() => handleEditCurso(dept.id)}
                >
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Eliminar departamento">
                <span
                  className="text-lg text-danger cursor-pointer active:opacity-50"
                  onClick={() => handleDeleteClick(dept.id)}
                >
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          </div>
        );

      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Pesquisar por curso..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Filtrar por
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Exibir"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Exibir
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            <Button
              color="primary"
              endContent={<PlusIcon />}
              onClick={handleAddDept}
            >
              Novo departamento
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            {depts.length} Departamentos no total
          </span>
          <label className="flex items-center text-default-400 text-small">
            Registos por página:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    depts.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "Todos os itens selecionados"
            : `${selectedKeys.size} de ${filteredItems.length} Selecionados`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onClick={onPreviousPage}
          >
            Anterior
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onClick={onNextPage}
          >
            Próximo
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <>
      {selectedDeptId !== null && (
        <DeleteModal
          isOpen={isModalOpen}
          onClose={closeModal}
          cursoId={selectedDeptId}
        />
      )}
      {/* Sheet */}
      <SheetDemo
        isOpen={isSheetOpen}
        onClose={closeSheet}
        deptId={selectedDeptId || 0}
        isEditMode={!!selectedDeptId}
      />
      <Table
        isHeaderSticky
        aria-label="Example table with custom cells, pagination and sorting"
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "max-h-[382px]",
        }}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"Nenhum curso encontrado"} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
