import { Box, Text, Flex, Divider } from "@chakra-ui/react";
import { IconList } from "./IconList";

const Footer = ({isMobile}) => {
    return(
        <Flex direction="column" justifyContent="space-between" paddingBlock={2} w={isMobile ? "90vw" : "45vw"} alignItems="center" margin="auto">
            {/**
             * todo: changes this text to your own text
             */}
            <Text fontSize="2rem" textAlign="center">Edenia chocolaterie</Text>
            <Text textAlign="center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti similique iste distinctio iure accusamus officia eaque nihil, aut eum beatae voluptate accusantium ipsa minus praesentium voluptatem? Error, obcaecati quae!</Text>
            <Box marginBlock={4}>
                <Flex direction="row" gap={5}>
                    {IconList.map((elem)=>(
                    <Box key={elem.id * Math.random(1, 10000)}>
                        {elem.icon}
                    </Box>
                    ))}
                </Flex>
            </Box>
            <Divider w={12} h="2px" bg="black" marginBlock={3} />
            <Text textAlign="center" marginTop={2}>Copyright &copy; 2024. All right reserved.</Text>
        </Flex>
    )
}
export default Footer;