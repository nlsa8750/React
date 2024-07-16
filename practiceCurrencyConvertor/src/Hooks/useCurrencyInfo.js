import { useState, useEffect  } from "react";

function useCurrencyInfo(currency) {

    const [data, setData] = useState({})

    useEffect(() => {

        const fetchData = async() => {

        const res = await fetch(`https://open.er-api.com/v6/latest/${currency}`)
        const resData = await res.json()
        setData(resData.rates)

    }
    fetchData()
    
},[currency])
//inside rates -> various currencies
return data;

}

export default useCurrencyInfo;