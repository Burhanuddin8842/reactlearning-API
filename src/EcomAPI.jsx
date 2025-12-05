import React, { useEffect, useState } from 'react'
import SingleEcom from './SingleEcom'

const EcomAPI = () => {
    let [data, setData] = useState([])
    const DataDestructuring = async ()=>{
        let url = 'https://dummyjson.com/products'
        let urlFetch = await fetch(url)
        let res = await urlFetch.json()
        setData(res.products)
    }
    useEffect(()=>{
        DataDestructuring()
    }, [ ])
    console.log(data)

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto w-full p-2 container ">

    {data?.map((items,index)=>{
        return(
            <SingleEcom {...items} key={items.id}/>
        )
    })}
    </div>
    </>
  )
}

export default EcomAPI