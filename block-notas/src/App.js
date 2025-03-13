import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Principal from './Componentes/Principal';
import Archivo from './Componentes/Archivo';
import Edicion from './Componentes/Edicion';
import Formato from './Componentes/Formato';
import Ver from './Componentes/Ver';
import Ayuda from './Componentes/Ayuda';

import ErroPage from './Componentes/NotFountPage';
import Navegacion from './Navbar/navegacion';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navegacion/>
      <Routes>
        <Route path='/' element={<Principal/>}></Route>
        <Route path='/Archivo' element={<Archivo/>}></Route>
        <Route path='/Edicion' element={<Edicion/>}></Route>
        <Route path='/Formato' element={<Formato/>}>
        
        </Route>
        <Route path='/Ver' element={<Ver/>}></Route>
        <Route path='/Ayuda' element={<Ayuda/>}></Route>
        <Route path='*' element={<ErroPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
