import './App.css';
import Login from './Componentes/Login'
import EventoContainer from './Componentes/EventoContainer'
import MudaSenha from './Componentes/MudaSenha'
import Calendario from './Componentes/Calendario'
import 'react-calendar/dist/Calendar.css';

function App() {
  return (
    <div className="App">
      <Login /> <br/>
      <EventoContainer /> <br/>
      <MudaSenha />
      <Calendario />
    </div>
  );
}

export default App;
