






async function newsApi(setArticles,setError){

   try{
      
    const call = await fetch(process.env.REACT_APP_URL)
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