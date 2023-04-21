import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landpage } from './components/LandingPage/landpage';
import { Nav } from './components/navbar/nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Register } from './components/Registration/register';
import { Admin } from './components/Adminmodule/Admin';
import { Editmodule } from './components/Adminmodule/Edit';
import { Singledata } from './components/Singleuser/singleuser';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={[<Nav />, <Landpage />]} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/edits/:id' element={<Editmodule />} />
                    <Route path='/singledata/:id' element={<Singledata />} />
                </Routes>

            </BrowserRouter>

        </>

    );
}

export default App;
