import { useState, useEffect } from "react";

const List = () => {
const [data, setData] = useState([])
useEffect(() => {
      fetch('http://localhost:5508/dummies')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
        })
    }, [data])

return (
<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full divide-y divide-blue-500 text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
      <tr>
            <th>ID</th>
            <th>Name</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-stone-200">
      {data?.map(d=>(
            <tr key={d.id} >
            <td>{d.id}</td>
            <td>{d.name}</td>
            </tr>
      ))
      }
      </tbody>
      </table>
</div>
)}

export default List