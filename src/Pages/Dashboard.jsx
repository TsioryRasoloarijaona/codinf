import Tabs from "../Components/Tabs"
import log from '../assets/edenia-logo.jpg'
import { TiShoppingCart } from "react-icons/ti";
import Order from "../Components/Order";
import CircleFollowMouse from "../Components/CircleFollowMouse/CircleFollowMouse";
import { ImStatsDots } from "react-icons/im";
import Stats from "../Components/Stats";
export default function Dashboard() {
    const tabs = [
        {label : <div className="h-1/2 w-1/2"><img src={log} alt="" className="" /></div>, content : null},
        { label: <p className="flex flex-row justify-evenly items-center space-x-5 w-1/2"><TiShoppingCart className="text-3xl text-orange-700"/>order</p>, content : <Order/>},
        { label: <p className="flex flex-row justify-evenly items-center space-x-5 w-1/2"><ImStatsDots className="text-3xl text-blue-600"/>stats</p>, content : <Stats/>},
        { label: <p className="flex flex-row justify-evenly items-center space-x-5 w-1/2"><TiShoppingCart className="text-3xl"/>order</p>, content : <p>content</p>},
        { label: <p className="flex flex-row justify-evenly items-center space-x-5 w-1/2"><TiShoppingCart className="text-3xl"/>order</p>, content : <p>content</p>},
        { label: <p className="flex flex-row justify-evenly items-center space-x-5 w-1/2"><TiShoppingCart className="text-3xl"/>order</p>, content : <p>content</p>},
        
    ]
    return (
      <>
      <CircleFollowMouse/>
      <Tabs tabs={tabs}/>
      </>
    )
}
