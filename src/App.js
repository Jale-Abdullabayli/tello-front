import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Products from './pages/Products/Products';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:categoryName" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
