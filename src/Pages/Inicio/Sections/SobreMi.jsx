import Section from "../../../componentes/Section";
import { useCv } from "../../../context/cvContext";

const SobreMi = () => {
  const cv = useCv();

  return (
    <Section
      title="Sobre Mí"
      id="sobre-mi"
    >
      <div className="container flex flex-col gap-4 dark:text-gray-400">
        {cv.about?.map(({ parrafo }, i) => (
          <p key={i}>{parrafo}</p>
        ))}
      </div>
    </Section>
  );
};

export default SobreMi;
