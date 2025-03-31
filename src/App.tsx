import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/layout'
import Home from './components/Pages/Home/home'


function App() {

  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/women' element={<Home />}/>
        <Route path='/men' element={<Home />}/>
        <Route path='/kid' element={<Home />}/>
        <Route path='/blog' element={<Home />}/>
        <Route path='/contact' element={<Home />}/>
      </Route>
    </Routes>

    </>
  )
}

export default App
