import { Routes,Route } from 'react-router-dom';
import Header from './template/layout/Header';
import Product from './template/pages/Product';
import Dashboard from './template/pages/Dashboard';
import Banner from './template/layout/Banner';

  function App() {
    return (
     <div>
      <div>
      <Header />
      <Banner />
      </div>
      <div>
      <Routes>
        <Route index element={<Dashboard />}/>
        <Route path='/product' element={<Product />}/>
      </Routes>
      </div>
     </div>
    );
  }

  export default App;
