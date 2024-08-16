import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NotFound from '../Pages/NotFound.jsx';
import Home from "../Pages/Home/Home.jsx"
import Login from "../Pages/Login.jsx"
import Dashboard from '../Pages/Dashboard.jsx';
import PrivateRoute from "../Components/Privates.jsx"
import Location from '../Components/Location.jsx';

function App() {
  return (
<Router>
  <Routes>
    <Route exact path='/*' element={<NotFound/>}/>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route path='/dashbord' element={
          <PrivateRoute>
                  <Dashboard />
          </PrivateRoute>
        } />
    <Route exact path='/location' element={<Location/>}></Route> 
  </Routes>
</Router>
  );
}

export default App;
