import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from './Pages/Dashboard'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
