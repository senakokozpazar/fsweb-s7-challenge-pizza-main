import './App.css'
import { Switch, Route } from 'react-router-dom'
import Anasayfa from './pages/Anasayfa'
import SiparisSayfasi from './pages/SiparisSayfasi'
import OnaySayfasi from './pages/OnaySayfasi'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/'
import axios from 'axios'

const initialValues = {
  isim:'',
  boyut:'',
  hamur:'',
  malzemeler:[],
  not:'',
  adet:1
}

function App() {

  const [formData, setFormData] = useState(initialValues);
  const [pizzaResponse, setPizzaResponse] = useState(null);
  const [price, setPrice] = useState(85.50)
  const [malzemeFiyat, setMalzemeFiyat] = useState(0);
  const ekMalzemeler = [
    "Pepperoni", "Kanada Jambonu", "Soğan",
    "Mısır", "Jalepeno", "Biber", "Ananas",
    "Sosis", "Tavuk Izgara", "Domates",
    "Salam", "Sarımsak", "Sucuk", "Kabak"
  ];
  const history = useHistory()
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    isim: true,
    boyut: true,
    hamur: true,
    malzemeler: true
  });

  const errorMessages = {
    boyut: "Boyut seçiniz",
    hamur: "Hamur seçiniz",
    malzemeler: "En az 5 en fazla 10 malzeme seçiniz",
    isim: "En az 3 karakter giriniz"
  } 


  const handleSizeChange = (event) => {
    const { value } = event.target;
    setFormData({ ...formData, boyut: value });
   
    if (value !== '') {
      setErrors({ ...errors, boyut: false });
    } else {
      setErrors({ ...errors, boyut: true });
    }
  };
 
  const handleDoughChange = (event) => {
    const { value } = event.target;
    setFormData({ ...formData, hamur: value });
  
    if (value !== '') {
      setErrors({ ...errors, hamur: false });
    } else {
      setErrors({ ...errors, hamur: true });
    }
  };

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    let updatedMalzemeler = formData.malzemeler;
    
  
    if (event.target.checked) {
      if (updatedMalzemeler.length < 10) {
        updatedMalzemeler = [...updatedMalzemeler, value];
        setPrice(prevPrice => prevPrice + 5);
        setMalzemeFiyat(prevFiyat => prevFiyat + 5)
        
      }
    } else {
      updatedMalzemeler = updatedMalzemeler.filter(malzeme => malzeme!== value);
      setPrice(prevPrice => prevPrice - 5);
      setMalzemeFiyat(prevFiyat => prevFiyat - 5)
    }
  
    if (updatedMalzemeler.length < 5 || updatedMalzemeler.length >= 10) {
      setErrors({ ...errors, malzemeler: true });
    } else {
      setErrors({ ...errors, malzemeler: false });
    }
  
    setFormData({
     ...formData,
      malzemeler: updatedMalzemeler
    });

  };

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (value.trim().length < 3) {
      setErrors({ ...errors, isim: true });
    } else {
      setErrors({ ...errors, isim: false });
    }
  };

  const decreaseCount = () => {
    if (formData.adet > 1) {
      setFormData({
        ...formData,
        adet: formData.adet - 1
      });
    }
  }
  const increaseCount = () => {
    setFormData({
      ...formData,
      adet: formData.adet + 1
    });
  };
 
  useEffect(() => {
    if (formData.malzemeler.length >= 5 &&
        formData.malzemeler.length <= 10 &&
        formData.isim.trim().length >= 3 &&
        formData.boyut !== '' &&
        formData.hamur !== '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    
    }
  }, [formData]);  


  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!isValid) return;
  
    axios.post('https://reqres.in/api/pizza', formData)
      .then((response) => {

        setPizzaResponse(response.data);
        history.push('/onaysayfasi');
        setFormData(initialValues);
    
      })
      .catch((error) => {
        console.warn(error);
      });
  };




  return (
    <div className='app'>
     <Switch>
        <Route path = "/" exact>
          <Anasayfa />
        </Route>
        <Route path = "/siparissayfasi" exact>
          <SiparisSayfasi formData={formData} handleSizeChange={handleSizeChange}
          handleDoughChange={handleDoughChange} ekMalzemeler={ekMalzemeler} handleCheckboxChange={handleCheckboxChange} 
          handleTextChange={handleTextChange} price={price}  decreaseCount={decreaseCount} increaseCount={increaseCount} malzemeFiyat={malzemeFiyat} isValid={isValid} handleSubmit={handleSubmit} errors={errors} errorMessages={errorMessages}/>
        </Route>
        <Route path = "/onaysayfasi" exact>
          <OnaySayfasi formData={formData} pizzaResponse={pizzaResponse}/>
        </Route>
     </Switch>
    </div>
    )
  }

export default App
