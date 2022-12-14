import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./productStyle.css";
import { useEffect, useState } from "react";
import arrowIcon from "../../../assets/arrow_forward.png";
import ContactContainer from "../../Components/ContactContainer";
import api from "../../services/api";
import { useGlobalContext } from "../../Components/GlobalContext/useContext";
import { useNavigate } from "react-router-dom";
import ItemNav from "../../Components/ItemNav";

export default function ProductsPage() {
  const navigate = useNavigate();
  const { active } = useGlobalContext();
  const { setItemPage } = useGlobalContext();
  const [produtos, setProdutos] = useState([]);

  async function handleItem(id) {
    try {
      const res = await api.get(`/produto/${id}`);
      setItemPage(res.data);
      return navigate(`/produtos/${id}`);
    } catch (error) {
      return error.message;
    }
  }

  useEffect(() => {
    async function handlePopulate() {
      let id = 0;
      if (active == "bolos") id = 1;
      if (active == "tortas") id = 2;
      if (active == "vulcões") id = 3;
      if (active == "taça de bolo") id = 4;
      try {
        const res = await api.get(`/produto/tipo/${id}`);
        setProdutos(res.data);
      } catch (error) {
        return error.message;
      }
    }
    handlePopulate();
  }, [active]);

  return (
    <>
      <Header active="products" />
      <div className="products_container">
        <ItemNav />
        <div className="item_list_container">
          {produtos &&
            produtos.map((produto) => {
              return (
                <div className="item" key={produto.id} onClick={() => { handleItem(produto.id); }}>
                  <div className="product_item_img_container">
                    <img src={produto.img} alt="" />
                  </div>
                  <div className="product_item_content_container">
                    <h3 className="item_name">{produto.nome}</h3>
                    <p className="mid">
                      Saiba mais <img src={arrowIcon} alt="" />
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <ContactContainer />
      </div>
      <Footer />
    </>
  );
}
