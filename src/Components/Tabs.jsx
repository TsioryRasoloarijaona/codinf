import { useState } from "react"
import log from '../assets/edenia-logo.jpg'

export default function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <>
        
            <div className='flex flex-row rounded-lg justify-between mx-auto w-screen  h-screen overflow-hidden '>
                <div className='w-1/6 px-5 flex flex-col items-center'>
                    {tabs.map((tab, index) => (
                        <div className={`py-2 pb-2 w-full text-center cursor-pointer mb-3 ${activeTab === index ? ' text-gray-700 bg-gray-100   rounded-lg' : ''}`} key={index} onClick={() => setActiveTab(index)}>
                            {tab.label}

                        </div>
                    ))}
                </div>
                <div className=' w-5/6 px-10 py-5 overflow-auto bg-gray-50'>
                    {tabs[activeTab].content}
                </div>
            </div>
        </>
    )
}
