import React, { useContext, useEffect, useState } from 'react'
import { newsContext } from '../context/context'

export default function News({content}) {


    const {handleExit}=useContext(newsContext)

    const [newsContent,setNewsContent]=useState("")

    useEffect(()=>{
        if(content.content){
            const cleanContent = content.content.split("[")[0]
            setNewsContent(cleanContent)
            
        }

    },[content])

    return (
        <div id="news" >
            
            <div id="exitNews" onClick={handleExit}/>

        
            <p>{newsContent}</p>
            <a href={content.url}>Go to the Page</a>
         
           
            
        </div>
    )
}
