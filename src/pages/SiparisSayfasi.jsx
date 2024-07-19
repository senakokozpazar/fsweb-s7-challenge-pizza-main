import BannerSiparis from "../components/BannerSiparis/BannerSiparis"
import Checkboxes from "../components/Checkboxes/Checkboxes"
import Footer from "../components/Footer/Footer"
import RadioAndSelect from "../components/RadioAndSelect/RadioAndSelect"
import SiparisHeader from "../components/SiparisHeader/SiparisHeader"
import SiparisNot from "../components/SiparisNot/SiparisNot"
import SiparisToplam from "../components/SiparisToplam/SiparisToplam"


export default function SiparisSayfasi(props){
 const {formData, handleSizeChange, handleDoughChange, ekMalzemeler, handleCheckboxChange, handleTextChange, price, decreaseCount, increaseCount, malzemeFiyat, isValid, handleSubmit, errors, errorMessages, count} = props
  return(
  <>
    <SiparisHeader />
    <BannerSiparis />
    <RadioAndSelect formData={formData} handleSizeChange={handleSizeChange} handleDoughChange={handleDoughChange} errors={errors} errorMessages={errorMessages}/>
    <Checkboxes formData={formData} ekMalzemeler={ekMalzemeler} handleCheckboxChange={handleCheckboxChange} errors={errors} errorMessages={errorMessages}/>
    <SiparisNot formData={formData} handleTextChange={handleTextChange} errors={errors} errorMessages={errorMessages}/>
    <SiparisToplam formData={formData} price={price} decreaseCount={decreaseCount} increaseCount={increaseCount} malzemeFiyat={malzemeFiyat} isValid={isValid} handleSubmit={handleSubmit} count={count}/>
    <Footer />
  </>
  )
}