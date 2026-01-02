import Loading from "@/components/common/Loading";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
const RegisterCity = lazy(() => import("@/pages/admin/RegisterCity"));
const Home = lazy(() => import("@/pages/home/Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin">
            <Route path="register-city" element={<RegisterCity />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
