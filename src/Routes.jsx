import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./Components/GlobalContext/context";
import ItemPage from "./Components/ItemPage";
import ContactPage from "./Pages/Contact/Contact";
import MainPage from "./Pages/Main/MainPage";
import ProductsPage from "./Pages/Products/Products";

function MyRoutes() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/produtos/:id" element={<ItemPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default MyRoutes;
