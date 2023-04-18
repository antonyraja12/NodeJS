import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Registration } from './component/registration/register';
import { Adminedit } from './component/admin/admin';
import { Editmodule } from './component/admin/edit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/adminedit'element={<Adminedit/>}/>
      <Route path='/edit/:s_no'element={<Editmodule/>}/>
    </Routes>
    </BrowserRouter>
    
    
    
    
    </>
  );
}

export default App;
