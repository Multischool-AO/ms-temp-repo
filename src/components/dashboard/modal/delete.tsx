import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemId: number | string; // ID pode ser número ou string
  itemType: string; // Tipo do item (curso, cadeira, departamento, estudante, etc.)
  onDelete: (itemId: number | string) => void; // Função de callback para deletar o item
}

export const DeleteModal = ({
  isOpen,
  onClose,
  itemId,
  itemType,
  onDelete,
}: DeleteModalProps) => {
  const handleDelete = () => {
    onDelete(itemId); // Executa a função de deletar passada como prop
    onClose(); // Fechar a modal após a exclusão
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Eliminar {itemType}</ModalHeader>
        <ModalBody>
          <p>
            Tem certeza que deseja eliminar o(a) {itemType} com ID {itemId}?
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleDelete}>
            Eliminar
          </Button>
          <Button variant="flat" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
