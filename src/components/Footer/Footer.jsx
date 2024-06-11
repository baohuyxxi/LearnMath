import "./Footer.scss";
import logo from "~/assets/images/logoMain.jpg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__above">
        <div className="footer__info">
          <div className="footer__logo">
            <img src={logo} alt="logo" className="img__logo" />
          </div>
        </div>
        <div className="footer-about row">
          <div className="footer-about__item col l-4 m-6 c-12">
            <div className="footer-about__item__title">Hỗ trợ</div>
            <Link to="/#faq" className="footer-about__item__content">
              Câu hỏi thường gặp
            </Link>
            <Link to="/#guide" className="footer-about__item__content">
              Hướng dẫn sử dụng
            </Link>
            <Link to="/#payment" className="footer-about__item__content">
              Hướng dẫn thanh toán
            </Link>
            <Link to="/#feedback" className="footer-about__item__content">
              Phản hồi PHHS
            </Link>
          </div>
          <div className="footer-about__item col l-4 m-6 c-12">
            <div className="footer-about__item__title">HƯỚNG DẪN</div>
            <Link to="/#policy" className="footer-about__item__content">
              Chính sách
            </Link>
            <Link to="/#team" className="footer-about__item__content">
              Nhóm học tập
            </Link>
            <Link to="/#founder" className="footer-about__item__content">
              Người sáng lập
            </Link>
            <Link to="/#achievement" className="footer-about__item__content">
              Thành tích học sinh
            </Link>
          </div>
          <div className="footer-about__item col l-4 m-6 c-12">
            <div className="footer-about__item__title">LIÊN HỆ</div>
            <Link to="/#contact" className="footer-about__item__content">
              Email:
              <span className="footer-about__item__content__email">
                maihuy7622@gmail.com</span>
            </Link>
            <Link to="https://www.facebook.com/BiSteam129" className="footer-about__item__content">
              Facebook: BiSteam129
            </Link>
            <Link to="/#contact" className="footer-about__item__content">
              Youtube: Bảo Huy XXI
            </Link>
            </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer__below">
        <div className="footer__contact">
          Copyright © MyCourse.io 2024. All Rights Reserved
        </div>
        <div>
          {/* <FontAwesomeIcon
            icon={faFacebookF}
            className="footer__social"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="footer__social"
          />
          <FontAwesomeIcon icon={faTwitter} className="footer__social" /> */}
        </div>
      </div>
    </footer>
  );
}
