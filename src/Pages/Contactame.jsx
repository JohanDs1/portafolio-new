import { useState } from "react";
import Input from "../componentes/Input";
import Section from "../componentes/Section";
import { useCv } from "../context/cvContext";
import { enviarCorreo, mostrarMensajeError } from "../utils";
import Dots from "../componentes/Dots";




const Contactame = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const cv = useCv();

  const campos = [
    {
      label: 'Nombre',
      name: 'Nombre',
      pattern: "[a-zA-ZáÁéÉíÍóÓúÚüÜñÑ\\s]{5,50}",
      required: true,
      type: 'text'
    },
    {
      label: 'Email',
      name: 'Email',
      type: 'email',
      required: true
    },
    {
      label: 'Mensaje',
      name: 'Mensaje',
      type: 'textarea',
      pattern: "[a-zA-Z\\s,?!]{10,50}",
      required: true
    }
  ];

  const initialValues = campos.reduce((acc, campo) => {
    acc[campo.name] = '';
    return acc;
  }, {});

  const initialErrors = campos.reduce((acc, campo) => {
    acc[campo.name] = '';
    return acc;
  }, {});

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);




  function valida(input) {
    const name = input.name
    const valid = input.validity.valid
    const mensaje = mostrarMensajeError(name, input)


    setFormErrors(prev => ({
      ...prev,
      [name]: valid ? '' : mensaje
    }))
  }



  const handleKeyUp = (e) => {
    const input = e.target
    valida(input)
  }


  const getValue = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formularioValido = true;
    const nuevosErrores = {};

    campos.forEach(campo => {
      const input = document.querySelector(`[name="${campo.name}"]`);

      if (!input.checkValidity()) {
        const mensaje = mostrarMensajeError(campo.name, input);
        nuevosErrores[campo.name] = mensaje;
        formularioValido = false;
      } else {
        nuevosErrores[campo.name] = '';
      }
    });

    setFormErrors(nuevosErrores);

    if (!formularioValido) return;

    try {
      setIsLoading(true)
      const response = await enviarCorreo(formValues)
      if (response.mensaje) {
        alert('Mensaje enviado exitosamente, responderé lo mas rápido posible')
        setIsLoading(false)
        setFormValues(initialValues)
      }else{
        alert(response.error)
        setIsLoading(false)
      }

    } catch (error) {
      //console.log(error)
    }
  };

  return (
    <Section title="Contactame" id="contactame">
      <div>
        <p className="dark:text-gray-400">{cv.contact?.descripcion}</p>
        <form className="flex flex-col gap-2 mt-4">
          <div className="flex gap-4 max-md:flex-col max-md:gap-2">
            {campos
              .filter(campo => campo.type !== 'textarea')
              .map((campo, i) => (
                <div key={i} className="w-full md:w-1/2">
                  <Input
                    label={campo.label}
                    name={campo.name}
                    type={campo.type}
                    value={formValues[campo.name]}
                    onChange={getValue}
                    required={campo.required}
                    isFocused={focusedField === campo.name}
                    onFocus={() => setFocusedField(campo.name)}
                    onBlur={() => setFocusedField(null)}
                    onKeyUp={(e) => handleKeyUp(e)}
                    error={!!formErrors[campo.name]}
                    messageError={formErrors[campo.name]}
                    pattern={campo.pattern}
                  />
                </div>
              ))}
          </div>

          {campos
            .filter(campo => campo.type === 'textarea')
            .map((campo, i) => (
              <Input
                key={i}
                label={campo.label}
                name={campo.name}
                type={campo.type}
                value={formValues[campo.name]}
                onChange={getValue}
                required={campo.required}
                isFocused={focusedField === campo.name}
                onFocus={() => setFocusedField(campo.name)}
                onBlur={() => setFocusedField(null)}
                onKeyUp={(e) => handleKeyUp(e)}
                error={!!formErrors[campo.name]}
                messageError={formErrors[campo.name]}
                pattern={campo.pattern}
              />
            ))}
          {
            isLoading
              ? <Dots />
              : <button
                type="submit"
                onClick={handleSubmit}
                className="py-2 px-4 border-2 border-slate-100 dark:border-gray-500 mt-4 hover:cursor-pointer hover:brightness-75 text-gray-400 w-1/4 max-md:w-full"
              >
                Enviar Mensaje
              </button>
          }

        </form>

      </div>

    </Section>
  );
};

export default Contactame;
