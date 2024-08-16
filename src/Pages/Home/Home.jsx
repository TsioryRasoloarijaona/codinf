import React, { useState, useEffect } from 'react';
import { Flex, Divider, useBreakpointValue } from "@chakra-ui/react";
import Header from "../../Components/Header/Header";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import Products from "../../Components/Products/Products";
import Contact from "../../Components/Contact/Contact";
import CircleFollowMouse from '../../Components/CircleFollowMouse/CircleFollowMouse';
import Loader from '../../Components/Loader/Loader';


const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([])

  const handleCart = (elem) => {
    setCart(prevCart => {
       const isInCart = prevCart.includes(elem);
  
       if (isInCart) {
         return prevCart.filter(item => item !== elem);
       }
       else {
         return [...prevCart, elem];
       }
    });
   }
   
   

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false); 
    }, 3000); 
    return () => clearTimeout(timer); 
}, []);

  const isMobile = useBreakpointValue({ base: true, md: false });

 return (
  <>
      <Loader isLoading={isLoading} />
    <Flex direction="column" display={isLoading ? "none" : "flex"}>
      <CircleFollowMouse/>
      <Header cart={cart}/>
      <About isMobile={isMobile} />
      <Divider marginBlock={5} w="50%" marginInline="auto" h="1px" bg="#bbb" />
      <Products handleCart={handleCart} isMobile={isMobile}/>
      <Contact isMobile={isMobile}/>
      <Footer isMobile={isMobile}/>
    </Flex>
  </>
    
 );
};

export default Home;
