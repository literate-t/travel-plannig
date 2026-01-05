import Loading from "@/components/common/Loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
const RegisterCity = lazy(() => import("@/pages/admin/RegisterCity"));
const RegisterCounty = lazy(() => import("@/pages/admin/RegisterCountry"));
const Home = lazy(() => import("@/pages/home/Home"));

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
            </Route>
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
