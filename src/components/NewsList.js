import React, { useContext } from 'react'
import { newsContext } from '../context/context'

export default function NewsList({tittle}) {

    const {handleContent}=useContext(newsContext)
    
    
    
    
    return (
        <div id="newsContainer" >
            <div id="SeeNews" onClick={()=>handleContent(tittle)}/>

           <article id="tittleAndImage">

               <h2>{tittle.title}</h2>
               
               <p>{tittle.description}</p>
                
               <h3>"{tittle.source.name}"</h3>


                
           </article>
           {tittle.image?<img  src={tittle.image} alt=""></img>:null}
            
            
        </div>
    )
}
