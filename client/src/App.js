import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PetList from './components/PetList';
import CreatePet from './components/CreatePet';
import PetDetail from './components/PetDetail';
import UpdatePet from './components/UpdatePet'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PetList/>}/>
          <Route path="/pets/new" element={<CreatePet/>}/>
          <Route path="/pets/:id" element={<PetDetail/>}/>
          <Route path='/pets/:id/edit' element={<UpdatePet/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
