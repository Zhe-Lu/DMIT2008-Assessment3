import {Route, Routes} from 'react-router-dom'

import {DashBoardPage, LoginPage, PageNotFound} from './pages'


function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage/>}></Route>
        <Route path="dashboard" element={<DashBoardPage/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
