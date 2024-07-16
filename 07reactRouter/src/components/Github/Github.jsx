import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {

    const data = useLoaderData()

    // const [data,setData] = useState([])

    // useEffect(() => {

    //     const fetchFollowers = async() => {
    //         const save = await fetch('https://api.github.com/users/hiteshchoudhary')
    //         const convert = await save.json()
    //         setData(convert.followers)

    //     }
    //     fetchFollowers();
    // }, [])

    return (
        <div className='bg-gray-500 text-white text-center text-4xl p-4 max-w-lg mx-auto'>Github Followers : {data.followers}</div>
    )
}

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()

}