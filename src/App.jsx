


import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import Phones from './components/Phones/Phones'
import LineChart from './components/PriceOptions/LineChart/LineChart'


function App() {
 
  return (
    <>
    <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
<PriceOptions></PriceOptions>
<LineChart></LineChart>
     <Phones></Phones>

    </>
  )
}

export default App
