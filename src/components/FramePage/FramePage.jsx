import "./FramePage.scss";
// import Footer from '../Footer/Footer'
import HeaderDefault from "~/components/HeaderDefault/HeaderDefault";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// eslint-disable-next-line react/prop-types
export default function FramePage({ children }) {
  return (
    <div className="frame-page">
      <HeaderDefault />
      <Navbar/>
      <main className="frame-page__main">{children}</main>
      <Footer />
    </div>
  );
}
