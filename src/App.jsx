import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <div style={{overflow: 'hidden'}}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
