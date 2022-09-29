import { useNavigate } from 'react-router-dom';
import InstaLogoGreen from '../../../assets/instagram_green.svg';
import PhoneLogoGreen from '../../../assets/phone_green.svg';
export default function ContactContainer() {
  const navigate = useNavigate()
  return (
    <>
      <section className="main_page_contact_container">
        <div className="main_page_contact_header">
          <p className="mid">Entre em contato e</p>
          <h2>Faça sua encomenda</h2>
        </div>
        <div className="main_page_contact_content">
          <div className="customer">
            <p className="mid" style={{ fontWeight: 'bold' }}>Consumidor</p>
            <div className="infos">
              <p className="small"><img src={InstaLogoGreen} />@villadosbolos</p>
              <p className="small"><img src={PhoneLogoGreen} />(71)99999-9999</p>
            </div>
          </div>
          <div className="franchise">
            <p className="mid" style={{ fontWeight: 'bold' }}>Seja um franqueado</p>
            <div className="infos">
              <p className="small" style={{ fontSize: '18px' }}>Ut consequat nibh diam, a pulvinar tellus bibendum eget. Vivamus lorem nunc, . Quisque eleifend, odio eu tristique rutrum, nisi diam gravida justo,.</p>
              <button className="mid" onClick={() => navigate('/contato')}>Seja um franqueado</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}