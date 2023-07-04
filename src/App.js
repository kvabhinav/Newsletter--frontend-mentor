import { Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Success from './pages/Success'

function App() {
  return (
    <div className="bg-charcolGrey w-full h-screen flex justify-center items-center">
      <Routes>
        <Route  path="/" element={<Home />} ></Route>
        <Route path="/success" element={<Success />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
