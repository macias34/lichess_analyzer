import { Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import NotFound from "./components/NotFound/NotFound"
import Workers from "./components/Workers/Workers"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pracownicy" element={<Workers/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    )
}

export default App
