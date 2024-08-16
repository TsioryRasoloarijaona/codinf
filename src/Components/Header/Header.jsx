import React, { useState, useEffect } from 'react';
import { Box, Text, Flex,useBreakpointValue } from "@chakra-ui/react";
import BgImg from "../../pictures/bnn2.png"
import WithSubnavigation from '../MobilNavbar/WithSubnavigation';

const Header = ({cart}) => {
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsFixed(currentScrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box h="65vh" bg="#261302b2" id='home' backgroundImage={BgImg} backgroundAttachment="fixed" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover">
            <WithSubnavigation cart={cart} isFixed={isFixed}/>
            <Box bg="#555555b2" w="100%" h="65vh" position="absolute" top="0" />
            <Flex direction="column" position="relative" h="100%" marginBlock="auto" justifyContent="center">
                <Text fontSize={isMobile ? "3rem" : "4rem"} textAlign="center" color="#fff">
                EDENIA
CHOCOLATERIE
                </Text>
                <Text fontSize={isMobile ? "1.4rem" : "2rem"}  textAlign="center" color="#fffc">
                    Chocolat de l'excellence
                </Text>    
            </Flex>
        </Box>
    );
};

export default Header;
