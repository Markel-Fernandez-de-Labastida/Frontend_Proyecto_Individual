import React, { useState } from 'react';
import { consultFetch } from '../api/consultFetch';



export const useFetch = (url, metodo, body = {}, header = {}) => {
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);


  

  const loginRegister = async (url, body, header = {}) => {
    console.log("Dentro del fetch login")
    setIsLoading(true);
    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        ...header,
        "Content-Type": "application/json",
      }
    }


    const answer = await consultFetch(url, options)
      .then((response) => {
          setData(response);
          console.log("Response: ", response);
        })
      .catch((error) => {
          setIsError(error);
          console.log("error: ", error);
        })
    //console.log("use fetch login: ", answer)

    setIsLoading(false);
    
  }
  
  const update = async (url, body, header = {}) => {
    setIsLoading(true);
    const options = {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        ...header,
        "Content-Type": "application/json",
      }
    }
    
    const answer = await consultFetch(url, options)
      .then((response) => {
        setData(answer);
      })
      .catch((error) => {
        setIsError(error);
      })
    console.log("use fetch update: ", answer)
    setIsLoading(false);
   

  }
  const create = async(url, body, header = {}) => {
    setIsLoading(true);
    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        ...header,
        "Content-Type": "application/json",
      }
    }
    

    const answer = await consultFetch(url, options)
    .then((response) => {
        setData(answer);
      })
      .catch((error) => {
        setIsError(error);
      })
    console.log("fetch create: ", answer);
    setIsLoading(false);
    

  }

  const delet = async (url, body, header = {}) => {
    setIsLoading(true);
    option = {
      method: "DELETE",
      headers: {
        ...header,
        "Content-Type": "application/json",
      }
    }


    const answer = await consultFetch(url, options)
    .then((response) => {
        setData(answer);
      })
    .catch((error) => {
        setIsError(error);
      })
    console.log("use fetch delete: ", answer)

    setIsLoading(false);
    

  }

  return {
    loginRegister,
    update,
    create,
    delet,
    data,
    isLoading,
    isError
    }
    
   }

   
   
   /* 
   
    useEffect(() => {
        // Este no es el mejor lugar para este if. Esta mejor en los componentes que lo necesiten







        if (!url) return;
      
      setIsLoading(true);
      consultFetch(url, metodo, body, header)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la respuesta');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setIsError(error.message);
        setIsLoading(false);
      });
  }, []);

    return {
        data,
        isLoading,
        isError
    }

} */