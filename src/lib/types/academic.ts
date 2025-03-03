
export interface DurationInputProps {
  institutionType: "superior" | "medio";
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}

export interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  cursoId: number;
}

export interface ChartConfig {
  [key: string]: {
    label: string;
    color?: string;
  };
}