export default async function getListDummies() {
    const res = await fetch('http://localhost:5508/dummies')
    return await res.json()
  }