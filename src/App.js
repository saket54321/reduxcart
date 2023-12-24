
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './component/Home';
import CardDetail from './component/CardDetail';
import { Routes,Route } from 'react-router-dom';
//import  CardDetail from './component/CardDetail';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CardDetail />}/>
    </Routes>
    <Toaster/>
    
    </>
   
  );
}

export default App;
