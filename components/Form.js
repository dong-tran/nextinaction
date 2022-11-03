import { useState, useEffect } from 'react';

export default function InputForm() {
      const [data, setData] = useState([])
      useEffect(() => {
            fetch('http://localhost:5508/dummies')
              .then((res) => res.json())
              .then((data) => {
                setData(data)
              })
          }, [data])
      const handleSubmit = async (event) => {
            event.preventDefault()
            const data = {
                  name: event.target.yourname.value,
            }
            const options = {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
            }
            const response = await fetch("http://localhost:5508/dummies", options)
            // const result = await response.json()
            event.target.yourname.value = null
      }
return (
<form onSubmit={handleSubmit}>
<div className="flex flex-row pt-5">
      <div className="flex-initial w-96 ml-3">
      <input 
            type="text" 
            name="yourname" 
            id="yourname" 
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Input name"/>
      </div>
      <div className="flex-initial mx-3">
      <input 
      type="submit"
      className="w-full space-y-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
      value="Submit"/>
      </div>
</div>
</form>
)}