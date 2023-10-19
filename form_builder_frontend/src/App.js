import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Auth/Pages/Login';
import SignUp from './Components/Auth/Pages/SignUp';
import FormBuilder from './Components/FormBuilder/Pages/FormBuilder';
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/fb' element={<FormBuilder/>} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
