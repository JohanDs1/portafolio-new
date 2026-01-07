import { IoCodeSlashOutline, IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import Header from "../../componentes/Header";
import TimelineNav from "../../componentes/TimelineNav";
import Contactame from "./Sections/Contactame";
import Educacion from "./Sections/Educacion";
import Habilidades from "./Sections/Habilidades";
import Hero from "./Sections/Hero";
import Proyectos from "./Sections/Proyectos";
import SobreMi from "./Sections/SobreMi";
import IconoEducacion from "../../componentes/Icono/index.tsx";
import { AiOutlineEnvironment } from "react-icons/ai";

const Inicio = () => {
    const itemsNavegacion = [
        { nombre: "Inicio", ruta: "/#inicio", icono: <IoHomeOutline /> },
        { nombre: "Educación", ruta: "/#educacion", icono: <IconoEducacion /> },
        {
          nombre: "Proyectos",
          ruta: "/#habilidades",
          icono: <IoCodeSlashOutline />,
        },
        { nombre: "Sobre Mí", ruta: "/#sobre-mi", icono: <IoPersonOutline /> },
        {
          nombre: "Contáctame",
          ruta: "/#contactame",
          icono: <AiOutlineEnvironment />,
        },
      ];


  return (
    <>
      <Header items={itemsNavegacion} />
      <TimelineNav items={itemsNavegacion} />
      <Hero />
      <Educacion />
      <Habilidades />
      <Proyectos />
      <SobreMi />
      <Contactame />
    </>
  );
};
export default Inicio;
