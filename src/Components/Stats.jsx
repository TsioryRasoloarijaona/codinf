import { IoStatsChartSharp } from "react-icons/io5";
import ChartOrigin from "./ChartoOrigin";
import ChartCategory from "./ChartCategory";
import ChartCustomer from "./CustomerChart";
import ProductSum from "./ProductSum";
import Challenge from "./Challenge";
export default function Stats() {
    
    return (
        <div>
            <div className="text-3xl mb-10 flex items-center space-x-3 font-bold"><IoStatsChartSharp className="text-2xl mr-3 text-blue-600" />Statistique</div>
            <Challenge/>
            <div className="grid grid-cols-3 mt-5 space-x-4 space-y-3">
                <ChartOrigin/>
                <ChartCategory/>
                <ChartCustomer/>
                <ProductSum/>
                
            </div>
        </div>

    )
}
