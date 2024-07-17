import './SiparisNot.css'

export default function SiparisNot(props){
  const {formData, handleTextChange, errors, errorMessages} = props;
  return(

 <div className='siparis_not'>
  
    <div className='baslik'>
      <p>Sipariş Notu</p>
    </div>

    <div className='not_alani'>
      <textarea
        id="not"
        name="not"
        value={formData.not}
        onChange={handleTextChange}
        placeholder='Siparişine eklemek istediğin bir not var mı?'
      />
    </div>

    <div className='isim_alani'>
      <label htmlFor='isim'>Adınız</label>
      {errors.isim && <p style={{color:('var(--kirmizi)'), fontFamily:"Barlow", margin:"5px 0"}}>{errorMessages.isim}</p>}
      <textarea
        id="isim"
        name="isim"
        value={formData.isim}
        onChange={handleTextChange}
        placeholder='Adınız'
      />
    </div>
   

 </div>
  )
}