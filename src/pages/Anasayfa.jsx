import Banner from "../components/Banner/Banner"
import FoodBtnPart from "../components/FoodBtnPart/FoodBtnPart"
import FoodCards from "../components/FoodCards/FoodCards"
import Footer from "../components/Footer/Footer"
import KampanyaCards from "../components/KampanyaCards/KampanyaCards"

import Navbar from "../components/Navbar/Navbar"

export default function Anasayfa(){

  return(
  <div className="main-page" style={{backgroundColor:'var(--bej)'}}>
   <Banner />
   <Navbar />
   <KampanyaCards />
   <FoodBtnPart />
   <FoodCards />
   <Footer />
   </div>
  )
}