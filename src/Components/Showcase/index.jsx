import Bolos from '../../../assets/showcase_item_bolo.png';
import Tortas from '../../../assets/showcase_item_torta.png';
import Vulcoes from '../../../assets/showcase_item_vulcao.png';
import Tacas from '../../../assets/showcase_item_taca.png';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from "../../Components/GlobalContext/useContext";


export default function Showcase() {
  const navigate = useNavigate();

  const productsType = [{ id: 1, name: 'Bolos', img: Bolos }, { id: 2, name: 'Tortas', img: Tortas }, { id: 3, name: 'Vulcões', img: Vulcoes }, { id: 4, name: 'Taça de Bolo', img: Tacas }];

  const { setActive } = useGlobalContext();

  function handleClick(product) {
    let format = product.toLowerCase()
    setActive(format)
    navigate('/produtos')
  }

  return (
    <>
      {productsType.map((product) => {
        return (
          <div className="showcase_item" onClick={(e) => handleClick(product.name)} key={product.id}>
            <div className="item_img_container">
              <img src={product.img} />
            </div>
            <div className="item_text_container">
              <h3>{product.name}</h3>
              <p className="small">Ut consequat nibh diam, a pulvinar tellus bibendum eget. Vivamus lorem nunc, lacinia sit amet faucibus eu, semper a ante. </p>
              <button className='mid'>Saiba mais</button>
            </div>
          </div>
        )
      })

      }
    </>
  )
}