const recentStudentsColumns = [
  { name: "ID", uid: "id" },
  { name: "Nº ESTUDANTE", uid: "sid" },
  { name: "NOME", uid: "sname" },
  { name: "DATA", uid: "date" },
  { name: "CURSO", uid: "course" },
  { name: "ESTADO", uid: "status" },
  // { name: "ACTUALIZAR ESTADO", uid: "update_status" },
  { name: "ACÇÕES", uid: "actions" },
];

// DADOS ESTÁTICOS
const recentStudents = [
  {
    id: 1,
    sname: "José António",
    sid: "20241209",  
    date: "04-12-2023",
    course: "Engenharia Informática",
    status: "Pendente",
  },
  {
    id: 2,
    sid: "20243209",
    sname: "José António",
    date: "04-12-2023",
    course: "Contabilidade",
    status: "Finalizado",
  },
  {
    id: 3,
    sid: "20249009",
    sname: "Aldair Agostinho",
    date: "03-12-2023",
    course: "Economia",
    status: "Pendente",
  },
  {
    id: 4,
    sid: "20241210",
    sname: "Euclides Solene",
    date: "03-12-2023",
    course: "Engenharia Informática",
    status: "Finalizado",
  },
  {
    id: 5,
    sid: "20240000",
    sname: "Cristiano José",
    date: "03-12-2023",
    course: "Gestão Empresarial",
    status: "Cancelado",
  },
];

export { recentStudentsColumns, recentStudents };
