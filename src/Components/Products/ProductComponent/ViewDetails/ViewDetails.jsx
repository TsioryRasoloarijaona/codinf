import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Text, Image, Flex } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";

const ViewDetails = ({img, title, price, description, handleCart, elem}) => {
 const { isOpen, onOpen, onClose } = useDisclosure();
 const [heartClicked, setHeartClicked] = useState(false);
 const [cartClicked, setCartClicked] = useState(false);

 const toggleHeart = () => {
   setHeartClicked(!heartClicked);
 };

 const toggleCart = () => {
   setCartClicked(!cartClicked);
 };

 return(
    <>
      <Box my={4}>
        <Button onClick={onOpen}> Details </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={3}>
          <ModalHeader> {title} </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={img} w="100%"></Image>
            <Text marginTop={5}> {description} </Text>
            <Text>Prix: {price} Ar</Text>
            <Flex gap={4}>
              <FaHeart fontSize="1.6rem" style={{ transition: 'transform 0.3s ease-in-out', color: heartClicked ? 'red' : 'black' }} onClick={toggleHeart} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}/>
              <FaCartShopping fontSize="1.6rem" style={{ transition: 'transform 0.3s ease-in-out', color: cartClicked ? '#ac840c' : 'black' }} onClick={()=> {
                handleCart(elem)
                toggleCart()
              }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}/>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
 )
}
export default ViewDetails;
