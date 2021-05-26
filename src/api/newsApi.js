






async function newsApi(setArticles,setError){

   try{
    const call = await fetch('https://gnews.io/api/v4/top-headlines?&token=daed12fe53a2967c2ae9114287341f0c')
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