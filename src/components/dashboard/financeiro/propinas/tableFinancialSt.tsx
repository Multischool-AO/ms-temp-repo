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
  ChevronDownIcon,
  SearchIcon,
} from "@/components/ui/icon";


export function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

export const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "REFERÊNCIA", uid: "ref", sortable: true },
  { name: "DATA", uid: "date", sortable: true },
  { name: "VALOR", uid: "valor", sortable: true },
  { name: "ESTADO", uid: "status" },
];

export const statusOptions = [
  { name: "Pago", uid: "Pago" },
  { name: "Inadimplente", uid: "Inadimplente" },
  { name: "Pendente", uid: "Pendente" },
];

// TOREPLACEDYN
export const institu = [
  {
    id: 1,
    ref: "Propina Novembro",
    date: "2025-02-19",
    valor: "54.980 kz",
    status: "Pago",
  },
  {
    id: 2,
    ref: "Propina Outubro",
    date: "2025-02-19",
    valor: "67.450 kz",
    status: "Inadimplente",
  },
  {
    id: 3,
    ref: "Propina Dezembro",
    date: "2025-02-19",
    valor: "89.120 kz",
    status: "Pendente",
  },
  {
    id: 4,
    ref: "Propina Fevereiro",
    date: "2025-02-19",
    valor: "72.300 kz",
    status: "Pago",
  },
  {
    id: 5,
    ref: "Propina Setembro",
    date: "2025-02-19",
    valor: "95.900 kz",
    status: "Pago",
  },
  {
    id: 6,
    ref: "Propina Novembro",
    date: "2025-02-19",
    valor: "60.750 kz",
    status: "Inadimplente",
  },
  {
    id: 7,
    ref: "Propina Novembro",
    date: "2025-02-19",
    valor: "81.200 kz",
    status: "Pendente",
  },
  {
    id: 8,
    ref: "Propina Novembro",
    date: "2025-02-19",
    valor: "58.600 kz",
    status: "Pago",
  },
  {
    id: 9,
    ref: "Propina Novembro",
    date: "2025-02-19",
    valor: "76.800 kz",
    status: "Inadimplente",
  },
  {
    id: 10,
    ref: "Propina Novembro",
    date: "2025-02-19",
    valor: "63.400 kz",
    status: "Pendente",
  },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  Pago: "success",
  Inadimplente: "danger",
  Pendente: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["ref", "date", "valor", "status"];

type User = (typeof institu)[0];

export default function TableFinancialSt() {
  const router = useRouter();

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedfinLId, setSelectedfinLId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddfinL = () => {
    setSelectedfinLId(null); // Modo de adição
    setIsSheetOpen(true);
  };

  const handleEditCurso = (cursoId: number) => {
    setSelectedfinLId(cursoId); // Modo de edição
    setIsSheetOpen(true);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
    setSelectedfinLId(null);
  };

  const handleDeleteClick = (cursoId: number) => {
    setSelectedfinLId(cursoId);
    setIsModalOpen(true); // Abrir a modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedfinLId(null);
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
    let filteredUsers = [...institu];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((finL) =>
        finL.date.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((finL) =>
        Array.from(statusFilter).includes(finL.date)
      );
    }

    return filteredUsers;
  }, [institu, filterValue, statusFilter]);

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

  const renderCell = React.useCallback((finL: User, columnKey: React.Key) => {
    const cellValue = finL[columnKey as keyof User];

    switch (columnKey) {
      case "ref":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {finL.ref}
            </p>
          </div>
        );
      case "data":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {finL.date}
            </p>
          </div>
        );
      case "valor":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[finL.status]}
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
            placeholder="Pesquisar por local..."
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
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            {institu.length} Pagamentos no total
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
    institu.length,
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
      {/* {selectedfinLId !== null && (
        <DeleteModal
          isOpen={isModalOpen}
          onClose={closeModal}
          cadId={selectedfinLId || 0}
        />
      )}
      {/* Sheet 
      <SheetfinL
        isOpen={isSheetOpen}
        onClose={closeSheet}
        cadId={selectedfinLId || 0}
        isEditMode={!!selectedfinLId}
      />   */}
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
