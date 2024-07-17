import FoodBtn from "../FoodBtn/FoodBtn"
import "./FoodBtnPart.css"
export default function FoodBtnPart(){

  return(
    <>
    <div className="p-container">
      
    <div className="red-p">
    <p>en çok paketlenen menüler</p>
    </div>
      
    <div className="big-p">
    <p>Acıktıran Kodlara Doyuran Lezzetler</p>
    </div>
    
    </div>

    <div className="btn-container">
      <FoodBtn />
    </div>
    </>
  )
}