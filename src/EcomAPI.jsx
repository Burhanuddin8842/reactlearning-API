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
    // console.log(data)

  return (
    <>
    {data?.map((items,index)=>{
        return(
            <SingleEcom {...items} key={items.id}/>
        )
    })}
    </>
  )
}

export default EcomAPI