const ListadoPacientes = () => {

  return(
    <div className="w-1/2 lg:w-3/5">
      <h1 className="font-black text-3xl text-center">Listado de Pacientes</h1>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {' '}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
            <span className="font-normal ">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {' '}
            <span className="font-normal ">Daniel</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {' '}
            <span className="font-normal ">correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {' '}
            <span className="font-normal ">10 de Diciembre 2020</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Alta de Paciente: {' '}
            <span className="font-normal ">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
            <span className="font-normal ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur veritatis molestiae eius. Error aut totam consectetur necessitatibus ex at magnam quibusdam, doloremque unde, illum repellendus omnis ullam. Alias, dignissimos nulla.</span>
        </p>
      </div>
    </div>
  )
}

export default ListadoPacientes;