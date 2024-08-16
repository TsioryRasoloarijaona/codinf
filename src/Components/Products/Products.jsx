import { Box } from "@chakra-ui/react"
import ProductComponent from "./ProductComponent/ProductComponent";
const Products = ({isMobile, handleCart}) => {
    return(
        <Box id="products">
            <ProductComponent handleCart={handleCart} isMobile={isMobile} />
        </Box>
    )
}

export default Products;