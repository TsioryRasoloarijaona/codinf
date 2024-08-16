import React, { useState, useRef } from "react"
import { Box, IconButton, HStack, Text, Image } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import team from "../../team.json"

const Team = ({ isMobile }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const handleNext = () => {
       const nextIndex = (currentIndex + 1) % team.length;
       setCurrentIndex(nextIndex);
       carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
    };

    const handlePrev = () => {
       const prevIndex = (currentIndex - 1 + team.length) % team.length;
       setCurrentIndex(prevIndex);
       carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
    };
    return(
        <Box w="67vw" marginBottom={10} marginTop={6} marginInline="auto">
            <Text textAlign="center" fontSize={27}> Our team </Text>
            <Box position="relative" width="67vw" overflow="hidden">
            <HStack
                ref={carouselRef}
                spacing={4}
                overflowX="scroll"
                scrollBehavior="smooth"
                padding={4}
                __css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '&::-ms-scrollbar': {
            display: 'none',
          },
          '&::-webkit-scrollbar-track': {
            display: 'none',
          },
          '&::-webkit-scrollbar-thumb': {
                display: 'none',
              },
            }}
          >
            {team.map((team) => (
              <Box key={team.id} padding={4} borderRadius="md" bg="white"  minWidth={isMobile ? "17rem" : "30rem"} >
                <Box overflow="hidden" h={isMobile ? "25rem" : "35rem"} display="flex" justifyContent="center" alignItems="center">
                    <Image src={team.img} position="relative" />
                </Box>
                <Text fontSize="lg" fontWeight="bold">{team.name}</Text>
                <Text> {team.role}</Text>
              </Box>
            ))}
          </HStack>
          <IconButton
            aria-label="Previous"
            icon={<ChevronLeftIcon />}
            onClick={handlePrev}
            position="absolute"
            left={2}
            top="50%"
            transform="translateY(-50%)"
          />
          <IconButton
            aria-label="Next"
            icon={<ChevronRightIcon />}
            onClick={handleNext}
            position="absolute"
            right={2}
            top="50%"
            transform="translateY(-50%)"
          />
        </Box>
    </Box>
    )
}

export default Team