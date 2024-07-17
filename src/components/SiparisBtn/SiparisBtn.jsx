import { useHistory } from 'react-router-dom'
import './SiparisBtn.css'

export default function SiparisBtn(){

  const history=useHistory()
  const handleBtnClick = () => {
    history.push('/siparissayfasi'); 
  };
  return(
  <div className='siparis-btn'>
    <button onClick={handleBtnClick}>SİPARİŞ VER</button>
  </div>
  )
}