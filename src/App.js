import { Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Success from './pages/Success'

function App() {
  return (
    <div className="sm:bg-white lg:bg-charcolGrey w-screen h-screen lg:flex lg:justify-center lg:items-center">
      <Routes>
        <Route  path="/" element={<Home />} ></Route>
        <Route path="/success" element={<Success />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
