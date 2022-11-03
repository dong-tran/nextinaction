import InputForm from '../components/Form'
import List from '../components/List'
import { useState } from "react";

export async function getServerSideProps() {
  const res = await fetch('http://localhost:5508/dummies')
  const list = await res.json()
  return {
    props: {
      list,
    }, // will be passed to the page component as props
  }
}

export default function Home({list}) {
  const [data, setData] = useState(list)
  const refresh = async () => {
    fetch('http://localhost:5508/dummies')
      .then((res) => res.json())
        .then((data) => {
          setData(data)
        })
  }
  return (
    <div className="w-full bg-gradient-to-b from-indigo-400 h-300">
      <div className="container w-8/12 mx-auto space-y-5 shadow-xl">
        <InputForm refresh={refresh}/>
        <List data={data}/>
      </div>
    </div>
  )
}
