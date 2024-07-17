import './Footer.css';
import { assets } from '../../Assets/assets';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="left">
          <div className="logo-container">
            <img src={assets.logoftr} alt="Logo" />
          </div>
          <div className="contact-item">
            <img src={assets.Icon1} alt="Address Icon" />
            <address>
              <p>341 Londonderry Road,</p>
              <p>İstanbul Türkiye</p>
            </address>
          </div>
          <div className="contact-item">
            <img src={assets.Icon2} alt="Email Icon" />
            <a href="mailto:aciktim@teknolojikyemekler.com">aciktim@teknolojikyemekler.com</a>
          </div>
          <div className="contact-item">
            <img src={assets.Icon3} alt="Phone Icon" />
            <a href="tel:+902161234567">+90 216 123 45 67</a>
          </div>
        </div>
        
        <div className="middle">
          <h3>Hot Menu</h3>
          <p>Terminal Pizza</p>
          <p>5 kişilik Hackathlon Pizza</p>
          <p>useEffect Tavuklu Pizza</p>
          <p>Beyaz Console Frosty</p>
          <p>Testler Geçti Mutlu Burger</p>
          <p>Position Absolute Acı Burger</p>
        </div>

        <div className="right">
          <h3>Instagram</h3>
          <div className='insta-container'>
            <img src={assets.li0} alt="Instagram 1" />
            <img src={assets.li1} alt="Instagram 2" />
            <img src={assets.li2} alt="Instagram 3" />
            <img src={assets.li3} alt="Instagram 4" />
            <img src={assets.li4} alt="Instagram 5" />
            <img src={assets.li5} alt="Instagram 6" />
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <hr />
        <p>© 2024 Teknolojik Yemekler</p>
      </div>
    </footer>
  );
}
