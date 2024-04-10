import { Routes,Route } from 'react-router-dom';
import Header from './template/layout/Header';
import Product from './template/pages/Product';
import Dashboard from './template/pages/Dashboard';
import Banner from './template/layout/Banner';
import Detail from './template/pages/Detail';

// json-server --watch ./src/Shop.json --port 8080


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
        <Route path='/detail/:id' element={<Detail />}/>
      </Routes>
      </div>
     </div>
    );
  }

  export default App;
