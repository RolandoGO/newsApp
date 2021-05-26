import React, { useContext } from 'react'
import { newsContext } from '../context/context'

export default function NewsList({tittle}) {

    const {handleContent}=useContext(newsContext)
    const title=tittle.title.replace("- "+tittle.source.name,"")
    
    
    
    return (
        <div id="newsContainer" >
            <div id="SeeNews" onClick={()=>handleContent(tittle)}/>

           <article id="tittleAndImage">

               <h2>{title}</h2>
               
               <p>{tittle.description}</p>
                
               <h3>"{tittle.source.name}"</h3>


                
           </article>
           {tittle.urlToImage?<img  src={tittle.urlToImage} alt=""></img>:null}
            
            
        </div>
    )
}
