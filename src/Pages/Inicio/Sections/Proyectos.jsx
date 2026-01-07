import Section from "../../../componentes/Section";
import { useCv } from "../../../context/cvContext";
import { IoIosLink } from "react-icons/io";

const Proyectos = () => {

    const cv = useCv()


    return (
        <Section title="Proyectos">
            <div className="container flex flex-col gap-8 max-md:gap-4">
                {
                    cv.proyectos?.map(({ Nombre, Descripcion, Portada, Stack, GitHub, url_preview }, i) => {

                        return <div className="card_proyecto flex gap-4 dark:text-slate-100 border-2 border-gray-100 rounded-lg dark:border-slate-800 p-2 max-md:flex-col" key={i}>
                            <img src={Portada} alt='Portada' className="w-96 h-auto rounded-l-lg max-md:w-full" />
                            <div className="flex flex-col justify-between max-md:gap-2">
                                <div>
                                    <h4 className="mb-1">{Nombre}</h4>
                                    <p className="dark:text-gray-400 text-md">{Descripcion}</p>
                                </div>
                                <div className="stack flex gap-4 flex-wrap">
                                    {
                                        cv.habilidades?.filter(habilidad => Stack.includes(habilidad.Id))
                                        .map((habilidad,i)=>(
                                         <img src={habilidad.Svg} alt={`Logo ${habilidad.name}`} className={`max-w-6 
                                         ${habilidad.name === 'Php' && "invert dark:invert-0"} ${habilidad.name === "Express.js" && "dark:invert"} `}
                                         key={i}/>
                                        )) 
                                    }
                                </div>
                                <div className="links flex gap-4">
                                    {
                                        GitHub
                                        && <button className="border-2 border-gray-100 py-0.5 px-2 rounded-md hover:bg-slate-800 hover:text-slate-100 dark:border-gray-700" title="Ver repositorio en GitHub">
                                            <a href={GitHub} className="flex gap-2 items-center hover:[&>img]:invert dark:[&>img]:invert" target="_blank">
                                                <img src={cv.basics?.socialMedia[1].Icono} alt="" />
                                                <p>Code</p>
                                            </a>
                                        </button>
                                    }
                                    {
                                        url_preview
                                        && <button className="border-2 border-gray-100 py-0.5 px-2 rounded-md hover:bg-slate-800 hover:text-slate-100 dark:border-gray-700" title="Ver Proyecto">
                                            <a href={url_preview} className="flex gap-2 items-center" target="_blank">
                                                <IoIosLink />
                                                <p>Preview</p>
                                            </a>
                                        </button>
                                    }

                                </div>
                            </div>

                        </div>
                    })
                }
            </div>
        </Section>
    );
};

export default Proyectos;