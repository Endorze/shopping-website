import { useState } from 'react'
import Header from './components/Header/header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

export default App
