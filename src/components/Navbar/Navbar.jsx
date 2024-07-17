import { assets } from '../../Assets/assets'
import './Navbar.css'

const navBarMenu = ["YENİ! Kore", "Pizza", "Burger", "Kızartmalar", "Fast Food", "Gazlı İçecek"]
const navBarIcons = [assets.Logo1, assets.Logo2, assets.Logo3, assets.Logo4, assets.Logo5, assets.Logo6]

const Navbar = () => {
  return (
    <div className="navbar-container">
      {navBarMenu.map((item, index) => (
        <div className="navbar-item" key={index}>
          <img src={navBarIcons[index]} alt={item} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

export default Navbar