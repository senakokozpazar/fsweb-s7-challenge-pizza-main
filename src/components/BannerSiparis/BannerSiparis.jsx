import { Link, NavLink } from 'react-router-dom/'
import './BannerSiparis.css'

export default function BannerSiparis(){

  return (
    <>
  <div className='banner_siparis'> </div>
  
  <div className='pizza_aciklama_container'>
    <div className='pizza_aciklama'>
  <div className='links'>
  <NavLink to="/"  className="links">Anasayfa</NavLink>
   <span> - </span>
  <NavLink to="/siparissayfasi" activeClassName="active-link" className="links">Sipariş Oluştur</NavLink>
</div>

<div className='pizza_baslik'>
  <p>Position Absolute Acı Pizza</p>
</div>

<div className='fiyat_puan_yorum'>
    <p>85.50₺</p>
    <p>4.9</p>
    <p>(200)</p>
</div>

<div className="pizza_metin">
  <p>
    Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizetta denir.
  </p>
</div>
</div>
</div>
</>
  )
}