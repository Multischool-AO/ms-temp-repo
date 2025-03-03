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
  cursoId: number;
}

export const DeleteModal = ({ isOpen, onClose, cursoId }: DeleteModalProps) => {
  const handleDelete = () => {
    // Lógica para eliminar o curso com base no `cursoId`
    console.log(`Curso ${cursoId} eliminado`);
    onClose(); // Fechar a modal após a eliminação
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Eliminar Curso</ModalHeader>
        <ModalBody>
          <p>Tem certeza que deseja eliminar o curso de {cursoId}?</p>
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
