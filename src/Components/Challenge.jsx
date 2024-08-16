import React from 'react'
import useFetch from '../hooks/useFetch'
import Stat1 from './Stat1'
import Stats2 from './Stats2'
import Stats3 from './stats3'

export default function Challenge() {
  
    return (
        <div>
            <div className="stats shadow">

                <Stat1/>

                <Stats2/>
                <Stats3/>

            

            </div>
        </div>
    )
}
