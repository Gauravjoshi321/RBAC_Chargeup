import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import AppLayout from "./Pages/AppLayout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            // <ProtectedRoute>
            <AppLayout />
            // </ProtectedRoute>
          }
        >

          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
