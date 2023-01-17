import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import AddPage from './Pages/AddPage/AddPage'
import Details from './Pages/Details/Details'

function App() {
  return (
    <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/AddPage"} element={<AddPage/>}/>
      <Route path={"/Details/:id"} element={<Details/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
