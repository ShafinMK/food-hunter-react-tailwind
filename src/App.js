
import './App.css';
import Menu from './components/Menu/Menu';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import AboutPage from './components/AboutPage/AboutPage';
import Contact from './components/Contact/Contact';
import { useLayoutEffect } from 'react';



function App() {

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }
  return (
    <div className="">
      
      
      <BrowserRouter>
      <Wrapper>
      <Header></Header>
      {/* <Categories></Categories> */}
      
      <Routes>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/menu/:foodId" element={<Details />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/home" element={<Home></Home>}></Route>
        
        {/* <Route exact path="/" element={<Menu />}></Route> */}
        
        
       
      </Routes>
      <Footer></Footer>
      </Wrapper>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
