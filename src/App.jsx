import Formulario from "./component/Formulario";
import Header from "./component/Header";
import ListadoPacientes from "./component/ListadoPacientes";


function App() {
  return(

    <div className="container mx-auto mt-20">
      <Header/>
      <ListadoPacientes/>
      <Formulario/> 
  
    </div>
    
  )
   
}

export default App;
