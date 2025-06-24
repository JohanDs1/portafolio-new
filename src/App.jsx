import { useEffect } from "react"
import Header from "./componentes/Header"
import Hero from "./Pages/Hero"
import Educacion from "./Pages/Educacion"
import Habilidades from "./Pages/Habilidades"
import Proyectos from "./Pages/Proyectos"
import SobreMi from "./Pages/SobreMi"
import Contactame from "./Pages/Contactame"
import { IoHomeOutline, IoCodeSlashOutline, IoPersonOutline } from "react-icons/io5";
import { AiOutlineEnvironment } from "react-icons/ai";
import IconoEducacion from "./componentes/Icono"
import TimelineNav from "./componentes/TimelineNav"



function App() {

  useEffect(() => {
    const colorTheme = () => {
      const theme = localStorage.getItem("theme")

      if (theme === 'dark') {
        document.documentElement.classList.add("dark")
      }
    }

    colorTheme()


  }, [])

  const itemsNavegacion = [
    { nombre: "Inicio", ruta: "/#inicio", icono: <IoHomeOutline /> },
    { nombre: "Educación", ruta: "/#educacion", icono: <IconoEducacion /> },
    { nombre: "Proyectos", ruta: "/#habilidades", icono: <IoCodeSlashOutline /> },
    { nombre: "Sobre Mí", ruta: "/#sobre-mi", icono: <IoPersonOutline /> },
    { nombre: "Contáctame", ruta: "/#contactame", icono: <AiOutlineEnvironment /> },
  ];





  return (
    <main className="text-slate-700 p-16 max-md:p-4 dark:bg-slate-900" id="inicio">
      <Header items={itemsNavegacion} />
      <TimelineNav items={itemsNavegacion} />
      <Hero />
      <Educacion />
      <Habilidades />
      <Proyectos />
      <SobreMi />
      <Contactame />
    </main>



  )
}

export default App
