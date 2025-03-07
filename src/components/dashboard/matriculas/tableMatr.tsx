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

import { SheetMatr } from "./sheetMatr";

import { DeleteModal } from "../modal/delete";
import { ActivitySquareIcon } from "lucide-react";

export function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

export const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "ESTUDANTE", uid: "est", sortable: true },
  { name: "Nº MATRÍCULA", uid: "nmatr", sortable: true },
  { name: "TIPO", uid: "type", sortable: true },
  { name: "CURSO", uid: "course" },
  { name: "ESTADO", uid: "status", sortable: true },
  { name: "ACÇÕES", uid: "actions" },
];

export const statusOptions = [
  { name: "Activa", uid: "Activa" },
  { name: "Trancada", uid: "Trancada" },
  { name: "Pendente", uid: "Pendente" },
  { name: "Concluída", uid: "Concluída" },
];

// TOREPLACEDYN
export const matrs = [
  {
    id: 1,
    est: "Ana Silva",
    nmatr: "20250001",
    type: "Regular",
    course: "Engenharia Informática",
    status: "Activa",
    actions: null,
  },
  {
    id: 2,
    est: "Carlos Mendes",
    nmatr: "20250002",
    type: "Transferido",
    course: "Gestão Empresarial",
    status: "Trancada",
    actions: null,
  },
  {
    id: 3,
    est: "Beatriz Costa",
    nmatr: "20250003",
    type: "Reingresso",
    course: "Direito",
    status: "Pendente",
    actions: null,
  },
  {
    id: 4,
    est: "Fernando Oliveira",
    nmatr: "20250004",
    type: "Bolseiro",
    course: "Contabilidade",
    status: "Concluída",
    actions: null,
  },
  {
    id: 5,
    est: "Sara Lima",
    nmatr: "20250005",
    type: "Especial",
    course: "Medicina",
    status: "Activa",
    actions: null,
  },
];


const statusColorMap: Record<string, ChipProps["color"]> = {
  Activa: "success",
  Trancada: "danger",
  Pendente: "warning",
  Suspensa: "warning",
};

const INITIAL_VISIBLE_COLUMNS = [
  "est",
  "nmatr",
  "type",
  "course",
  "status",
  "actions",
];

type User = (typeof matrs)[0];

export default function TableMatr() {
  const router = useRouter();

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedmatrId, setSelectedmatrId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddmatr = () => {
    setSelectedmatrId(null); // Modo de adição
    setIsSheetOpen(true);
  };

  const handleEditCurso = (cursoId: number) => {
    setSelectedmatrId(cursoId); // Modo de edição
    setIsSheetOpen(true);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
    setSelectedmatrId(null);
  };

  const handleDeleteClick = (cursoId: number) => {
    setSelectedmatrId(cursoId);
    setIsModalOpen(true); // Abrir a modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedmatrId(null);
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
    let filteredUsers = [...matrs];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((matr) =>
        matr.est.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((matr) =>
        Array.from(statusFilter).includes(matr.status)
      );
    }

    return filteredUsers;
  }, [matrs, filterValue, statusFilter]);

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

  const renderCell = React.useCallback((matr: User, columnKey: React.Key) => {
    const cellValue = matr[columnKey as keyof User];

    switch (columnKey) {
      case "est":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {matr.est}
            </p>
          </div>
        );
      case "nmatr":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {matr.nmatr}
            </p>
          </div>
        );
      case "type":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">
              {cellValue}
            </p>
          </div>
        );
      case "course":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">
              {cellValue}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[matr.status]}
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
                  onClick={() => router.push(`cursos/${matr.id}`)}
                >
                  <EyeIcon />
                </span>
              </Tooltip>
              <Tooltip content="Editar">
                <span
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                  onClick={() => handleEditCurso(matr.id)}
                >
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Eliminar">
                <span
                  className="text-lg text-danger cursor-pointer active:opacity-50"
                  onClick={() => handleDeleteClick(matr.id)}
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
            placeholder="Pesquisar por número de matrícula..."
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
              onClick={handleAddmatr}
            >
              Nova Matrícula
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            {matrs.length} Matrículas no total
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
    matrs.length,
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
      {selectedmatrId !== null && (
        <DeleteModal
          isOpen={isModalOpen}
          onClose={closeModal}
          cadId={selectedmatrId || 0}
        />
      )} */}
      {/* Sheet */}
      <SheetMatr
        isOpen={isSheetOpen}
        onClose={closeSheet}
        cadId={selectedmatrId || 0}
        isEditMode={!!selectedmatrId}
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
        <TableBody
          emptyContent={"Nenhum registo encontrado"}
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
