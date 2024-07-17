import Footer from "../components/Footer/Footer"
import SiparisHeader from "../components/SiparisHeader/SiparisHeader"

export default function OnaySayfasi(props){
  const {formData, pizzaResponse} = props

    console.log(pizzaResponse)
  return(
    
    <div className="onay-sayfasi" style={{background:"var(--kirmizi)"}}>
      <SiparisHeader />
      <h2 
      style={{fontFamily:"Satisfy", color:"var(--sari)", display:"flex", justifyContent:"center", alignItems:"center", margin:"50px"}}>
        lezzetin yolda</h2>
        <p style={{fontFamily:"Barlow", color: "white", fontSize:"70px", fontWeight:"lighter",display:"flex", justifyContent:"center", alignItems:"center" }}
        >SİPARİŞ ALINDI</p>
        <hr style={{border:"1px solid white", margin: "0 auto", maxWidth: "80%", marginBottom: "20px", marginTop:"10px"}}/>
        <p style={{fontFamily:"Barlow", color: "white", fontSize:"24px", fontWeight:"600",display:"flex", justifyContent:"center", alignItems:"center" }}>Position Absolute Acı Pizza</p>

      <div style={{fontFamily:"Barlow", color: "white", fontSize:"20px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"50px", textAlign: "center"}}>
        <p><span style={{fontWeight:"600"}}>İsim: </span>{pizzaResponse.isim}</p>
        <p><span style={{fontWeight:"600"}}>Boyut: </span> {pizzaResponse.boyut}</p>
        <p><span style={{fontWeight:"600"}}>Hamur: </span> {pizzaResponse.hamur}</p>
        <p><span style={{fontWeight:"600"}}>Malzemeler: </span> {pizzaResponse.malzemeler.join(", ")}</p>
        <p><span style={{fontWeight:"600"}}>Notunuz: </span> {pizzaResponse.not}</p>
        <p><span style={{fontWeight:"600"}}>Adet: </span> {pizzaResponse.adet}</p>
      </div>
    <Footer />
    </div>
  )
}