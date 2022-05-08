import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PetCard } from "./components/PetCard/PetCard";
import MyContext from './context/Context';
import { useContext } from "react";

export function App() {
  const { idPetCard } = useContext(MyContext);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/card" element={<PetCard id={idPetCard}/>} />
    </Routes>
  )
}
