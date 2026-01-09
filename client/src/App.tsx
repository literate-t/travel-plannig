import Loading from "@/components/common/Loading";
import "@/utils/date";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ModalProvider from "./components/common/ModalProvider";
const RegisterPlace = lazy(() => import("@/pages/admin/RegisterPlace"));
const RegisterCity = lazy(() => import("@/pages/admin/RegisterCity"));
const RegisterCounty = lazy(() => import("@/pages/admin/RegisterCountry"));
const Home = lazy(() => import("@/pages/home/Home"));
const PlanCity = lazy(() => import("@/pages/plan/City"));

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin">
              <Route path="register-city" element={<RegisterCity />} />
              <Route path="register-country" element={<RegisterCounty />} />
              <Route path="register-place" element={<RegisterPlace />} />
            </Route>
            <Route path="/plan/:city" element={<PlanCity />} />
          </Routes>
        </Suspense>
        <ModalProvider />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
