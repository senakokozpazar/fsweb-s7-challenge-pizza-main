import './FoodCards.css'
import { assets } from '../../Assets/assets'
import { useHistory } from 'react-router-dom';

export default function FoodCards(){

  const foodItems = [
    {
      imgSrc: assets.food1,
      title: 'Terminal Pizza',
      details: ['4.9', '(200)', '60₺']
    },
    {
      imgSrc: assets.food2,
      title: 'Position Absolute Acı Pizza',
      details: ['4.9', '(200)', '60₺']
    },
    {
      imgSrc: assets.food3,
      title: 'useEffect Tavuklu Burger',
      details: ['4.9', '(200)', '60₺']
    }
  ];

  const history= useHistory()

  const handleCardClick = () => {
    history.push('/siparissayfasi')
  }


  return(
    <div className="food-card-container">
      {foodItems.map((food, index) => (
        <div key={index} className="food-card" onClick={handleCardClick}>
          <img src={food.imgSrc} alt={food.title} className="food-card-img" />
          <h4>{food.title}</h4>
          <div className="food-card-details">
            {food.details.map((detail, i) => (
              <p key={i}>{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}