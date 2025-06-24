const listaErrores = [
    "valueMissing",
    "patternMismatch",
    "typeMismatch",
    "customError"
]




const messagesError = {
    Nombre: {
        patternMismatch: "Nombre demasiado corto, si es posible incluya un apellido",
        valueMissing: "Este campo no puede quedar vacío"
    },
    Email: {
        typeMismatch: "El formato del correo es incorrecto. Debería ser Ej. mario@gmail.com",
        valueMissing: "Este campo no puede quedar vacío"
    },
    Mensaje: {
        valueMissing: "Este campo no puede quedar vacío",
        patternMismatch: "Debe contener mas de 10 caracteres y máximo 50 caracteres"
    }
}


export const mostrarMensajeError = (name,input) => { 
    let mensaje = ''

    listaErrores.forEach((error)=>{
        if(input.validity[error]){
            mensaje = messagesError[name][error]
        }
    })

    return mensaje;
}



export const enviarCorreo = async (datos) => {
    try {
        const url = import.meta.env.VITE_API_EMAIL


        const response = await fetch(`${url}`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        if (!response.ok) {
            console.error('No se pudo traer los datos', response.status);
            return [];
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al traer los datos:', error.message);
        return [];
    }
};