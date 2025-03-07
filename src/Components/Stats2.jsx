import React from 'react'
import useFetch from '../hooks/useFetch'

export default function Stats2() {
    const{data,pending} = useFetch('product/far')
    return (
        <div className="stat">
            <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <div className="stat-title">produit far</div>
            {data ? (<div className="stat-value">{data.count}</div>) : <span className="loading loading-spinner loading-lg"></span>}

            {data ? (<div className="stat-value">{data.nom}</div>) : null}

        </div>
    )
}
