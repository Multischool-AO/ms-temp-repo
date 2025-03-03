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
import NewOfferForm from "@/components/forms/marquee-offers/new-offer-form";
import { MarqueeOffers } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export default function CreateOffers({
  setOffersData,
}: {
  setOffersData: Dispatch<SetStateAction<MarqueeOffers[] | null>>;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        startContent={<Plus size={15} />}
        size="sm"
        color="primary"
      >
        Nova prova
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Nova prova / exame
              </ModalHeader>
              <ModalBody className="scrollbar-thin mb-5 max-h-[400px] overflow-y-scroll">
                <NewOfferForm onClose={onClose} setOffersData={setOffersData} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
