import { assets } from '../../Assets/assets'
import './SiparisHeader.css'

export default function SiparisHeader(){

  return(
  <div className="siparis_header">
    <div className='logo'>
    <img src={assets.logo} alt="logo" />
  </div>
  </div>)
}