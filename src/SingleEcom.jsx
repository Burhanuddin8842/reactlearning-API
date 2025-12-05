import React, { useState } from 'react'
// import './global.css'
import './DialogBox.css'

const SingleEcom = ({ thumbnail, title, description }) => {
    // let desc = 
    let [desc,setDesc]=useState(false)
    console.log(desc)
    return (
        <>
            <div className={`w-full p-1 ${desc ? 'opacity-65' : ''}`}>
                <div className="shadow relative h-[60vh] shadow-md shadow-emerald-200 hover:shadow-lg hover:scale-105">
                    <img src={thumbnail} alt="" className="" />
                    <div className="h-[60px]">

                        <h1 className=" my-3 font-sans text-xl text-bold uppercase text-gray-700 hover:text-black text-wrap overflow-clip">{title}</h1>
                    </div>
                    <p className="text-gray-400 hover:text-gray-500 h-[30px] text-sm my-3 font-extralight" onMouseEnter={()=>setDesc(!desc)} onMouseLeave={()=>setDesc(!desc)}>{`${description.slice(0, 50)}...`}</p>

                <div className={`dialog-box absolute ${!desc ? 'hidden' : ''} left-full bottom-[30%]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores fugiat voluptas nisi, beatae in repellat soluta sit laboriosam repudiandae quasi nostrum alias deleniti ab dicta odio. In, repudiandae! Nostrum, accusamus?</div>
                </div>
            </div>

        </>
    )
}

export default SingleEcom