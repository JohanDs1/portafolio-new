import { useCv } from "../context/cvContext";
import Section from "../componentes/Section";
import { TfiWorld } from "react-icons/tfi";

const Hero = () => {
  const cv = useCv();

  return (
    <Section>
      <div className="container flex justify-between items-center wrap gap-4 max-md:flex-col-reverse">
        <div className="flex flex-col gap-2 max-md:items-center max-md:text-center">
          <h1 className="dark:text-slate-200 max-md:text-balance">
            {cv.basics?.Nombre}
          </h1>
          <h3 className="dark:text-slate-100 font-medium">
            {cv.basics?.Titulo}
          </h3>
          <div className="flex items-center gap-1">
            <TfiWorld className="dark:text-slate-100" />
            <p className="dark:text-slate-100">{cv.basics?.Ubicacion}</p>
          </div>
          <div className="flex gap-1 max-md:flex-wrap">
            {cv.basics?.socialMedia.map(({ Icono, Nombre, Url }, index) => (
              <div>
                <a
                  href={Url}
                  key={index}
                  className="flex gap-1 px-1 border-2 border-gray-100 rounded-md hover:bg-slate-800 hover:text-slate-100 dark:bg-slate-900 dark:text-slate-100 dark:hover:text-slate-800 dark:border-gray-700 dark:hover:bg-slate-100 hover:[&>img]:invert dark:hover:[&>img]:invert-0 dark:[&>img]:invert"
                  target="_blank"
                  title={`Ver ${Nombre}`}
                >
                  <img src={Icono} alt={`Logo de ${Nombre}`} />
                  <p>{Nombre}</p>
                </a>
              </div>
            ))}
          </div>
        </div>

        <figure>
          <img
            src={cv.basics?.Imagen}
            alt=""
            className="object-contain w-40 rounded-2xl "
          />
        </figure>
      </div>
    </Section>
  );
};

export default Hero;
