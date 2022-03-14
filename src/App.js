import Home from "./Home";
import Bollywood from "./Bollywood";
import Technology from "./Technology";
import Hollywood from "./Hollywood";
import Fitness from "./Fitness";
import Food from "./Food";
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (~
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/bollywood" element={<Bollywood/>}/>
          <Route path="/technology" element={<Technology/>}/>
          <Route path="/hollywood" element={<Hollywood/>}/>
          <Route path="/fitness" element={<Fitness/>}/>
          <Route path="/food" element={<Food/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;