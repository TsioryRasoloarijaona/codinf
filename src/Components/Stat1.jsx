import React from 'react'
import useFetch from '../hooks/useFetch'
export default function Stat1() {
    const{data,pending} = useFetch('clients')
    return (
        <div className="stat">
            <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="stat-title">total client</div>
            {data ? (<div className="stat-value">{data.length}</div>) : <span className="loading loading-spinner loading-lg"></span>}
            <div className="stat-desc"></div>
        </div>
    )
}
