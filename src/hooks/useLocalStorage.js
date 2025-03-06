import React from 'react'

function useLocalStorage(itemName, itemValue){
  const [item, setItem] = React.useState(itemValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(()=>
    {
      setTimeout(()=>
        {
        try{
          const localGet = localStorage.getItem(itemName)
          if (localGet) 
          {
            setLoading(false)
            setItem(JSON.parse(localGet))
          }
          return itemValue
        } catch(error){
          setError(console.log("Error:" + error))
        }
      },2000)
    },[itemName, itemValue])

  const saveItem = (newItem)=>{
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

    return {item, saveItem, loading, error}
}

export { useLocalStorage }