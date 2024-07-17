import './Banner.css'
import { assets } from '../../Assets/assets'
import { useHistory } from 'react-router-dom/'


export default function Banner(){

  const history= useHistory();
  
  const clickHandler = () => {
    history.push('/siparissayfasi'); 
  };
  
return(
  <div className="home_banner">

  <div className='banner_logo'>
    <img src={assets.logo} alt="logo" className='logo' />
  </div>

  <div className='banner_text'>
    <p className='satisfy'>fırsatı kaçırma</p>
    <p className='roboto'>KOD ACIKTIRIR </p>
    <p className='roboto'>PİZZA, DOYURUR</p>
  </div>

  <div className='banner_btn'>
    <button onClick={clickHandler} className='aciktim_btn'>ACIKTIM</button>
  </div>

</div>
)
}