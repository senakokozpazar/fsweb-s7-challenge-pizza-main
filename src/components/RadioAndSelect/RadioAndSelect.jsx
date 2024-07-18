import './RadioAndSelect.css'

export default function RadioAndSelect(props){

  const {formData, handleSizeChange, handleDoughChange, errors, errorMessages} = props;

  return(
    <div className="radio_select_container">
      
      <div className="radio_btn">
        <p>Boyut Seç <span className='zorunlu'>*</span></p>
        {errors.boyut && <p style={{color:('var(--kirmizi)'), fontFamily:"Barlow"}}>{errorMessages.boyut}</p>}
        
        <div className='radio_inputs'>
          <input
            type="radio"
            id="small"
            name="boyut"
            value='small'
            checked={formData.boyut === 'small'}
            onChange={handleSizeChange}
            data-cy="size-input"
          />
          <label htmlFor="small">S</label>
        
          <input
            type="radio"
            id="medium"
            name="boyut"
            value='medium'
            checked={formData.boyut === 'medium'}
            onChange={handleSizeChange}
            data-cy="size-input"
          />
          <label htmlFor="medium">M</label>

          <input
            type="radio"
            id="large"
            name="boyut"
            value='large'
            checked={formData.boyut === 'large'}
            onChange={handleSizeChange}
            data-cy="size-input"
          />
          <label htmlFor="large">L</label>
        </div>

      </div>

      <div className="select_area">
        <p>Hamur Seç <span className='zorunlu'>*</span></p>
        {errors.hamur && <p style={{color:('var(--kirmizi)'), fontFamily:"Barlow"}}>{errorMessages.hamur}</p>}

        <div>
          <select id='hamur' value={formData.hamur} onChange={handleDoughChange} >
            <option value="" disabled data-cy="dough-input">
              --Hamur Kalınlığı Seç--
            </option>
            <option value="ince">İnce</option>
            <option value="kalın">Kalın</option>
            <option value="glutensiz">Glutensiz</option>
          </select>
        </div>

      </div>

    </div>
  )
}