import './SiparisToplam.css'

export default function SiparisToplam(props){
 const {formData, price, decreaseCount, increaseCount, malzemeFiyat, isValid, handleSubmit} = props;

  return (
    <div className="siparis_toplam">

        <div class="btn-group">
          <button onClick={decreaseCount}>-</button>
          <button>1</button>
          <button onClick={increaseCount}>+</button>
        </div>

        

   <div className="toplam-container">
   
        <div className="baslik">
          <p>Sipariş Toplamı</p>
        </div>

        <div className="secimler">
          <p>Seçimler</p>
          <p>{malzemeFiyat}₺</p>
        </div>

        <div className="toplam">
          <p>Toplam</p>
          <p>{(price * formData.adet)}₺</p>
        </div>

        <div className="submit_btn">
          <button disabled={!isValid} onClick={handleSubmit}>SİPARİŞ VER</button>
        </div>
     </div>

      </div>

   
  )
}