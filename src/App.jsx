import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Dashboard />
      </Routes>
    </BrowserRouter>
  )
}

export default App
