import insta from '../../../assets/instagram_logo.png';
import phone from '../../../assets/wpp_icon.png';
import logo from '../../../assets/logo.png';
import map from '../../../assets/map.png';
import './footerStyle.css';
import { useNavigate } from 'react-router-dom';

export default function Footer() {

  const navigate = useNavigate()
  return (
    <footer>
      <div className="logos">
        <div className="logo_container"><img src={logo} alt="logo villa dos bolos" onClick={() => navigate('/')} /></div>
        <div className="socials">
          <img src={insta} alt="instagram" />
          <img src={phone} alt="phone" />
        </div>
      </div>
      <div className="address">
        <div>
          <p className='footer_mid'>Salvador</p>
          <p className='footer_small'>Avenida Cardeal da Silva</p>
          <p className='footer_small'>447, Federação</p>
          <p className='footer_small'>CEP: 40231-250</p>
        </div>
        <div><img src={map} alt="" /></div>
      </div>
      <div className="categories">
        <p className='footer_mid'>Categorias</p>
        <ul onClick={() => navigate('/produtos')}>
          <li>Bolos</li>
          <li>Tortas</li>
          <li>Vulcões</li>
          <li>Taça de Bolo</li>
        </ul>
      </div>
      <div className="footer_contact">
        <p className='footer_mid'>Contato</p>
        <ul onClick={() => navigate('/contato')}>
          <li>Faça sua encomenda</li>
          <li>Seja um franqueado</li>
        </ul>
      </div>
    </footer>
  )
}