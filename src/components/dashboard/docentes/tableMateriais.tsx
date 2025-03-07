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

import { SheetDocentes } from "./sheetDocentes";

import { DeleteModal } from "../modal/delete";

export function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

export const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "CADEIRA", uid: "cad", sortable: true },
  { name: "IDENTIFICAÇÃO", uid: "idf", sortable: true },
  { name: "TIPO", uid: "type", sortable: true },
  { name: "CARGA HORÁRIA", uid: "chor" },
//   { name: "ACÇÕES", uid: "actions" },
];

export const statusOptions = [
  { name: "Activa", uid: "Activa" },
  { name: "Removida", uid: "Removida" },
  { name: "Suspensa", uid: "Suspensa" },
];

// TOREPLACEDYN
export const depts = [
  {
    id: 1,
    cad: "Introdução aos algoritmos",
    idf: "Estrutura de dados",
    type: "Anual",
    chor: 2,
    status: "Activa",
  },
  {
    id: 1,
    cad: "Introdução aos algoritmos",
    idf: "Estrutura de dados",
    type: "Anual",
    chor: 2,
    status: "Activa",
  },
  {
    id: 1,
    cad: "Introdução aos algoritmos",
    idf: "Estrutura de dados",
    type: "Anual",
    chor: 2,
    status: "Activa",
  },
  {
    id: 1,
    cad: "Introdução aos algoritmos",
    idf: "Estrutura de dados",
    type: "Anual",
    chor: 2,
    status: "Activa",
  },
  {
    id: 1,
    cad: "Introdução aos algoritmos",
    idf: "Estrutura de dados",
    type: "Anual",
    chor: 2,
    status: "Activa",
  },
  {
    id: 1,
    cad: "Introdução aos algoritmos",
    idf: "Estrutura de dados",
    type: "Anual",
    chor: 2,
    status: "Activa",
  },
  {
    id: 1,
    cad: "Introdução aos algoritmos",
    idf: "Estrutura de dados",
    type: "Anual",
    chor: 2,
    status: "Activa",
  },
  {
    id: 1,
    cad: "Introdução aos algoritmos",
    idf: "Estrutura de dados",
    type: "Anual",
    chor: 2,
    status: "Activa",
  },
  {
    id: 1,
    cad: "Introdução aos algoritmos",
    idf: "Estrutura de dados",
    type: "Anual",
    chor: 2,
    status: "Activa",
  },
  {
    id: 1,
    cad: "Introdução aos algoritmos",
    idf: "Estrutura de dados",
    type: "Anual",
    chor: 2,
    status: "Activa",
  },
  {
    id: 1,
    cad: "Introdução aos algoritmos",
    idf: "Estrutura de dados",
    type: "Anual",
    chor: 2,
    status: "Activa",
  },
  
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  Activa: "success",
  Removida: "danger",
  Suspensa: "warning",
};

const INITIAL_VISIBLE_COLUMNS = [
  "cad",
  "idf",
  "type",
  "chor",
  "status",
//   "actions",
];

type User = (typeof depts)[0];

export default function TableMateriais() {
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
        dept.cad.toLowerCase().includes(filterValue.toLowerCase())
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
      case "cad":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {dept.cad}
            </p>
          </div>
        );
      case "idf":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {dept.idf}
            </p>
          </div>
        );
      case "type":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize text-center">
              {cellValue}
            </p>
          </div>
        );
      case "chor":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize text-center">
              {cellValue}H
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
            placeholder="Pesquisar por cadeira..."
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
              Novo material
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            {depts.length} Materiais no total
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
    {/** 
      {selectedDeptId !== null && (
        <DeleteModal
          isOpen={isModalOpen}
          onClose={closeModal}
          cadId={selectedDeptId}
        />
      )} */}
      {/* Sheet */}
      {/** 
      <SheetDocentes
        isOpen={isSheetOpen}
        onClose={closeSheet}
        cadId={selectedDeptId || 0}
        isEditMode={!!selectedDeptId}
      /> */}
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
        <TableBody
          emptyContent={"Nenhuma cadeira encontrada"}
          items={sortedItems}
        >
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
