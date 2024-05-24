import React from 'react';
import Api from './components/recepybook.js/Api';
import Recepy from './components/recepybook.js/recepy';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import UseEff from './components/UseEff';
// import Todo from './components/todo';
// import Form from './components/Form';
// import Detailarray from './components/Detailarray';
// import UseStatewithObject from './components/UseStatewithObject';
// import Resize from './components/resize';

const App =()=>{
  return <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Api/>}/>
    <Route exact path='/recipe' element={<Recepy/>}/>
  </Routes>
  </BrowserRouter>
}

export default App;
