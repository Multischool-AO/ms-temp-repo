"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@heroui/react";
import { Plus } from "lucide-react";
import CreateAdminForm from "../../forms/create-admin";

const CreateAdmin = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        color="primary"
        size="sm"
        startContent={<Plus size={15} />}
      >
        Create New
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create new admin
              </ModalHeader>
              <ModalBody className="mb-5">
                <CreateAdminForm onClose={onClose} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateAdmin;
