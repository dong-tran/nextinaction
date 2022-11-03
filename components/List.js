import { useState, useEffect } from "react";

export default function List({data}) {
return (
<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full divide-y divide-blue-500 text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
      <tr className="h-8">
            <th>ID</th>
            <th>Name</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-green-400">
      {data?.map(d=>(
            <tr key={d.id} className="h-8">
            <td>{d.id}</td>
            <td>{d.name}</td>
            </tr>
      ))
      }
      </tbody>
      </table>
</div>
)}
