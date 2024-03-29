
const Pacientes = ({paciente, setPaciente,eliminarPaciente}) => {

    const {nombre,propietario,email,fecha,sintomas,id} = paciente
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
            <span className="font-normal normal-case ">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
            <span className="font-normal normal-case ">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Alta de Paciente: {' '}
            <span className="font-normal normal-case ">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
            <span className="font-normal normal-case ">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
            <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 rounded uppercase font-bold text-white" type="submit"
                onClick={() => setPaciente(paciente)}
            >Editar</button>
            <button onClick={()=>eliminarPaciente(id)} className="py-2 px-10 bg-red-600 hover:bg-red-800 rounded uppercase font-bold text-white" type="submit">Eliminar</button>
        </div>
      </div>
  )
}

export default Pacientes