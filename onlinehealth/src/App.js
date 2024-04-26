
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Exercise from './Components/Exercise';
import Expertqa from './Components/Expertqa';
import Healthyeat from './Components/Healthyeat';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Nutritionfood from './Components/Nutritionfood';
import Nutritioninfo from './Components/Nutritioninfo';
import Ourproducts from './Components/Ourproducts';
import Overallhealthcare from './Components/Overallhealthcare';
import Signin from './Components/Signin';
import Specialdiets from './Components/Specialdiets';
import { AuthProvider } from './Components/auth';
import './App.css';
import Consult from './Components/Consult';
import Signup from './Components/Signup';
import Bookaappoint from './Components/Bookaappoint';
function App() {
  return (
    <div >
      <AuthProvider>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/healthyhabits" element={<Exercise/>} />
        <Route path="/consult" element={<Consult/>} />
        <Route path="/expert" element={<Expertqa/>} />
        <Route path="/health" element={<Healthyeat/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/info" element={<Nutritioninfo/>} />
        <Route path="/our" element={<Ourproducts/>} />
        <Route path="/" element={<Overallhealthcare/>} />
        <Route path="/bookappoint" element={<Bookaappoint/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </AuthProvider>
    </div>
  );
}
export default App;