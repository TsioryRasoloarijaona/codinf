import { Box, Button, Image, Text, VStack } from "@chakra-ui/react"
import mixitup from "mixitup"
import { useEffect, useRef,useState} from "react"
import ViewDetails from "./ViewDetails/ViewDetails"
import ProductData from "../../../products.json"
import './ProductComponent.css'
import apiUrl from "../../../url.json"
import axios from "axios"
import chocoData from "../../../choco.json"

const ProductComponent = ({isMobile, handleCart}) => {
    const [chocolates, setChocolates] = useState(null)
    const [origines, setOrigines] = useState(null)
    const chocoUrl = apiUrl.url 
    useEffect(()=> {
        const fetchData = async ()=> {
            const response = await axios.get(`${chocoUrl}/api/chocolates`)
            if (response && response.data){
                setChocolates(response.data.data)
            }
        }
        fetchData()
    }, [chocoUrl])
    useEffect(()=> {
        const fetchData = async ()=> {
            const response = await axios.get(`${chocoUrl}/origines`)
            if (response && response.data){
                setOrigines(response.data.data)
            }
        }
        fetchData()
    }, [chocoUrl])
    const containerRef = useRef(null)
    useEffect(()=> {
        if(containerRef.current){
            mixitup(containerRef.current)
        }
    }, [])

    return(
        <Box w="60vw" marginInline="auto" marginBlock={12}>
            <Text fontSize={25} marginBlock={2}>Nos produits</Text>
           
            <div className={ isMobile ? 'mobile container mixitup-container' : "container mixitup-container product-container"} ref={containerRef}>
                {chocolates?.map((element, index)=> (
                     <Box key={index} className={`mix ${element.origine}`} data-order="4" marginBottom={isMobile ? "2rem" : ""}>
                        <Box overflow="hidden" h={isMobile ? "max-content" : "23rem"} marginBottom={isMobile ? "1rem" : ""}>
                            <Image src={chocoData[index].img}style={{ transition: 'transform 0.3s ease-in-out' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} w="100%"></Image>
                        </Box>
                        <Text fontWeight={"bold"}> {element.nom} </Text>
                        <Text>Prix: {element.prix} Ar</Text>
                     <ViewDetails handleCart={handleCart} elem={element} img={chocoData[index].img} title={element.nom} price={element.prix} description={element.description}></ViewDetails>
                 </Box>
                ))}
            </div>
        </Box>
    )
}

export default ProductComponent