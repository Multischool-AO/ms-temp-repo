import { useState, ChangeEvent } from "react";

interface FileInputProps {
  label: string;
  helpText?: string;
  acceptedTypes?: string[]; // Tipos de arquivo aceitos (ex: [".pdf", ".docx", ".jpg"])
  onChange?: (file: File | null) => void; // Agora retorna o arquivo ou null
}

const FileInput = ({
  label,
  helpText,
  acceptedTypes,
  onChange,
}: FileInputProps) => {
  const [fileName, setFileName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setError(""); // Limpa erros anteriores

    if (file) {
      // Valida o tipo do arquivo
      const fileExtension = getFileExtension(file.name);
      if (acceptedTypes && !acceptedTypes.includes(`.${fileExtension}`)) {
        setError(
          `Tipo de arquivo não permitido. Formatos aceitos: ${acceptedTypes.join(", ")}`
        );
        setFileName("");
        if (onChange) onChange(null); // Notifica o componente pai que o arquivo é inválido
        return;
      }

      setFileName(file.name);
      if (onChange) onChange(file); // Notifica o componente pai sobre o arquivo válido
    } else {
      setFileName("");
      if (onChange) onChange(null); // Notifica o componente pai que nenhum arquivo foi selecionado
    }
  };

  // Função para extrair a extensão do arquivo
  const getFileExtension = (filename: string) => {
    return filename.split(".").pop()?.toLowerCase() || ""; // Extrai a extensão e converte para minúsculas
  };

  return (
    <div className="max-w-lg">
      {/* Label */}
      <label className="block text-sm font-medium text-white-700 mb-1">
        {label}
      </label>

      {/* Input de arquivo */}
      <div className="flex items-center">
        <input
          type="file"
          className="hidden"
          id="fileInput"
          onChange={handleFileChange}
          accept={acceptedTypes?.join(",")} // Define os tipos de arquivo aceitos no input
        />
        <label
          htmlFor="fileInput"
          className="flex-1 px-4 py-2 bg-white border dark:border-gray-800 border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer dark:bg-zinc-900 dark:text-white"
        >
          Escolher arquivo
        </label>
        <span className="ml-3 text-sm text-gray-500 truncate">
          {fileName || "Nenhum arquivo selecionado"}
        </span>
      </div>

      {/* Mensagem de erro */}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

      {/* Texto de ajuda */}
      {helpText && <p className="mt-2 text-sm text-gray-500">{helpText}</p>}
    </div>
  );
};

export default FileInput;
