import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Create } from "./Components/Create/Create";
import { Details } from "./Components/Details/Details";
import { Home } from "./Components/Home/Home";
import { Landing } from "./Components/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path = "/" element = {<Landing />}/>
        <Route exact path = "/home" element = {<Home />}/>
        <Route exact path = "/details/:id" element = {<Details />}/>
        <Route exact path = "/create" element = {<Create />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
