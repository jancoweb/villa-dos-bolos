import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import ContactPage from './Pages/Contact';
import MainPage from './Pages/MainPage';
import ProductsPage from './Pages/Products';

function MyRoutes() {
  return (
    <div className="Routes">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/produtos' element={<ProductsPage />} />
          <Route path='/contato' element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default MyRoutes