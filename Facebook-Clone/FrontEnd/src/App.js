import Register from './components/Register/Register'
import Login from './Login';
import Main from './components/Main.js/Main';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
function App() {
  
return(
  <BrowserRouter>
  <Routes>
      <Route path="" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path = "main" element ={<Main />}/>
  </Routes>
</BrowserRouter>

);

}
export default App;
//RLV2vaZrPUzPP9Ng