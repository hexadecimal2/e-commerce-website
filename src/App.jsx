import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ItemView from './pages/ItemView';
import BagItems from './pages/CheckBagItems';
import Checkout from './pages/Checkout'
import AddPayment from './pages/AddPayment';
import AddAddress from './pages/AddAddress';


import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {
  return (
    <BrowserRouter>
         <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/item-view' element={<ItemView />} />
        <Route path='/bag-items' element={<BagItems />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payment' element={<AddPayment />} />
        <Route path='/address' element={<AddAddress />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
