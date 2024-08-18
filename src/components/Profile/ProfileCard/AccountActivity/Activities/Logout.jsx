import { useNavigate } from "react-router-dom";
import { remove_Cookie, auth_token_identifier } from "../../../../../util/cookies";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function Logout () {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const navigate = useNavigate();

    function handleLogout () {
        remove_Cookie(auth_token_identifier);
        navigate('/login');
    }

    return <>
        <h3 className="mb-4">Logout</h3>
        <Button className="font-bold" onClick={onOpen} variant="ghost" color='danger'>Logout</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent placement='center' className="mx-auto">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Logout Activity</ModalHeader>
              <ModalBody>
                <p> 
                  Are you sure you want to <span className="font-bold">logout?</span>
                </p>
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button variant="ghost" color="danger" onPress={handleLogout}>
                  Yes, logout
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
}