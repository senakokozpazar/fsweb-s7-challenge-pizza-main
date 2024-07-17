
import SiparisBtn from '../SiparisBtn/SiparisBtn';
import './KampanyaCards.css';

export default function KampanyaCards() {
  return (
    <div className='kampanya-kard-container'>

      <div className='left-card'>
      <p style={{ fontSize: '44px', fontWeight: 'bold', fontFamily: 'Quattrocento', color:'whitesmoke', margin:'10px'}}>
          ÖZEL <br />Lezzetus
        </p>
        <p style={{fontSize: '17px', fontFamily: 'Barlow', color:'whitesmoke', margin:'10px'}}>Position: Absolute Acı Burger</p>
        <SiparisBtn />
      </div>

      <div className='right-cards'>

        <div className="right-top">
          <p style={{ fontSize: '24px', fontFamily: 'Barlow', color:'whitesmoke', margin:'10px'}}>Hackathlon <br/>Burger Menü</p>
          <SiparisBtn />
        </div>

        <div className="right-bottom">
          <p style = {{fontSize: '24px', fontFamily: 'Barlow', color:'black', margin:'10px'}}><span style={{color:'var(--kirmizi)'}}>Çooook</span> hızlı <br/>npm gibi kurye</p>
          <SiparisBtn />
        </div>

      </div>

    </div>
  );
}
