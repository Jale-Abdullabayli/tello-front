import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Products from './pages/Products/ProductsByCategory';
import ProductDetail from './pages/ProductDetail/ProductDetail';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:categoryName/:page" element={<Products />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
