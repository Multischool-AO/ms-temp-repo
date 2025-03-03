const topCustomersColumns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NOME COMPLETO", uid: "name", sortable: true },
  { name: "Curso", uid: "email" },
  { name: "ESTADO", uid: "amount", sortable: true },
  { name: "DATA", uid: "total_purchases", sortable: true },
  { name: "CREATED_AT", uid: "created_at" },
  { name: "LAST_LOGIN", uid: "last_login" },
];

const topCustomersData = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@example.com",
    amount: 52342,
    total_purchases: 215,
    created_at: "12/02/22",
    last_login: "03/04/23",
  avatar: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png",
  },
  {
    id: 2,
    name: "Amina Ndlovu",
    email: "amina.ndlovu@example.com",
    amount: 42412,
    total_purchases: 190,
    created_at: "11/03/22",
    last_login: "30/04/22",avatar: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png"
  },
  {
    id: 3,
    name: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    amount: 41232,
    total_purchases: 189,
    created_at: "12/03/22",
    last_login: "13/04/23",avatar: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png"
  },
  {
    id: 4,
    name: "Mário Kenzo",
    email: "kwame.mensah@example.com",
    amount: 39028,
    total_purchases: 186,
    created_at: "11/02/22",
    last_login: "13/12/22",avatar: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png"
  },
  {
    id: 5,
    name: "Katumbela João",
    email: "ana.costa@example.com",
    amount: 35673,
    total_purchases: 179,
    created_at: "11/03/22",
    last_login: "30/04/22",avatar: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png"
  },
  {
    id: 6,
    name: "Bakari Juma",
    email: "bakari.juma@example.com",
    amount: 32212,
    total_purchases: 179,
    created_at: "11/01/22",
    last_login: "30/03/22",avatar: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png"
  },
  {
    id: 7,
    name: "Luca Romano",
    email: "luca.romano@example.com",
    amount: 29098,
    total_purchases: 175,
    created_at: "01/04/22",
    last_login: "13/12/22",avatar: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png"
  },
  {
    id: 8,
    name: "Ndidi Okafor",
    email: "ndidi.okafor@example.com",
    amount: 28909,
    total_purchases: 174,
    created_at: "01/03/22",
    last_login: "23/11/22",avatar: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png"
  },
  {
    id: 9,
    name: "Catarina Fernandes",
    email: "catarina.fernandes@example.com",
    amount: 26788,
    total_purchases: 165,
    created_at: "11/03/22",
    last_login: "30/04/22",avatar: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png"
  },
  {
    id: 10,
    name: "Adérito Figueiredo",
    email: "aderito.figueiredo@example.com",
    amount: 20100,
    total_purchases: 151,
    created_at: "01/01/22",
    last_login: "12/02/22",avatar: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png"
  },
  {
    id: 11,
    name: "Zola Tshabalala",
    email: "zola.tshabalala@example.com",
    amount: 19999,
    total_purchases: 150,
    created_at: "01/07/22",
    last_login: "23/01/23",avatar: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png"
  },
  {
    id: 12,
    name: "Inês Pereira",
    email: "ines.pereira@example.com",
    amount: 18922,
    total_purchases: 144,
    created_at: "01/01/23",
    last_login: "13/05/23",avatar: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png"
  },
  {
    id: 13,
    name: "Nelson Dlamini",
    email: "nelson.dlamini@example.com",
    amount: 16000,
    total_purchases: 131,
    created_at: "01/01/23",
    last_login: "23/05/23",avatar: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png"
  },
  {
    id: 14,
    name: "Cláudia Matos",
    email: "claudia.matos@example.com",
    amount: 10200,
    total_purchases: 110,
    created_at: "11/12/22",
    last_login: "23/01/23",avatar: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png"
  },
  {
    id: 15,
    name: "Hassan Yusuf",
    email: "hassan.yusuf@example.com",
    amount: 5898,
    total_purchases: 67,
    created_at: "11/02/23",
    last_login: "13/06/23",avatar: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png"
  },
  {
    id: 16,
    name: "Filipa Rocha",
    email: "filipa.rocha@example.com",
    amount: 3999,
    total_purchases: 1,
    created_at: "20/05/23",
    last_login: "30/06/23",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
  {
    id: 17,
    name: "Mohamed Kamara",
    email: "mohamed.kamara@example.com",
    amount: 1499,
    total_purchases: 1,
    created_at: "01/03/23",
    last_login: "23/11/23",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 18,
    name: "Beatriz Almeida",
    email: "beatriz.almeida@example.com",
    amount: 749,
    total_purchases: 1,
    created_at: "11/03/23",
    last_login: "21/10/23",
    avatar: "https://i.pravatar.cc/150?img=29",
  },
  {
    id: 19,
    name: "Ahmed Sarr",
    email: "ahmed.sarr@example.com",
    amount: 749,
    total_purchases: 1,
    created_at: "01/12/23",
    last_login: "10/12/23",
    avatar: "https://i.pravatar.cc/150?img=50",
  },
  {
    id: 20,
    name: "Sofia Lopes",
    email: "sofia.lopes@example.com",
    amount: 500,
    total_purchases: 1,
    created_at: "01/12/23",
    last_login: "03/12/23",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
];

export { topCustomersColumns, topCustomersData };

