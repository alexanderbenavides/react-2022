import { BrowserRouter, Route , Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Users from './components/users/Users';
import User from './components/users/User';
import Cards from './components/cards/Cards';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About name="alex"/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/users'>
            <Route index  element={<Users/>} />
            <Route path=':id' element={ <User />} />
          </Route>
          <Route path='/cards' element={<Cards/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
