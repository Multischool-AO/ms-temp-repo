import { GraduationCap, PauseCircle, CreditCard, Package, Users, Wallet, X } from "lucide-react";


const deptDetails = [
    {
    icon: GraduationCap,
    title: "Estudantes matriculados",
    url: "/dashboard/customers",
    color: "text-[#23B7E5]",
    bgcolor: "bg-[#23B7E5]",
    value: 970,
    percentage: { increased: true, value: 43 },
  },

  {
    icon: Wallet,
    title: "Cash inflow",
    url: "/dashboard/revenue",
    color: "text-success",
    bgcolor: "bg-success",
    value: 12030849,
    percentage: { increased: true, value: 43 },
    isCurrency: true,
  },
  
  {
    icon: PauseCircle,
    title: "Propinas pendentes",
    url: "/dashboard/revenue",
    color: "text-[#F5B849]",
    bgcolor: "bg-[#F5B849]",
    value: 12030849,
    percentage: { increased: true, value: 43 },
    isCurrency: true,
  },

    {
    icon: CreditCard,
    title: "Pagamentos realizados",
    url: "/dashboard/revenue",
    color: "text-[#6C5F8D]",
    bgcolor: "bg-[#6C5F8D]",
    value: 1323,
    percentage: { increased: true, value: 43 },
  },
];


const cardDetails = [
   {
    icon: GraduationCap,
    title: "Estudantes matriculados",
    url: "/dashboard/customers",
    color: "text-[#23B7E5]",
    bgcolor: "bg-[#23B7E5]",
    value: 970,
    percentage: { increased: true, value: 43 },
  },

  {
    icon: Wallet,
    title: "Cash inflow",
    url: "/dashboard/revenue",
    color: "text-success",
    bgcolor: "bg-success",
    value: 12030849,
    percentage: { increased: true, value: 43 },
    isCurrency: true,
  },
  
  {
    icon: PauseCircle,
    title: "Propinas pendentes",
    url: "/dashboard/revenue",
    color: "text-[#F5B849]",
    bgcolor: "bg-[#F5B849]",
    value: 12030849,
    percentage: { increased: true, value: 43 },
    isCurrency: true,
  },

    {
    icon: CreditCard,
    title: "Pagamentos realizados",
    url: "/dashboard/revenue",
    color: "text-[#6C5F8D]",
    bgcolor: "bg-[#6C5F8D]",
    value: 1323,
    percentage: { increased: true, value: 43 },
  },

];


const notasResume = [
   {
    icon: GraduationCap,
    title: "Estudantes aprovados",
    url: "/dashboard/customers",
    color: "text-success",
    bgcolor: "bg-success",
    value: 700,
    percentage: { increased: true, value: 43 },
  },

  {
    icon: PauseCircle,
    title: "Estudantes em recursos",
    url: "/dashboard/revenue",
    color: "text-warning",
    bgcolor: "bg-warning",
    value: 95,
    percentage: { increased: false, value: 43 },
  },
  
  {
    icon: GraduationCap,
    title: "Exames especiais",
    url: "/dashboard/revenue",
    color: "text-[#6C5F8D]",
    bgcolor: "bg-[#6C5F8D]",
    value: 49,
    percentage: { increased: true, value: 23 },
  },

    {
    icon: X,
    title: "Estudantes Reprovados",
    url: "/dashboard/revenue",
    color: "text-danger",
    bgcolor: "bg-danger",
    value: 150,
    percentage: { increased: false, value: 5},
  },

];

// DADOS ESTÁTICOS
const topCustomersData = [
  {
    image: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png",
    amountSpent: 22390,
    name: "João Katumbela",
    purchases: 23,
    lastPurchase: "5 horas",
  },
  {
    image: "https://png.pngtree.com/png-vector/20240123/ourmid/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_11458426.png",
    amountSpent: 12900,
    name: "Miguel António",
    purchases: 16,
    lastPurchase: "1 dia",
  },
  {
    image: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png",
    amountSpent: 22390,
    name: "João Katumbela",
    purchases: 23,
    lastPurchase: "5 horas",
  },
  {
    image: "https://png.pngtree.com/png-vector/20240123/ourmid/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_11458426.png",
    amountSpent: 12900,
    name: "Miguel António",
    purchases: 16,
    lastPurchase: "1 dia",
  },
  {
    image: "https://png.pngtree.com/png-clipart/20240306/original/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_14519307.png",
    amountSpent: 22390,
    name: "João Katumbela",
    purchases: 23,
    lastPurchase: "5 horas",
  },
  {
    image: "https://png.pngtree.com/png-vector/20240123/ourmid/pngtree-avatar-job-student-flat-portrait-of-african-american-man-png-image_11458426.png",
    amountSpent: 12900,
    name: "Miguel António",
    purchases: 16,
    lastPurchase: "1 dia",
  },
  
];

const topSalesData = [
  {
    image: "https://i.pravatar.cc/150?u=a04258114e29026702",
    amountSpent: 22390,
    name: "Regan Keith",
    items: 5,
    lastPurchase: "1 dia",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    amountSpent: 12900,
    name: "Jane Doe",
    items: 4,
    lastPurchase: "2 dias",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e29026",
    amountSpent: 1900,
    name: "Maia Hancock",
    items: 3,
    lastPurchase: "2 dias",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e290",
    amountSpent: 8990,
    name: "Skyler Powell",
    items: 1,
    lastPurchase: "3 dias",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e2902",
    amountSpent: 8930,
    name: "Andrew Sims",
    items: 2,
    lastPurchase: "4 dias",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e290267",
    amountSpent: 7790,
    name: "Braxton Mcdonald",
    items: 2,
    lastPurchase: "4 dias",
  },
  {
    image: "https://i.pravatar.cc/150?u=a04258114e2902670",
    amountSpent: 1690,
    name: "Jasmin Morgan",
    items: 1,
    lastPurchase: "5 dias",
  },
];

const revenueData = {
  weeklyData: [
    {
      name: "Sáb",
      total: Math.floor(Math.random() * 10) + 1000,
    },
    {
      name: "Dom",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Seg",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Ter",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Qua",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Qui",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Sex",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ],
  monthlyData: [
    {
      name: "1-5",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "6-10",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "11-15",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "16-20",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "21-25",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "26-30",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ],
  yearlyData: [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Fev",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Abr",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mai",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Ago",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Set",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Out",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dez",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ],
};

const newCustomerRegisters = {
  weeklyData: [
 {
      name: "Oct",
      uv: 1000,
      amt: 2400,
    },
    {
      name: "Nov",
      uv: 2000,
      amt: 2210,
    },
    {
      name:"Dez",
      uv: 1500,
      amt: 2290,
    },
    {
      name: "Jan",
      uv: 3000,
      amt: 2000,
    },
    {
      name: "Fev",
      uv: 2000,
      amt: 2181,
    },
    {
      name: "Mar",
      uv: 4000,
      amt: 2500,
    },

  ],
  monthlyData: [
     {
      name: "Jan",
      uv: 100,
      amt: 2400,
    },
    {
      name: "Fev",
      uv: 200,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 150,
      amt: 2290,
    },
    {
      name: "Abr",
      uv: 300,
      amt: 2000,
    },
    {
      name: "Mai",
      uv: 200,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 400,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 219,
      amt: 2100,
    },
    {
      name: "Ago",
      uv: 219,
      amt: 2100,
    },
    {
      name: "Set",
      uv: 219,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 219,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 219,
      amt: 2100,
    },
    {
      name: "Dez",
      uv: 219,
      amt: 2100,
    },
  ],
  yearlyData: [
    {
      name: "Jan",
      uv: 10000,
      amt: 2400,
    },
    {
      name: "Fev",
      uv: 20000,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 15000,
      amt: 2290,
    },
    {
      name: "Abr",
      uv: 30000,
      amt: 2000,
    },
    {
      name: "Mai",
      uv: 20000,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 40000,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 21900,
      amt: 2100,
    },
    {
      name: "Ago",
      uv: 30900,
      amt: 2100,
    },
    {
      name: "Set",
      uv: 10000,
      amt: 2100,
    },
    {
      name: "Out",
      uv: 15500,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 20000,
      amt: 2100,
    },
    {
      name: "Dez",
      uv: 30000,
      amt: 2100,
    },
  ],
};

const productOrders = {
  weeklyData: [
    {
      name: "Sáb",
      uv: 10,
      amt: 2400,
    },
    {
      name: "Dom",
      uv: 20,
      amt: 2210,
    },
    {
      name: "Seg",
      uv: 15,
      amt: 2290,
    },
    {
      name: "Ter",
      uv: 30,
      amt: 2000,
    },
    {
      name: "Qua",
      uv: 20,
      amt: 2181,
    },
    {
      name: "Qui",
      uv: 40,
      amt: 2500,
    },
    {
      name: "Sex",
      uv: 21,
      amt: 2100,
    },
  ],
  monthlyData: [
    {
      name: "1-5",
      uv: 100,
      amt: 2400,
    },
    {
      name: "6-10",
      uv: 200,
      amt: 2210,
    },
    {
      name: "11-15",
      uv: 150,
      amt: 2290,
    },
    {
      name: "16-20",
      uv: 300,
      amt: 2000,
    },
    {
      name: "21-25",
      uv: 200,
      amt: 2181,
    },
    {
      name: "26-30",
      uv: 400,
      amt: 2500,
    },
  ],
  yearlyData: [
    {
      name: "Jan",
      uv: 1000,
      amt: 2400,
    },
    {
      name: "Fev",
      uv: 2000,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 1500,
      amt: 2290,
    },
    {
      name: "Abr",
      uv: 3000,
      amt: 2000,
    },
    {
      name: "Mai",
      uv: 2000,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 4000,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 2190,
      amt: 2100,
    },
    {
      name: "Ago",
      uv: 3000,
      amt: 2100,
    },
    {
      name: "Set",
      uv: 1000,
      amt: 2100,
    },
    {
      name: "Out",
      uv: 1550,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 2000,
      amt: 2100,
    },
    {
      name: "Dez",
      uv: 3000,
      amt: 2100,
    },
  ],
};

export {
  cardDetails,
  revenueData,
  topSalesData,
  topCustomersData,
  newCustomerRegisters,
  productOrders,
  deptDetails,
  notasResume
};
