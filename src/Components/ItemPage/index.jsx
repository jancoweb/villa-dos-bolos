import Footer from "../Footer";
import { useGlobalContext } from "../GlobalContext/useContext";
import Header from "../Header";
import "./itemStyle.css";

export default function ItemPage() {
  const { itemPage, setItemPage } = useGlobalContext();

  return (
    <>
      <Header />

      <Footer />
    </>
  );
}
