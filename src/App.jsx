import { useState } from "react";
import Formulario from "./component/Formulario";
import Header from "./component/Header";
import ListadoPacientes from "./component/ListadoPacientes";


function App() {

  const [pacientes,setPacientes] = useState([]);
  const [paciente,setPaciente] = useState({});


  const eliminarPaciente = (id) => {
      console.log('eliminado paciente', id)
  }

  return(

    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
         pacientes={pacientes} 
         setPacientes={setPacientes}
         paciente={paciente}
         setPaciente={setPaciente}
         /> 
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
  
    </div>
    
  )
   
}

export default App;
