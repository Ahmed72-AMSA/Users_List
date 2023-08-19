
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const apiContext=createContext();

const ApiContextProvider = (props) => {
    const {children}=props;
    console.log(props)

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setApiData(response.data);
    }
    fetchData();
  }, []);

console.log(apiData)


  
    return (
        <apiContext.Provider value={{apiData}}>
            {children}
        </apiContext.Provider>
    );
}

export default ApiContextProvider;
