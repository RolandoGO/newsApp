






async function newsApi(setArticles,setError){

   try{
    const call = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=c4f372dc99f64484b65beec5fd0ed60a")
    const response= await call.json()
    setArticles(response.articles)
   }
   catch(error){
       setError({
           error,
           msj:"error en el recurso o de conectividad"
        })
   }

}

export default newsApi