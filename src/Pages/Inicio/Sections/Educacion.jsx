import { useCv } from "../../../context/cvContext";
import Section from "../../../componentes/Section";

const Educacion = () => {
  const cv = useCv();

  return (
    <Section
      title="Educación"
      id="educacion"
      textBtnAdd="Agregar Educación"
      onAdd={() => console.log("Nuevo Item agregado")}
    >
      <div className="container flex flex-col gap-4">
        {cv.educacion?.map(
          ({ Nombre_Institucion, Titulo, Periodo, Ruta_Logo }, i) => (
            <div
              className="card py-4 px-6 flex gap-2 items-start border-2 border-gray-100 rounded-lg dark:text-slate-100 dark:border-gray-800"
              key={i}
            >
              <img src={Ruta_Logo} alt="" className="max-w-16 max-h-16" />
              <div className="flex justify-between w-full max-md:flex-col">
                <div>
                  <h4>{Nombre_Institucion}</h4>
                  <p className="text-sm">{Titulo}</p>
                </div>
                <p className="text-[13px]">{Periodo}</p>
              </div>
            </div>
          )
        )}
      </div>
    </Section>
  );
};

export default Educacion;
