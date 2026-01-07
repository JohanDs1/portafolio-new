import { Suspense, lazy, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./models/routes.model";
const Inicio = lazy(() => import("./Pages/Inicio"));
const Login = lazy(() => import("./Pages/Login"));

function App() {
  useEffect(() => {
    const colorTheme = () => {
      const theme = localStorage.getItem("theme");

      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      }
    };

    colorTheme();
  }, []);

  return (
    <main
      className="text-slate-700 p-16 max-md:p-4 dark:bg-slate-900"
      id="inicio"
    >
      <Router>
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path={routes.Inicio.pathname} element={<Inicio />} />
            <Route path={routes.Login.pathname} element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
    </main>
  );
}

export default App;
