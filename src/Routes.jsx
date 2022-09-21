import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import ContactPage from './Pages/Contact/Contact';
import MainPage from './Pages/Main/MainPage';
import ProductsPage from './Pages/Products/Products';

function MyRoutes() {
  return (
    <div className="Routes">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/produtos' element={<ProductsPage />}>
          </Route>
          <Route path='/contato' element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default MyRoutes