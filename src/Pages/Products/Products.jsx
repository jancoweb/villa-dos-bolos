import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import './productStyle.css';
import { useEffect, useState } from "react";
// import bolos from "../../Components/ProductsArr/bolos";
import arrowIcon from '../../../assets/arrow_forward.png';
import ContactContainer from "../../Components/ContactContainer";
import api from "../../services/api";
export default function ProductsPage() {

  const [active, setActive] = useState('');
  const [produtos, setProdutos] = useState([])

  function handleSelection(e) {
    setActive('');
    setActive(e.target.innerHTML.toLowerCase());

  }

  useEffect(() => {
    async function handlePopulate() {
      let id = 0;
      if (active == 'bolos') id = 1;
      if (active == 'tortas') id = 2;
      if (active == 'vulcões') id = 3;
      if (active == 'taça de bolo') id = 4;
      try {
        const res = await api.get(`/produto/tipo/${id}`);
        setProdutos(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    handlePopulate()
  }, [active])


  return (
    <>
      <Header active='products' />
      <div className="products_container">
        <nav>
          <ul className="product_nav_list">
            <li onClick={(e) => handleSelection(e)} className={active == 'bolos' ? 'active' : null}>Bolos</li>
            <li onClick={(e) => handleSelection(e)} className={active == 'tortas' ? 'active' : null}>Tortas</li>
            <li onClick={(e) => handleSelection(e)} className={active == 'vulcões' ? 'active' : null}>Vulcões</li>
            <li onClick={(e) => handleSelection(e)} className={active == 'taça de bolo' ? 'active' : null}>Taça de bolo</li>
          </ul>
        </nav>
        <div className="item_list_container">
          {
            produtos && produtos.map((produto) => {
              return (
                <div className="item" key={produto.id}>
                  <div className="item_img_container">
                    <img src={produto.img} alt="" />
                  </div>
                  <div className="product_item_content_container">
                    <h3 className="item_name">{produto.nome}</h3>
                    <p className="mid">Saiba mais <img src={arrowIcon} alt="" /></p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <ContactContainer />
      </div>
      <Footer />
    </>
  )
}