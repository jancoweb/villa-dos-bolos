import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import './productStyle.css';

export default function ProductsPage() {

  return (
    <div>
      <Header active='products' />
      <nav>
        <ul className="product_nav_list">
          <li>Bolos</li>
          <li>Tortas</li>
          <li>Vulcões</li>
          <li>Taça de bolo</li>
        </ul>
      </nav>
      <Footer />
    </div>
  )
}