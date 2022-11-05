import InputForm from '../components/Form'
import List from '../components/List'
import getListDummies from '../fetch/get/list-dummies'
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null)
  const refresh = () => {
    getListDummies().then((data)=>setData(data))
  }
  useEffect(refresh,[])
  return (
    <div className="w-full bg-gradient-to-b from-indigo-400 h-300">
      <div className="container w-8/12 mx-auto space-y-5 shadow-xl">
        <InputForm refresh={refresh}/>
        <List data={data}/>
      </div>
    </div>
  )
}
