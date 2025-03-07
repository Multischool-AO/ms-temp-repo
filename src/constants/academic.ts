export const DEPARTAMENTOS = [
  { key: 'eng', label: 'Engenharia' },
  { key: 'inf', label: 'Informática' },
  { key: 'adm', label: 'Administração' },
  { key: 'dir', label: 'Direito' },
  { key: 'med', label: 'Medicina' },
];

export const COORDENADORES = [
  { key: 'prof-jose', label: 'José Silva' },
  { key: 'prof-ana', label: ' Ana Santos' },
  { key: 'prof-carlos', label: ' Carlos Mendes' },
];

export const PRESIDENTES = [
  { key: 'dt-jose', label: 'João Silva' },
  { key: 'dt-ana', label: ' Ana Maria' },
  { key: 'dt-carlos', label: ' José Mendes' },
];

export const ANOACADEMICO = [
  { key: '25', label: '2024/25' },
  { key: '26', label: ' 2025/26' },
  { key: '27', label: ' 2026/27' },
];

export const ANOS = [
  { key: '1', label: '1º ano' },
  { key: '2', label: '2º ano' },
  { key: '3', label: '3º ano' },
  { key: '4', label: '4º ano' },
  { key: '5', label: '5º ano' },
];

export const TURNO = [
  { key: 'matinal', label: 'Matinal' },
  { key: 'trd', label: 'Vespertino' },
  { key: 'noct', label: 'Noturno' },
];
export const SALAS = [
  { key: 'A1', label: 'Sala A1', capacidade: 30 },
  { key: 'A2', label: 'Sala A2', capacidade: 25 },
  { key: 'A3', label: 'Sala A3', capacidade: 35 },
  { key: 'A4', label: 'Sala A4', capacidade: 30 },
  { key: 'A5', label: 'Sala A5', capacidade: 40 },
  { key: 'A6', label: 'Sala A6', capacidade: 20 },
  { key: 'A7', label: 'Sala A7', capacidade: 30 },
  { key: 'A8', label: 'Sala A8', capacidade: 25 },
  { key: 'A9', label: 'Sala A9', capacidade: 35 },

  { key: 'B1', label: 'Sala B1', capacidade: 40 },
  { key: 'B2', label: 'Sala B2', capacidade: 35 },
  { key: 'B3', label: 'Sala B3', capacidade: 30 },
  { key: 'B4', label: 'Sala B4', capacidade: 25 },
  { key: 'B5', label: 'Sala B5', capacidade: 20 },
  { key: 'B6', label: 'Sala B6', capacidade: 40 },
  { key: 'B7', label: 'Sala B7', capacidade: 35 },
  { key: 'B8', label: 'Sala B8', capacidade: 30 },
  { key: 'B9', label: 'Sala B9', capacidade: 25 },

  { key: 'C1', label: 'Sala C1', capacidade: 40 },
  { key: 'C2', label: 'Sala C2', capacidade: 30 },
  { key: 'C3', label: 'Sala C3', capacidade: 25 },
  { key: 'C4', label: 'Sala C4', capacidade: 35 },
  { key: 'C5', label: 'Sala C5', capacidade: 30 },
  { key: 'C6', label: 'Sala C6', capacidade: 40 },
  { key: 'C7', label: 'Sala C7', capacidade: 25 },
  { key: 'C8', label: 'Sala C8', capacidade: 35 },
  { key: 'C9', label: 'Sala C9', capacidade: 30 },

  { key: 'D1', label: 'Sala D1', capacidade: 30 },
  { key: 'D2', label: 'Sala D2', capacidade: 25 },
  { key: 'D3', label: 'Sala D3', capacidade: 40 },
  { key: 'D4', label: 'Sala D4', capacidade: 30 },
  { key: 'D5', label: 'Sala D5', capacidade: 35 },
  { key: 'D6', label: 'Sala D6', capacidade: 25 },
  { key: 'D7', label: 'Sala D7', capacidade: 30 },
  { key: 'D8', label: 'Sala D8', capacidade: 35 },
  { key: 'D9', label: 'Sala D9', capacidade: 40 }
];


export const TIPOS_TURMA = [
  { key: 'normal', label: 'Normal' },
  { key: 'especial', label: 'Especial' },
  { key: 'especial_normal', label: 'Especial Normal' }
];

export const TIPOS_CADEIRA = [
  { key: 'semestral', label: 'Semestral' },
  { key: 'anual', label: 'Anual' },
];

export const TIPOSESTUDANTE = [
  { key: 'Regular', label: 'Regular' },
  { key: 'Transferido', label: 'Transferido' },
  { key: 'Reingresso', label: 'Reingresso' },
  { key: 'Bolseiro', label: 'Bolseiro' },
  { key: 'Especial', label: 'Especial' },
];

export const CURSOS_SUPERIOR = [
  { key: 'enginf', label: 'Engenharia Informática' },
  { key: 'engmech', label: 'Engenharia Mecânica' },
  { key: 'engciv', label: 'Engenharia Civil' },
  { key: 'engele', label: 'Engenharia Elétrica' },
  { key: 'engquim', label: 'Engenharia Química' },
  { key: 'engprod', label: 'Engenharia de Produção' },
  { key: 'adm', label: 'Administração' },
  { key: 'eco', label: 'Economia' },
  { key: 'com', label: 'Comunicação Social' },
  { key: 'psic', label: 'Psicologia' },
  { key: 'bio', label: 'Biologia' },
  { key: 'med', label: 'Medicina' },
  { key: 'farm', label: 'Farmácia' },
  { key: 'vet', label: 'Medicina Veterinária' },
  { key: 'arq', label: 'Arquitetura' },
  { key: 'dir', label: 'Direito' },
  { key: 'engagr', label: 'Engenharia Agronômica' },
  { key: 'ed', label: 'Educação' },
  { key: 'engcomp', label: 'Engenharia Computacional' },
  { key: 'fis', label: 'Física' },
  { key: 'qui', label: 'Química' },
  { key: 'mat', label: 'Matemática' },
  { key: 'hist', label: 'História' },
  { key: 'soci', label: 'Sociologia' },
  { key: 'fil', label: 'Filosofia' },
  { key: 'let', label: 'Letras' },
  { key: 'mus', label: 'Música' }
];


export const AREASENSINO = [
  { key: 'eng', label: 'Engenharia' },
  { key: 'inf', label: 'Informática' },
  { key: 'adm', label: 'Administração' },
  { key: 'dir', label: 'Direito' },
  { key: 'med', label: 'Medicina' },
  { key: 'arq', label: 'Arquitetura' },
  { key: 'ed', label: 'Educação' },
  { key: 'eco', label: 'Economia' },
  { key: 'com', label: 'Comunicação' },
  { key: 'psic', label: 'Psicologia' },
  { key: 'bio', label: 'Biologia' },
  { key: 'mat', label: 'Matemática' },
  { key: 'fis', label: 'Física' },
  { key: 'qui', label: 'Química' },
  { key: 'geo', label: 'Geografia' },
  { key: 'hist', label: 'História' },
  { key: 'soc', label: 'Sociologia' },
  { key: 'fil', label: 'Filosofia' },
  { key: 'let', label: 'Letras' },
  { key: 'enf', label: 'Enfermagem' },
  { key: 'nut', label: 'Nutrição' },
  { key: 'vet', label: 'Medicina Veterinária' },
  { key: 'farm', label: 'Farmácia' },
  { key: 'tur', label: 'Turismo' },
  { key: 'agr', label: 'Agronomia' },
  { key: 'des', label: 'Design' },
  { key: 'art', label: 'Artes Visuais' },
  { key: 'mus', label: 'Música' },
  { key: 'edfis', label: 'Educação Física' },
  { key: 'teo', label: 'Teologia' }
];


export const COURSE_STATES = ['Activo', 'Inativo', 'Encerrado'];

export const ests = [
  {
    id: 1,
    est: "Ana Silva",
    nmatr: "20250001",
    ano: "1º ano",
    sala: "A23",
    trm: "EINF1-M1",
    course: "Engenharia Informática",
    status: "Activa",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    est: "Carlos Mendes",
    nmatr: "20250002",
    ano: "2º ano",
    sala: "B13",
    trm: "GEMP2-M2",
    course: "Gestão Empresarial",
    status: "Trancada",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    est: "Beatriz Costa",
    nmatr: "20250003",
    ano: "1º ano",
    sala: "C03",
    trm: "DIR1-T1",
    course: "Direito",
    status: "Pendente",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    est: "Fernando Oliveira",
    nmatr: "20250004",
    ano: "3º ano",
    sala: "B12",
    trm: "CON1-N1",
    course: "Contabilidade",
    status: "Concluída",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    est: "Sara Lima",
    nmatr: "20250005",
    ano: "1º ano",
    sala: "A07",
    trm: "MED1-M3",
    course: "Medicina",
    status: "Activa",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    est: "João Pereira",
    nmatr: "20250006",
    ano: "2º ano",
    sala: "A21",
    trm: "EINF2-M1",
    course: "Engenharia Informática",
    status: "Activa",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    est: "Mariana Rocha",
    nmatr: "20250007",
    ano: "1º ano",
    sala: "B11",
    trm: "GEMP1-M2",
    course: "Gestão Empresarial",
    status: "Pendente",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    est: "Rui Santos",
    nmatr: "20250008",
    ano: "3º ano",
    sala: "C02",
    trm: "DIR3-T1",
    course: "Direito",
    status: "Concluída",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    est: "Tatiana Gomes",
    nmatr: "20250009",
    ano: "2º ano",
    sala: "A10",
    trm: "MED2-M3",
    course: "Medicina",
    status: "Activa",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    est: "Pedro Almeida",
    nmatr: "20250010",
    ano: "1º ano",
    sala: "B20",
    trm: "CON1-N2",
    course: "Contabilidade",
    status: "Trancada",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    est: "Inês Teixeira",
    nmatr: "20250011",
    ano: "3º ano",
    sala: "A15",
    trm: "EINF3-M1",
    course: "Engenharia Informática",
    status: "Activa",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    est: "Luís Ferreira",
    nmatr: "20250012",
    ano: "1º ano",
    sala: "B14",
    trm: "GEMP1-M3",
    course: "Gestão Empresarial",
    status: "Pendente",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    est: "Carla Antunes",
    nmatr: "20250013",
    ano: "2º ano",
    sala: "C05",
    trm: "DIR2-T1",
    course: "Direito",
    status: "Activa",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    est: "Hugo Correia",
    nmatr: "20250014",
    ano: "1º ano",
    sala: "A08",
    trm: "MED1-M4",
    course: "Medicina",
    status: "Trancada",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    est: "Vanessa Lopes",
    nmatr: "20250015",
    ano: "3º ano",
    sala: "B17",
    trm: "CON3-N1",
    course: "Contabilidade",
    status: "Concluída",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    est: "André Costa",
    nmatr: "20250016",
    ano: "2º ano",
    sala: "A11",
    trm: "EINF2-M2",
    course: "Engenharia Informática",
    status: "Activa",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    est: "Raquel Pinto",
    nmatr: "20250017",
    ano: "1º ano",
    sala: "B09",
    trm: "GEMP1-M4",
    course: "Gestão Empresarial",
    status: "Pendente",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    est: "Eduardo Martins",
    nmatr: "20250018",
    ano: "3º ano",
    sala: "C06",
    trm: "DIR3-T2",
    course: "Direito",
    status: "Concluída",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    est: "Cláudia Ribeiro",
    nmatr: "20250019",
    ano: "2º ano",
    sala: "A19",
    trm: "MED2-M2",
    course: "Medicina",
    status: "Activa",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    est: "Fábio Mendes",
    nmatr: "20250020",
    ano: "1º ano",
    sala: "B05",
    trm: "CON1-N3",
    course: "Contabilidade",
    status: "Trancada",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 21,
    est: "Patrícia Sousa",
    nmatr: "20250021",
    ano: "2º ano",
    sala: "A22",
    trm: "EINF2-M3",
    course: "Engenharia Informática",
    status: "Activa",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 22,
    est: "Bruno Figueiredo",
    nmatr: "20250022",
    ano: "1º ano",
    sala: "B03",
    trm: "GEMP1-M1",
    course: "Gestão Empresarial",
    status: "Pendente",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 23,
    est: "Cátia Nascimento",
    nmatr: "20250023",
    ano: "3º ano",
    sala: "C04",
    trm: "DIR3-T3",
    course: "Direito",
    status: "Concluída",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 24,
    est: "Ricardo Coelho",
    nmatr: "20250024",
    ano: "1º ano",
    sala: "A06",
    trm: "MED1-M2",
    course: "Medicina",
    status: "Activa",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 25,
    est: "Débora Lima",
    nmatr: "20250025",
    ano: "2º ano",
    sala: "B16",
    trm: "CON2-N1",
    course: "Contabilidade",
    status: "Trancada",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 26,
    est: "Tiago Duarte",
    nmatr: "20250026",
    ano: "3º ano",
    sala: "A09",
    trm: "EINF3-M2",
    course: "Engenharia Informática",
    status: "Activa",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 27,
    est: "Helena Martins",
    nmatr: "20250027",
    ano: "1º ano",
    sala: "B18",
    trm: "GEMP1-M5",
    course: "Gestão Empresarial",
    status: "Pendente",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 28,
    est: "Diogo Almeida",
    nmatr: "20250028",
    ano: "2º ano",
    sala: "C07",
    trm: "DIR2-T2",
    course: "Direito",
    status: "Concluída",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 29,
    est: "Tatiana Neves",
    nmatr: "20250029",
    ano: "1º ano",
    sala: "A13",
    trm: "MED1-M5",
    course: "Medicina",
    status: "Activa",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 30,
    est: "Gonçalo Santos",
    nmatr: "20250030",
    ano: "3º ano",
    sala: "B15",
    trm: "CON3-N2",
    course: "Contabilidade",
    status: "Trancada",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const estsF = [
  {
    id: 1,
    est: "Ana Silva",
    nmatr: "20250001",
    mes: "Fevereiro",
    valor: "72.450 kz",
    trm: "EINF1-M1",
    tax: "15.000 kz",
    status: "Pago",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    est: "Carlos Mendes",
    nmatr: "20250002",
    mes: "Fevereiro",
    valor: "68.300 kz",
    trm: "GEMP2-M2",
    tax: "12.500 kz",
    status: "Inadimplente",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    est: "Beatriz Costa",
    nmatr: "20250003",
    mes: "Fevereiro",
    valor: "89.750 kz",
    trm: "DIR1-T1",
    tax: "18.000 kz",
    status: "Pendente",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    est: "Fernando Oliveira",
    nmatr: "20250004",
    mes: "Janeiro",
    valor: "60.200 kz",
    trm: "CON1-N1",
    tax: "10.000 kz",
    status: "Pendente",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    est: "Sara Lima",
    nmatr: "20250005",
    mes: "Fevereiro",
    valor: "95.900 kz",
    trm: "MED1-M3",
    tax: "20.000 kz",
    status: "Pago",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    est: "João Pereira",
    nmatr: "20250006",
    mes: "Fevereiro",
    valor: "77.800 kz",
    trm: "EINF2-M1",
    tax: "16.500 kz",
    status: "Pago",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    est: "Mariana Rocha",
    nmatr: "20250007",
    mes: "Fevereiro",
    valor: "54.980 kz",
    trm: "GEMP1-M2",
    tax: "11.000 kz",
    status: "Em atraso",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    est: "Rui Santos",
    nmatr: "20250008",
    mes: "Janeiro",
    valor: "85.600 kz",
    trm: "DIR3-T1",
    tax: "17.500 kz",
    status: "Pago",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    est: "Tatiana Gomes",
    nmatr: "20250009",
    mes: "Fevereiro",
    valor: "90.100 kz",
    trm: "MED2-M3",
    tax: "19.000 kz",
    status: "Pago",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    est: "Pedro Almeida",
    nmatr: "20250010",
    mes: "Fevereiro",
    valor: "65.400 kz",
    trm: "CON1-N2",
    tax: "13.000 kz",
    status: "Inadimplente",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    est: "Inês Teixeira",
    nmatr: "20250011",
    mes: "Janeiro",
    valor: "74.300 kz",
    trm: "EINF3-M1",
    tax: "15.500 kz",
    status: "Pago",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    est: "Luís Ferreira",
    nmatr: "20250012",
    mes: "Fevereiro",
    valor: "58.700 kz",
    trm: "GEMP1-M3",
    tax: "12.000 kz",
    status: "Em atraso",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export const estsP = [
  {
    id: 1,
    est: "Ana Silva",
    nmatr: "20250001",
    trm: "EINF1-M1",
    ent: "Shoprite",
    valor: "72.450 kz",
    desc: `${Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000} kz`,
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    est: "Carlos Mendes",
    nmatr: "20250002",
    trm: "GEMP2-M2",
    ent: "Belas Shopping",
    valor: "68.300 kz",
    desc: `${Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000} kz`,
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    est: "Beatriz Costa",
    nmatr: "20250003",
    trm: "DIR1-T1",
    ent: "Kero",
    valor: "89.750 kz",
    desc: `${Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000} kz`,
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    est: "Fernando Oliveira",
    nmatr: "20250004",
    trm: "CON1-N1",
    ent: "Game",
    valor: "60.200 kz",
    desc: `${Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000} kz`,
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    est: "Sara Lima",
    nmatr: "20250005",
    trm: "MED1-M3",
    ent: "Continente",
    valor: "95.900 kz",
    desc: `${Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000} kz`,
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    est: "João Pereira",
    nmatr: "20250006",
    trm: "EINF2-M1",
    ent: "Baía Mall",
    valor: "77.800 kz",
    desc: `${Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000} kz`,
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    est: "Mariana Rocha",
    nmatr: "20250007",
    trm: "GEMP1-M2",
    ent: "Maxi",
    valor: "54.980 kz",
    desc: `${Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000} kz`,
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    est: "Rui Santos",
    nmatr: "20250008",
    trm: "DIR3-T1",
    ent: "Avenida",
    valor: "85.600 kz",
    desc: `${Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000} kz`,
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    est: "Tatiana Gomes",
    nmatr: "20250009",
    trm: "MED2-M3",
    ent: "Candando",
    valor: "90.100 kz",
    desc: `${Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000} kz`,
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    est: "Pedro Almeida",
    nmatr: "20250010",
    trm: "CON1-N2",
    ent: "Shoprite",
    valor: "65.400 kz",
    desc: `${Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000} kz`,
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    est: "Inês Teixeira",
    nmatr: "20250011",
    trm: "EINF3-M1",
    ent: "Belas Shopping",
    valor: "74.300 kz",
    desc: `${Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000} kz`,
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    est: "Luís Ferreira",
    nmatr: "20250012",
    trm: "GEMP1-M3",
    ent: "Kero",
    valor: "58.700 kz",
    desc: `${Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000} kz`,
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "ESTUDANTE", uid: "est", sortable: true },
  { name: "Nº MATRÍCULA", uid: "nmatr", sortable: true },
  { name: "TURMA", uid: "trm", sortable: true },
  { name: "ENTIDADE", uid: "ent", sortable: true }, 
  { name: "VALOR", uid: "valor", sortable: true },
  { name: "DESCONTO", uid: "desconto", sortable: true },
  { name: "ESTADO", uid: "status", sortable: true },
  { name: "AÇÕES", uid: "actions" },
];

const bancosAngolanos = [
  "Banco BAI", "Banco BIC", "Banco Sol", "Banco Keve", "Banco BFA", 
  "Banco Económico", "Banco Millennium Atlântico", "Banco Yetu", "Banco Postal", "Standard Bank"
];

const getRandomDesconto = () => Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000;
const getRandomBanco = () => bancosAngolanos[Math.floor(Math.random() * bancosAngolanos.length)];

export const estsC = [
  { id: 1, est: "Ana Silva", nmatr: "20250001", trm: "EINF1-M1", ent: getRandomBanco(), valor: "72.450 kz", desconto: `${getRandomDesconto()} kz`, status: "Pago", actions: null },
  { id: 2, est: "Carlos Mendes", nmatr: "20250002", trm: "GEMP2-M2", ent: getRandomBanco(), valor: "68.300 kz", desconto: `${getRandomDesconto()} kz`, status: "Recusado", actions: null },
  { id: 3, est: "Beatriz Costa", nmatr: "20250003", trm: "DIR1-T1", ent: getRandomBanco(), valor: "89.750 kz", desconto: `${getRandomDesconto()} kz`, status: "Pendente", actions: null },
  { id: 4, est: "Fernando Oliveira", nmatr: "20250004", trm: "CON1-N1", ent: getRandomBanco(), valor: "60.200 kz", desconto: `${getRandomDesconto()} kz`, status: "Pendente", actions: null },
  { id: 5, est: "Sara Lima", nmatr: "20250005", trm: "MED1-M3", ent: getRandomBanco(), valor: "95.900 kz", desconto: `${getRandomDesconto()} kz`, status: "Pago", actions: null },
  { id: 6, est: "João Pereira", nmatr: "20250006", trm: "EINF2-M1", ent: getRandomBanco(), valor: "77.800 kz", desconto: `${getRandomDesconto()} kz`, status: "Pago", actions: null },
  { id: 7, est: "Mariana Rocha", nmatr: "20250007", trm: "GEMP1-M2", ent: getRandomBanco(), valor: "54.980 kz", desconto: `${getRandomDesconto()} kz`, status: "Em atraso", actions: null },
  { id: 8, est: "Rui Santos", nmatr: "20250008", trm: "DIR3-T1", ent: getRandomBanco(), valor: "85.600 kz", desconto: `${getRandomDesconto()} kz`, status: "Pago", actions: null },
  { id: 9, est: "Tatiana Gomes", nmatr: "20250009", trm: "MED2-M3", ent: getRandomBanco(), valor: "90.100 kz", desconto: `${getRandomDesconto()} kz`, status: "Pago", actions: null },
  { id: 10, est: "Pedro Almeida", nmatr: "20250010", trm: "CON1-N2", ent: getRandomBanco(), valor: "65.400 kz", desconto: `${getRandomDesconto()} kz`, status: "Recusado", actions: null },
  { id: 11, est: "Inês Teixeira", nmatr: "20250011", trm: "EINF3-M1", ent: getRandomBanco(), valor: "74.300 kz", desconto: `${getRandomDesconto()} kz`, status: "Pago", actions: null },
  { id: 12, est: "Luís Ferreira", nmatr: "20250012", trm: "GEMP1-M3", ent: getRandomBanco(), valor: "58.700 kz", desconto: `${getRandomDesconto()} kz`, status: "Em atraso", actions: null },
];

export const turmasD = [
  { id: 1, trm: "EINF1-M1", curso: "Engenharia Informática", status: "Publicadas", actions: null },
  { id: 2, trm: "GEMP2-M2", curso: "Gestão de Empresas", status: "Em atraso", actions: null },
  { id: 3, trm: "DIR1-T1", curso: "Direito", status: "Pendentes", actions: null },
  { id: 4, trm: "CON1-N1", curso: "Contabilidade", status: "Publicadas", actions: null },
  { id: 5, trm: "MED1-M3", curso: "Medicina", status: "Em atraso", actions: null },
  { id: 6, trm: "EINF2-M1", curso: "Engenharia Informática", status: "Pendentes", actions: null },
  { id: 7, trm: "GEMP1-M2", curso: "Gestão de Empresas", status: "Publicadas", actions: null },
  { id: 8, trm: "DIR3-T1", curso: "Direito", status: "Em atraso", actions: null },
  { id: 9, trm: "MED2-M3", curso: "Medicina", status: "Publicadas", actions: null },
  { id: 10, trm: "CON1-N2", curso: "Contabilidade", status: "Pendentes", actions: null },
  { id: 11, trm: "EINF3-M1", curso: "Engenharia Informática", status: "Em atraso", actions: null },
  { id: 12, trm: "GEMP1-M3", curso: "Gestão de Empresas", status: "Publicadas", actions: null },
];


export const estsN = [
  {
    id: 1,
    est: "Ana Silva",
    nmatr: "20250001",
    trm: "EINF1-M1",
    curso: "Engenharia Informática",
    cad: "Algoritmos",
    mfinal: "17",
    status: "Aprovado",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    est: "Carlos Mendes",
    nmatr: "20250002",
    trm: "GEMP2-M2",
    curso: "Gestão Empresarial",
    cad: "Administração Financeira",
    mfinal: "05",
    status: "Reprovado",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    est: "Beatriz Costa",
    nmatr: "20250003",
    trm: "DIR1-T1",
    curso: "Direito",
    cad: "Direito Civil",
    mfinal: "09",
    status: "Recurso",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    est: "Fernando Oliveira",
    nmatr: "20250004",
    trm: "CON1-N1",
    curso: "Contabilidade",
    cad: "Auditoria",
    mfinal: "16",
    status: "Aprovado",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    est: "Sara Lima",
    nmatr: "20250005",
    trm: "MED1-M3",
    curso: "Medicina",
    cad: "Anatomia",
    mfinal: "-- ",
    status: "Especial",
    actions: null,
    avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];
