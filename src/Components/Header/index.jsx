import { useNavigate } from 'react-router-dom';
import LOGO from '../../../assets/logo.png';
import './header.css';

export default function Header({ active }) {

  const navigate = useNavigate();

  return (
    <header>
      <div className="header_logo_container">
        <img src={LOGO} className="header_logo_img" />
      </div>
      <div className="header_nav_continer">
        <ul className='header_nav_link_container'>
          <li className='header_nav_link mid'>
            <p className={active == 'main' ? 'active' : ''} onClick={() => navigate('/')}> Início</p>
          </li>
          <li className='header_nav_link mid'>
            <p className={active == 'products' ? 'active' : ''} onClick={() => navigate('/produtos')}>Produtos</p>
          </li>
          <li className='header_nav_link mid'>
            <p className={active == 'contact' ? 'active' : ''} onClick={() => navigate('/contato')}>Contato</p>
          </li>
        </ul>
      </div>
    </header >
  )
}