import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../GlobalContext/useContext";


export default function ItemNav() {

  const navigate = useNavigate()

  const { active, setActive } = useGlobalContext()

  function handleSelection(e) {
    setActive("");
    setActive(e.target.innerHTML.toLowerCase());
    navigate('/produtos')
  }

  return (
    <>
      <nav>
        <ul className="product_nav_list">
          <li
            onClick={(e) => handleSelection(e)}
            className={active == "bolos" ? "active" : null}>
            Bolos
          </li>
          <li
            onClick={(e) => handleSelection(e)}
            className={active == "tortas" ? "active" : null}>
            Tortas
          </li>
          <li
            onClick={(e) => handleSelection(e)}
            className={active == "vulcões" ? "active" : null}>
            Vulcões
          </li>
          <li
            onClick={(e) => handleSelection(e)}
            className={active == "taça de bolo" ? "active" : null}>
            Taça de bolo
          </li>
        </ul>
      </nav>
    </>
  )
}