import React from "react";
import { Triangle } from "react-loader-spinner";
import { Flex, Fade } from "@chakra-ui/react";

const Loader = ({ isLoading }) => {
 return (
    <Fade in={isLoading}>
      <Flex justifyContent="center" alignItems="center" w="100vw" position="fixed" top={0} zIndex={199999} h="100vh" bg="#fff" margin="auto" display={!isLoading ? "none" : "flex"}>
        <Triangle height="120" width="120" color="#5e5e5ebf" ariaLabel="Loading" />
      </Flex>
    </Fade>
 );
};

export default Loader;
