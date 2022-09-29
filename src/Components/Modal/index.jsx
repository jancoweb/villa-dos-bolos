import './modalStyle.css';
import Close from '../../../assets/close.png';
import { useGlobalContext } from '../GlobalContext/useContext';

export default function Modal() {

  const { showModal, setShowModal } = useGlobalContext()


  function handleSubmit() {
    setShowModal(false)
  }

  return (
    <>
      {
        showModal &&
        <div className='modal_bg'>
          <div className='modal_box'>
            <p><img src={Close} alt="" onClick={() => setShowModal(false)} /></p>
            <div className='modal_text_container'>
              <h2 style={{ fontWeight: '300' }}>A franquia da Villa dos bolos</h2>
              <p className='mid'>Pellentesque congue quam quam, fringilla convallis lorem venenatis id. Nunc sit amet sapien sed ante fermentum placerat. Duis sed ultrices libero. Sed vestibulum diam nulla, vel fermentum tellus posuere nec. Ut orci tortor, blandit non lectus quis, ultricies sagittis orci. Ut malesuada quam ac tempor faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi mi ipsum, ullamcorper nec arcu eget, vestibulum gravida magna. Sed ac suscipit erat.</p>
            </div>
            <div className='form_container'>
              <form onSubmit={() => handleSubmit()}>
                <div className='input_container'>
                  <input className='mid' type="text" placeholder='Nome' />
                  <input className='mid' type="text" placeholder='Telefone' />
                </div>
                <div className='input_container'>
                  <input className='mid' type="email" placeholder='E-mail' />
                  <button className='mid' type='submit'>Enviar dados</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    </>

  )
}