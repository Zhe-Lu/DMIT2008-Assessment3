import {Route, Routes} from 'react-router-dom'

import {DashBoardPage, LoginPage, PageNotFound} from './pages';
import {AllProductsPanel, AddProductsPanel} from "./components/panels"


function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage/>}></Route>
        <Route path="dashboard" element={<DashBoardPage/>}>
          <Route index element={<AllProductsPanel title="All Products"/>}></Route>
          <Route path="add" element={<AddProductsPanel title="Add New Product"/>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
