export default async function postDummies(data) {
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
  }
  await fetch("http://localhost:5508/dummies", options)
}