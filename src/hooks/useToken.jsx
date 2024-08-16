import { useEffect, useState } from "react"
import cookies from 'js-cookie'

const useToken = (URL)=>{
    const URLbase = "https://codinftitans-backend-vmod4mzmzq-uc.a.run.app";
    const [data , setData] = useState()
    const [pending , setPending] = useState(true)
    useEffect(()=>{
        fetch(`${URLbase}/${URL}`,{
            method : 'GET',
            headers : {
                'Authorization' : `Barear ${cookies.get('token')}`
            }
        })
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

export default useToken