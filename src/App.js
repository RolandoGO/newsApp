import { useState,useEffect} from "react";
import newsApi from "./api/newsApi";
import News from "./components/News";
import NewsList from "./components/NewsList";
import {newsContext} from "./context/context"
import {handleHook }from "./hook/hooks"

function App() {


  const [articles,setArticles]=useState([])
  const [error,setError]=useState(null)
  const [content,setContent]=useState()

 useEffect(() => {

    newsApi(setArticles,setError)
    
    
  }, [])
  
  const handlers = handleHook(setContent)
  
return (

    
      <div id="mainContainer">
        {error?<p id="errorMsj">{error.msj}</p>:null}
        
       
        <newsContext.Provider value={handlers}>
            <h1>Rolo News Display</h1>
            {content?<News content={content}/>:articles.map(tittle=><NewsList key={tittle.url}  tittle={tittle}/>)}
                    
        </newsContext.Provider>
      </div>
    
  );
}

export default App;
    
   
    




 

  
            

  