import './Checkboxes.css'

export default function Checkboxes(props){

  const {formData, ekMalzemeler, handleCheckboxChange, errors, errorMessages} = props;



  return(
    <div className="checkboxes">

      <div className='malzeme_baslik'>
        <p>Ek Malzemeler</p>
        <p style={{fontFamily:"Barlow", fontWeight:500, margin:"5px"}}>5₺</p>
        {errors.malzemeler && <p style={{color:('var(--kirmizi)'), fontFamily:"Barlow"}}>{errorMessages.malzemeler}</p>}
      </div>

      <div className="checkbox_grid">
          {ekMalzemeler.map((malzeme, index) => (
            <div key={index} className="checkbox_item">
              <input
                type="checkbox"
                id={malzeme}
                name='malzemeler'
                value={malzeme}
                checked={formData.malzemeler.includes(malzeme)}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={malzeme}>{malzeme}</label>
            </div>))}
      </div>

    </div>
  )
}