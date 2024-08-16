import { useEffect, useState } from "react"

const useFetch = (URL)=>{
    const URLbase = "https://codinftitans-backend-vmod4mzmzq-uc.a.run.app";
    const [data , setData] = useState()
    const [pending , setPending] = useState(true)
    useEffect(()=>{
        fetch(`${URLbase}/${URL}`)
        .then((res)=>{
            if(res.ok){
                return res.json()
            }
            else{
                alert("error fetching data")
            }
        })
        .then(data => {
            setData(data)
            setPending(false)
        })
    }, [URL])

    return {
        data,
        pending
    }
}

export default useFetch