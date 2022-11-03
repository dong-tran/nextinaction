import InputForm from '../components/Form'
import List from '../components/List'
// import { useState } from "react";


export default function Home() {
  return (
    <div className="w-full bg-gradient-to-b from-indigo-400 h-300">
      <div className="container w-8/12 mx-auto space-y-5 shadow-xl">
        <InputForm/>
        <List/>
      </div>
    </div>
  )
}
