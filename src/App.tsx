import './App.css'
import MainLayout from './MainLayout'
import FootwearLayout from './components/Footwear Compo/FootwearLayout'
import RunLayout from './components/RunCompo/RunLayout'
import AthleisureLayout from './components/athleisureCompo/AthleisureLayout'
import CafeLayout from './components/cafeCompo/CafeLayout'
import PerfumeOutlate from './components/perfumeComponents/PerfumeOutlate'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'


function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout></MainLayout>} >
        <Route path='' element={<AthleisureLayout></AthleisureLayout>}></Route>
        <Route path='cafe' element={<CafeLayout></CafeLayout>}></Route>
        <Route path='perfume' element={<PerfumeOutlate></PerfumeOutlate>}></Route>
        <Route path='run' element={<RunLayout></RunLayout>}></Route>
        <Route path='footwear' element={<FootwearLayout></FootwearLayout>}></Route>
      </Route>
    )
  )

    
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
