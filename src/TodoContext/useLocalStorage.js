import React from 'react';

function useLocalStorage(itemName, initialValue) {

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);


  React.useEffect(()=>{
    try {
      setTimeout(()=>{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
        
      },500); // SIMULANDO LA ENTREGA DE DATOS DE UNA API
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  },[]);
  
  const saveItem = (newItem) => {
    try {
      const stringifyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyItem);
      setItem(newItem);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }


  return {
    item,
    saveItem,
    loading,
    error,
  };

}
  












export {useLocalStorage};