import { BrowserRouter, Route , Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cards from './components/cards/Cards';
import Card from './components/cards/Card';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About name="alex"/>} />
          <Route path='/cards'>
            <Route index  element={<Cards />} />
            <Route path=':id' element={ <Card />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
