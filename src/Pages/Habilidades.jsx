import { useState } from "react";
import Section from "../componentes/Section";
import { useCv } from "../context/cvContext";
import useIsMobile from "../CustomHooks/isMobile";

const Habilidades = () => {
    const [hoveredId, setHoveredId] = useState(null);
    const cv = useCv()

    const isMobile = useIsMobile()

    const handleElementOver = (id) => {
        setHoveredId(id)
    }

    const handleElementLeave = () => {
        setHoveredId(null)
    }




    return (
        <Section title="Habilidades" id="habilidades">
            <div className="container flex gap-8 flex-wrap dark:text-slate-100">
                {
                    cv.habilidades?.map(({ Id, name, Svg, color }) => (
                        <div
                            className={`flex items-center gap-2 relative hover:scale-125`} key={Id}
                            onMouseOver={() => handleElementOver(Id)}
                            onMouseLeave={handleElementLeave}
                        >
                            <div className={`w-8 h-8 absolute -z-10 inset-0 blur-md transition-all ${isMobile && 'animate-pulse'}`} style={{ backgroundColor: isMobile ? color : (hoveredId === Id ? color : 'inherit') }}></div>
                            <div>
                                <img src={Svg} alt="" key={Id} className={`w-8 h-8 ${name === 'Php' && "invert dark:invert-0"} ${name === "Express.js" && "dark:invert"} `} />
                            </div>
                            <p>{name}</p>
                        </div>
                    ))
                }
            </div>

        </Section>
    );
};

export default Habilidades;