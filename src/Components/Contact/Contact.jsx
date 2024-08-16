import { Box, Text } from "@chakra-ui/react";
import ContactForm from "./ContactForm/ContactForm";
const Contact = ({isMobile}) => {
    return(
        <Box href="contact" w="70vw" marginInline="auto" marginBlock={isMobile ? 5 : 20} id="contact">
            <Text fontSize={25} textAlign="center" marginBottom={10}>Contacter nous</Text>
            <ContactForm isMobile={isMobile}/>    
        </Box>
    )
}
export default Contact;