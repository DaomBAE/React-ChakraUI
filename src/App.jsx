import { ChakraProvider, Button , useDisclosure, Flex, Modal, ModalContent, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";

function App() {
   const { isOpen, onOpen, onClose } = useDisclosure (); 

  return (
    <ChakraProvider>
      <Flex minH="100vh" justifyContent="center" alignItems="center">
       <Button onClick={onOpen}>Open</Button>
       <Modal isOpen={isOpen} onClose={onclose}>
           <ModalOverlay/>
           <ModalContent>
            <ModalHeader>Ay, What's Up!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Hell Bro</ModalBody>
            <ModalFooter>
              <Button mr={4} onClick={onClose}>
                닫기
              </Button>
              Designed by, Daom
            </ModalFooter>
           </ModalContent>
         </Modal>
       </Flex>
    </ChakraProvider>
  );
}

export default App;