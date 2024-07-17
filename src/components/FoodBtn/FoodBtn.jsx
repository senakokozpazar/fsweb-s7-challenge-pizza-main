import "./FoodBtn.css"
import { assets } from '../../Assets/assets'

export default function FoodBtn(){

  const foodButtons = [
    { name: 'Ramen', imgSrc: assets.Logo1 },
    { name: 'Pizza', imgSrc: assets.Logo2 },
    { name: 'Burger', imgSrc: assets.Logo3 },
    { name: 'French fries', imgSrc: assets.Logo4 },
    { name: 'Fast food', imgSrc: assets.Logo5 },
    { name: 'Soft drinks', imgSrc: assets.Logo6 },
  ];

  return (
    <div className="food-btn">
      {foodButtons.map((food, index) => (
        <button key={index} className="food-button">
          <img src={food.imgSrc} alt={food.name} />
          <span>{food.name}</span>
        </button>
      ))}
    </div>
  );
}