import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer'
import { createContext } from 'react';
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';

export const APIContext = createContext();

function App() {
  return (
    <>
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/:id' element={<PostDetails />}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
