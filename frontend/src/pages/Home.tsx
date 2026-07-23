function Home() {
  const checkHealth = async () => {
    const res = await fetch('http://127.0.0.1:8000/print')
    const data = await res.json()
    console.log(data);
  }
  return <section id="center">
    <button onClick={checkHealth}>Click me</button>
  </section>
}

export default Home
