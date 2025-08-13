import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./login";
import Signup from "./signup";
import Navbar from "./navbar";
import Home from "./home";
import Addfood from "./addfoods";
import Food from "./food";




function App() {
  return (
    <div className="App">
   {/* <LoginPage> */}


   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/" element={ <LoginPage/>}/>
    <Route path="/signup" element={ <Signup/>}/>
    <Route path="/addfood" element={<Addfood/>}/>
    <Route path="/food" element={<Food/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;


