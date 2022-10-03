import ContactContainer from "../ContactContainer";
import Footer from "../Footer";
import { useGlobalContext } from "../GlobalContext/useContext";
import Header from "../Header";
import ItemNav from "../ItemNav";
import Arrow_back from '../../../assets/arrow_back.png'
import "./itemStyle.css";
import { useNavigate } from "react-router-dom";
import Hashtag from '../../../assets/hash.png'

export default function ItemPage() {
  const navigate = useNavigate()
  const { itemPage } = useGlobalContext();

  return (
    <>
      <Header />
      <ItemNav />
      <p className="arrow_back" onClick={() => { navigate('/produtos') }}><img src={Arrow_back} alt="" /></p>
      <div className="item_page_container">
        <div className="item_page_head_content">
          <div className="item_page_head_img">
            <img src={itemPage.img} alt="" />
          </div>
          <div className="item_page_head_text">
            <h2>{itemPage.nome}</h2>
            <p className="mid">O sucesso da Villa!</p>
            <br />
            <p className="small">{itemPage.description}</p>
          </div>
        </div>
        <div className="item_page_mid_container">
          <div className="item_page_mid_content">
            <h3><img src={Hashtag} style={{ width: '40px' }} alt="" /> Descrição do produto</h3>
            <p className="small">
              Etiam condimentum orci eget tortor pharetra dignissim. Donec at diam non arcu aliquam feugiat. Cras dapibus commodo purus eu varius. Nullam commodo faucibus nulla in sodales. Suspendisse potenti. Integer viverra vestibulum sagittis. Ut lacus diam, sagittis a suscipit eget, lobortis quis dui.
            </p>
          </div>
          <div>
            <img src={itemPage.img} alt="" />
          </div>
        </div>
      </div>
      <ContactContainer />

      <Footer />
    </>
  );
}
