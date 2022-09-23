import Header from "../../../src/Components/Header"
import '../pageStyles.css';
import MainImg from '../../../assets/main_page_img.png';
import Onboard from '../../../assets/onboard_img.png';
import OnboardIconClick from '../../../assets/onboard_click.svg';
import OnboardIconContact from '../../../assets/onboard_contact.png';
import { useNavigate } from "react-router-dom";
import Showcase from "../../../src/Components/Showcase";

import Footer from "../../../src/Components/Footer";
import ContactContainer from "../../Components/ContactContainer";

function MainPage() {

  const navigate = useNavigate();

  return (
    <div>
      <Header active={'main'} />
      <section className="main_content_container">
        <div className="main_content_text">
          <p className="header">Bem-vindo à</p>
          <h1 style={{ fontSize: '80px' }}>Villa dos Bolos</h1>
          <span className="mid">Etiam condimentum orci eget tortor pharetra dignissim. Donec at diam non arcu aliquam feugiat. Cras dapibus commodo purus eu varius. Nullam commodo faucibus nulla in sodales. Suspendisse potenti. Integer viverra vestibulum sagittis.</span><br />
          <button onClick={() => navigate('/produtos')} className="mid">Conheça nossos produtos</button>
        </div>
        <div className="main_content_img">
          <img src={MainImg} />
        </div>
      </section>

      <section className="onboard_content_container">
        <div className="onboard_img_container">
          <img src={Onboard} />
        </div>
        <div className="onboard_text_container">
          <div>
            <p className="mid">Faça a sua</p>
            <h2>Encomenda</h2>
          </div>
          <div className="onboard_text">
            <p className="mid"><img src={OnboardIconClick} />Escolha seu bolo</p>
            <p className="mid"><img src={OnboardIconContact} />Entre em contato</p>
          </div>
        </div>
      </section>

      <section className="showcase_content_container">
        <div className="showcase_header_container">
          <p className="mid">Conheça nossa</p>
          <h2>Confeitaria</h2>
        </div>
        <div className="showcase_items_container">
          <Showcase />
        </div>
      </section>
      <ContactContainer />
      <Footer />
    </div>
  )
}

export default MainPage