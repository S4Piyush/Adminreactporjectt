import './App.css';
import Main from './component/Main';
import { Route,Routes } from 'react-router-dom';
import Login_Form from './component/Login_Form';
import Add_Product from './component/Add_Product';
import View_Product from './component/View_Product';
import Register from './component/Register';
import Shoping from './component/shooping/Shoping';
import S_About from './component/shooping/S_About';
import S_Shop from './component/shooping/S_Shop';
import S_Contact from './component/shooping/S_Contact';
import Shop_single from './component/shooping/Shop_single';




function App() {
  return (
    <div class="wrapper">
      
      <Routes>
        <Route path='' element={<Shoping/>}></Route>
        <Route path="/admin" element={<Main/>}></Route>
        <Route path="/addproduct" element={<Add_Product/>}></Route>
        <Route path="/viewproduct" element={<View_Product/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/Login' element={<Login_Form/>}></Route>
        <Route path='/Shoping' element={<Shoping/>}></Route> 
        <Route path='/about' element={<S_About/>}></Route>
        <Route path='/shop' element={<S_Shop/>}></Route>
        <Route path='/Contact' element={<S_Contact/>}></Route>
        <Route path="/Shop_single" element={<Shop_single/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
