import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import './productStyle.css';
import { useEffect, useState } from "react";
import bolos from "../../Components/ProductsArr/bolos";

export default function ProductsPage() {

  const [active, setActive] = useState('');
  const [produtos, setProdutos] = useState([])

  function handleSelection(e) {
    setActive('');
    setActive(e.target.innerHTML.toLowerCase());

  }
  useEffect(() => {
    if (active == 'bolos') return setProdutos(bolos)
    return setProdutos([])
  }, [active])


  return (
    <div>
      <Header active='products' />
      <nav>
        <ul className="product_nav_list">
          <li onClick={(e) => handleSelection(e)} className={active == 'bolos' ? 'active' : null}>Bolos</li>
          <li onClick={(e) => handleSelection(e)} className={active == 'tortas' ? 'active' : null}>Tortas</li>
          <li onClick={(e) => handleSelection(e)} className={active == 'vulcões' ? 'active' : null}>Vulcões</li>
          <li onClick={(e) => handleSelection(e)} className={active == 'taça de bolo' ? 'active' : null}>Taça de bolo</li>
        </ul>
      </nav>
      {
        produtos && produtos.map((produto) => {
          return (
            <div className="item" key={produto.id}>
              <div className="item_img_container">
                <img src={produto.img} alt="" />
              </div>
              <div className="item_content_container">
                <p>{produto.nome}</p>
                <p>Saiba mais</p>
              </div>
            </div>
          )
        })
      }
      <Footer />
    </div>
  )
}