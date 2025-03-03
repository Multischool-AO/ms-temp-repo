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

import { SheetDemo } from "./sheet";

import { DeleteModal } from "./modalDel";

export function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

export const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "CURSO", uid: "curso", sortable: true },
  { name: "TURMAS", uid: "nturmas", sortable: true },
  { name: "COORDENADOR", uid: "coord", sortable: true },
  { name: "DEPARTAMENTO", uid: "dept" },
  { name: "SHORT", uid: "short" },
  { name: "ESTADO", uid: "status", sortable: true },
  { name: "ACÇÕES", uid: "actions" },
];

export const statusOptions = [
  { name: "Activo", uid: "activo" },
  { name: "Encerrado", uid: "Encerrado" },
  { name: "Suspenso", uid: "Suspenso" },
];

export const users = [
  {
    id: 1,
    curso: "Engenharia informática",
    coord: "Sérgio Oliveira",
    dept: "Management",
    status: "activo",
    nturmas: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    short: "ENG-INF",
  },
  {
    id: 2,
    curso: "Zoey Lang",
    coord: "Mateus Matias",
    dept: "Development",
    status: "Encerrado",
    nturmas: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    short: "zoey.lang@example.com",
  },
  {
    id: 3,
    curso: "Jane Fisher",
    coord: "Sr. Dev",
    dept: "Development",
    status: "activo",
    nturmas: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    short: "jane.fisher@example.com",
  },
  {
    id: 4,
    curso: "William Howard",
    coord: "C.M.",
    dept: "Marketing",
    status: "Suspenso",
    nturmas: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    short: "william.howard@example.com",
  },
  {
    id: 5,
    curso: "Kristen Copper",
    coord: "S. Manager",
    dept: "Sales",
    status: "activo",
    nturmas: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    short: "kristen.cooper@example.com",
  },
  {
    id: 6,
    curso: "Brian Kim",
    coord: "P. Manager",
    dept: "Management",
    nturmas: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    short: "brian.kim@example.com",
    status: "activo",
  },
  {
    id: 7,
    curso: "Michael Hunt",
    coord: "Designer",
    dept: "Design",
    status: "Encerrado",
    nturmas: "27",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    short: "michael.hunt@example.com",
  },
  {
    id: 8,
    curso: "Samantha Brooks",
    coord: "HR Manager",
    dept: "HR",
    status: "activo",
    nturmas: "31",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    short: "samantha.brooks@example.com",
  },
  {
    id: 9,
    curso: "Frank Harrison",
    coord: "F. Manager",
    dept: "Finance",
    status: "Suspenso",
    nturmas: "33",
    avatar: "https://i.pravatar.cc/150?img=4",
    short: "frank.harrison@example.com",
  },
  {
    id: 10,
    curso: "Emma Adams",
    coord: "Ops Manager",
    dept: "Operations",
    status: "activo",
    nturmas: "35",
    avatar: "https://i.pravatar.cc/150?img=5",
    short: "emma.adams@example.com",
  },
  {
    id: 11,
    curso: "Brandon Stevens",
    coord: "Jr. Dev",
    dept: "Development",
    status: "activo",
    nturmas: "22",
    avatar: "https://i.pravatar.cc/150?img=8",
    short: "brandon.stevens@example.com",
  },
  {
    id: 12,
    curso: "Megan Richards",
    coord: "P. Manager",
    dept: "Product",
    status: "Encerrado",
    nturmas: "28",
    avatar: "https://i.pravatar.cc/150?img=10",
    short: "megan.richards@example.com",
  },
  {
    id: 13,
    curso: "Oliver Scott",
    coord: "S. Manager",
    dept: "Security",
    status: "activo",
    nturmas: "37",
    avatar: "https://i.pravatar.cc/150?img=12",
    short: "oliver.scott@example.com",
  },
  {
    id: 14,
    curso: "Grace Allen",
    coord: "M. Specialist",
    dept: "Marketing",
    status: "activo",
    nturmas: "30",
    avatar: "https://i.pravatar.cc/150?img=16",
    short: "grace.allen@example.com",
  },
  {
    id: 15,
    curso: "Noah Carter",
    coord: "IT Specialist",
    dept: "I. Technology",
    status: "Encerrado",
    nturmas: "31",
    avatar: "https://i.pravatar.cc/150?img=15",
    short: "noah.carter@example.com",
  },
  {
    id: 16,
    curso: "Ava Perez",
    coord: "Manager",
    dept: "Sales",
    status: "activo",
    nturmas: "29",
    avatar: "https://i.pravatar.cc/150?img=20",
    short: "ava.perez@example.com",
  },
  {
    id: 17,
    curso: "Liam Johnson",
    coord: "Data Analyst",
    dept: "Analysis",
    status: "activo",
    nturmas: "28",
    avatar: "https://i.pravatar.cc/150?img=33",
    short: "liam.johnson@example.com",
  },
  {
    id: 18,
    curso: "Sophia Taylor",
    coord: "QA Analyst",
    dept: "Testing",
    status: "activo",
    nturmas: "27",
    avatar: "https://i.pravatar.cc/150?img=29",
    short: "sophia.taylor@example.com",
  },
  {
    id: 19,
    curso: "Lucas Harris",
    coord: "Administrator",
    dept: "Information Technology",
    status: "Encerrado",
    nturmas: "32",
    avatar: "https://i.pravatar.cc/150?img=50",
    short: "lucas.harris@example.com",
  },
  {
    id: 20,
    curso: "Mia Robinson",
    coord: "Coordinator",
    dept: "Operations",
    status: "activo",
    nturmas: "26",
    avatar: "https://i.pravatar.cc/150?img=45",
    short: "mia.robinson@example.com",
  },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  activo: "success",
  Encerrado: "danger",
  Suspenso: "warning",
};

const INITIAL_VISIBLE_COLUMNS = [
  "curso",
  "coord",
  "nturmas",
  "dept",
  "status",
  "actions",
];

type User = (typeof users)[0];

export default function TableCursos() {
  const router = useRouter();

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedCursoId, setSelectedCursoId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCurso = () => {
    setSelectedCursoId(null); // Modo de adição
    setIsSheetOpen(true);
  };

  const handleEditCurso = (cursoId: number) => {
    setSelectedCursoId(cursoId); // Modo de edição
    setIsSheetOpen(true);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
    setSelectedCursoId(null);
  };

  const handleDeleteClick = (cursoId: number) => {
    setSelectedCursoId(cursoId);
    setIsModalOpen(true); // Abrir a modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCursoId(null);
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
    column: "name",
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
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.curso.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

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

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "curso":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {user.short}
            </p>
          </div>
        );
      case "coord":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {user.dept}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
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
                  onClick={() => router.push(`cursos/${user.id}`)}
                >
                  <EyeIcon />
                </span>
              </Tooltip>
              <Tooltip content="Editar curso">
                <span
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                  onClick={() => handleEditCurso(user.id)}
                >
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Eliminar curso">
                <span
                  className="text-lg text-danger cursor-pointer active:opacity-50"
                  onClick={() => handleDeleteClick(user.id)}
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
              onClick={handleAddCurso}
            >
              Novo curso
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            {users.length} Cursos no total
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
    users.length,
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
      {selectedCursoId !== null && (
        <DeleteModal
          isOpen={isModalOpen}
          onClose={closeModal}
          cursoId={selectedCursoId}
        />
      )}
      {/* Sheet */}
      <SheetDemo
        isOpen={isSheetOpen}
        onClose={closeSheet}
        cursoId={selectedCursoId || 0}
        isEditMode={!!selectedCursoId}
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
