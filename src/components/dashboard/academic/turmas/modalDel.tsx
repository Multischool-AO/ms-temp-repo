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
  turmaId: number;
}

export const DeleteModal = ({ isOpen, onClose, turmaId }: DeleteModalProps) => {
  const handleDelete = () => {
    // Lógica para eliminar o turma com base no `turmaId`
    console.log(`Curso ${turmaId} eliminado`);
    onClose(); // Fechar a modal após a eliminação
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Eliminar Turma</ModalHeader>
        <ModalBody>
          <p>Tem certeza que deseja eliminar a turma {turmaId}?</p>
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
