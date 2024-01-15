import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";
import Add from "../Containers/Add";
import Edit from "../Containers/Edit";
import List from "../Containers/List";
import NavBar from "../Components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/list" element={<List />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
