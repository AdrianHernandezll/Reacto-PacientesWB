import Formulario from "./component/Formulario";
import Header from "./component/Header";
import ListadoPacientes from "./component/ListadoPacientes";


function App() {
  return(

    <div className="App">
      <Header/>
      <ListadoPacientes/>
      <Formulario/> 
  
    </div>
    
  )
   
}

export default App;
