import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { useAdm } from "../hooks/adm";

export function AcaiRoutes() {
  const { adm } = useAdm();

  return (
    <BrowserRouter>
      <Routes>
        {
          !adm ?
          <Route path="/" element={ <Login /> } />
          :
          <Route path="/" element={ <Home /> } />
        }
      </Routes>
    </BrowserRouter>
  )
}