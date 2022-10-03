import ContactContainer from "../ContactContainer";
import Footer from "../Footer";
import { useGlobalContext } from "../GlobalContext/useContext";
import Header from "../Header";
import "./itemStyle.css";

export default function ItemPage() {
  const { itemPage } = useGlobalContext();
  console.log(itemPage)
  return (
    <>
      <Header />
      <div className="item_page_container">
        <div className="item_page_head_content">
          <div className="item_page_head_img">
            <img src={itemPage.img} alt="" />
          </div>
          <div className="item_page_head_text">
            <h2>{itemPage.nome}</h2>
            <p className="mid">O sucesso da Villa!</p>
            <p className="small">{itemPage.description}</p>
          </div>
        </div>
        <div className="item_page_mid_container">
          <div className="item_page_mid_content">
            <h3>Descrição do produto</h3>
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
