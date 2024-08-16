import React from 'react';
import { Box, Flex, Icon, createIcon, Text, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Input, Image, useBreakpointValue } from "@chakra-ui/react";
import { NavLink } from "../NavLink/NavLink";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { SearchIcon } from "@chakra-ui/icons";
import logoImg from "../logo/logo.png";
import { motion } from "framer-motion";
import { HamburgerIcon } from '@chakra-ui/icons';

export const HeartIcon = createIcon({
    displayName: 'HeartIcon',
    path: <FaHeart cursor="pointer" color="#fff" />
});

export const CartIcon = createIcon({
    displayName: 'CartIcon',
    path: <FaCartShopping cursor="pointer" color="#fff" />
});

const NavBar = ({ isFixed }) => {
    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const isMobile = useBreakpointValue({ base: true, md: false });
    
    return (
        <Flex direction="row" justifyContent="space-between" paddingInline={5} paddingBlock={isMobile ? 35 : 0} bg={isFixed ? '#022d1cbf' : 'transparent'} alignItems="center" h="6vh" position={isFixed ? 'fixed' : 'relative'} w="full" zIndex={6} backdropFilter={isFixed ? "blur(6px)" : ""} transition="ease .5s">
            
            <Box>
                <Image src={logoImg} w={130} onClick={() => scrollToElement("home")} />
            </Box>
            <Box>
                <Flex gap={5} direction="row" justifyContent="flex-end">
                    {isMobile ? (
                        <HamburgerIcon fontSize={35} color="#fff"/>
                    ):(
                        <>
                        {NavLink.map((element, index) => (
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} key={index}>
                                <Text color="#fff" onClick={() => scrollToElement(element.link)}>
                                    {element.title}
                                </Text>
                            </motion.div>
                        ))}
                        </>
                    )}
                </Flex>
            </Box>
            <Flex gap={4} display={isMobile ? 'none' : "flex"} >
                <Popover>
                    <PopoverTrigger>
                        <Icon as={SearchIcon} w={5} h={5} paddingRight={1} cursor="pointer" color="#fff" style={{ transition: 'transform 0.3s ease-in-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.5)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}/>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="10px" boxShadow="lg" bg="white" p={4} maxW="300px" mt={2}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Search</PopoverHeader>
                        <PopoverBody>
                            <Input placeholder="you can search what you want" />
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
                        <Icon as={HeartIcon} w={6} h={6} cursor="pointer" color="#090d1e" style={{ transition: 'transform 0.3s ease-in-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.5)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}/>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="10px" boxShadow="lg" bg="white" p={4} maxW="300px" mt={2}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Your like</PopoverHeader>
                        <PopoverBody>
                            <Text>Product you've like</Text>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
                        <Icon as={CartIcon} w={6} h={6} cursor="pointer" color="#fff" style={{ transition: 'transform 0.3s ease-in-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.5)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}/>
                    </PopoverTrigger>
                    <PopoverContent borderRadius="10px" boxShadow="lg" bg="white" p={4} maxW="300px" mt={2}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Cart</PopoverHeader>
                        <PopoverBody>
                            <Text>You're cart</Text>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Flex>
        </Flex>
    );
};

export default NavBar;
