import { Routes,Route } from 'react-router-dom';
import Header from './template/layout/Header';
import Product from './template/pages/Product';
import Dashboard from './template/pages/Dashboard';
import Detail from './template/pages/Detail';
import Create from './template/pages/Create';
import Edit from './template/pages/Edit';

// json-server --watch ./src/Shop.json --port 8080


  function App() {
    return (
     <div>
      <div>
      <Header />
      </div>
      <div>
      <Routes>
        <Route index element={<Dashboard />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />}/>
      </Routes>
      </div>
     </div>
    );
  }

  export default App;
