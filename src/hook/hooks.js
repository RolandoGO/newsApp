


export const handleHook=(setContent)=> {

   

    function handleContent(content){

        setContent(content)
        
        
      }
    
      function handleExit(){
        setContent(null)
        
      }

      return{
          handleContent,
          handleExit
          
      }
    
}
