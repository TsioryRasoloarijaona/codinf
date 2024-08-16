import { Box, Flex,  Image, Text } from "@chakra-ui/react";
import ImgLogo from "../../pictures/IMG_20240410_094247.jpg"
import EdeniaLogo from "../../assets/edenia-logo.jpg" 
const About = ({ isMobile }) => {
    return(
        <Box marginTop={6} id="about">
            <Text textAlign="center" fontSize={30}>A propos de nous</Text>
                <Flex marginInline="auto" w={isMobile ? "80vw" : "70vw" } marginBlock={6} gap={5} direction={isMobile ? "column" : "row"}> 
                    <Box border={isMobile ? "1px solid #d9d9d9" : ""}>
                        <Image src={EdeniaLogo} w="25rem" marginInline="auto" />
                    </Box>
                    <Flex direction="column" justifyContent="space-arround" w={isMobile ? "100%" : "60%"} paddingBlock={isMobile ? 1 : 4} textAlign={isMobile ? "center" : ""} >
                        <Text fontSize={22}>EDENIA
CHOCOLATERIE</Text>
                        {/**
                        * todo: changes this text to your own text
                        */}
                        <Text w="100%">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste commodi facilis perspiciatis, sint eos dolores voluptatibus esse repellat animi maiores enim quidem libero provident doloremque suscipit nemo, ducimus quasi quaerat.
                        </Text>
                    </Flex>
                </Flex>
        </Box>
    )
}
export default About;