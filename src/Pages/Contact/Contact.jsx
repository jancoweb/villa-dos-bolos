import Header from "../../Components/Header";
import { useGlobalContext } from "../../Components/GlobalContext/useContext";
import Modal from "../../Components/Modal";
import Footer from "../../Components/Footer";
import InstaLogoGreen from '../../../assets/instagram_green.svg'
import PhoneLogoGreen from '../../../assets/phone_green.svg'

export default function ContactPage() {
  const { showModal, setShowModal } = useGlobalContext()

  function handleModal() {
    setShowModal(true)
  }

  return (
    <>
      <Header active='contact' />
      <div className="page_container">
        <div className="contact_text_container">
          <div className="contact_text_content">
            <p className="mid">Entre em contato com a</p>
            <h2>Villa dos Bolos</h2>
            <p className="small">Etiam condimentum orci eget tortor pharetra dignissim. Donec at diam non arcu aliquam feugiat. Cras dapibus commodo purus eu varius. Nullam commodo faucibus nulla in sodales. Suspendisse potenti. Integer viverra vestibulum sagittis. Ut lacus diam, sagittis a suscipit eget, lobortis quis dui.</p>
          </div>
          <div className="infos">
            <p className="small"><img src={InstaLogoGreen} />@villadosbolos</p>
            <p className="small"><img src={PhoneLogoGreen} />(71)99999-9999</p>
          </div>
        </div>
        <div className="contact_franchise_box">
          <h2>Seja um franqueado</h2>
          <p className="mid">A Villa dos Bolos tem uma maravilhosa rede de franquias</p>
          <button className="franchise_btn mid" onClick={() => handleModal()}>Quero ser um franqueado</button>
        </div>
        <Modal />
      </div>
      <Footer />
    </>
  )
}