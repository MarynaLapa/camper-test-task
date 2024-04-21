import { useState } from 'react';
import { ReactComponent as Ac } from '../../images/ac.svg'
import { Svg } from 'components/Icons/Icons';
import Button from 'components/Button/Button';
import css from './Filter.module.css'

const FiltersForm = ({ onFiltersChange }) => {

  const [type, setType] = useState('')
  const [location, setLocation] = useState('')

   function handlerChange({ target: { value, name } }) {
     switch (name) {
      
      case 'location': setLocation(value);
        break;
       
      case 'type': setType(value);
        break;

       //Треба погуглити ще чекед як зробити
      default:
        return;
    }
  }

  return (
    <form >
      <div>
        <div className="location-filter">
          <p className={css.titlePart}>Location</p>
          <div className={css.locationInput}>
            <span className={css.location}>
              <Svg id="#location" width={18} height={20} icon={css.icon} />
            </span>
            <input 
              type="text"
              name="location"
              placeholder="City"
              className={css.searchInput}
              value={location}
              onChange={handlerChange}
            />
          </div>
        </div>
        <div className="equipment-filter">
          <p className={css.titlePart}>Filters</p>
          <fieldset className={css.fieldset}>
          <legend className={css.title}>Vehicle equipment</legend>
            
            <input
              type="checkbox"
              name="airConditioner"
              id="airConditioner"
              value="airConditioner"
              // checked={cheked}
              // onChange={handlerCheckboxChange}
            />
            <label htmlFor="airConditioner">
              <Ac width={32} height={32} />
              <p>AC</p>
            </label>
            
              <input
                type="checkbox"
                name="transmission"
                id="transmission"
                value="transmission"
                // checked={cheked}
                // onChange={handlerCheckboxChange}
              />
            <label htmlFor="transmission">
              <Svg id="#automatic" width={32} height={32} />
              <p>Automatic</p>
            </label>
            
            <input
              type="checkbox"
              name="kitchen"
              id="kitchen"
              value="kitchen"
              // checked={cheked}
              // onChange={handlerCheckboxChange}
            />
              <label htmlFor="kitchen">
                <Svg id="#kitchen" width={32} height={32} icon={css.icon} />
                <p>Kitchen</p>
            </label>
            
              <input
                type="checkbox"
                name="TV"
                id="TV"
                value="TV"
                // checked={cheked}
                // onChange={handlerCheckboxChange}
              />
              <label htmlFor="TV">
                <Svg id="#TV" width={32} height={32} icon={css.icon} />
                <p>TV</p>
              </label>
              <input
                type="checkbox"
                name="shower"
                id="shower"
                value="shower"
                // checked={cheked}
                // onChange={handlerCheckboxChange}
              />
              <label htmlFor="shower">
                 <Svg id="#shower" width={32} height={32} icon={css.icon} />
                <p>Shower/WC</p>
              </label>
          </fieldset>
        </div>
        <fieldset className={css.fieldset}>
          <legend className={css.title}>Vehicle type</legend>
          <div className={css.radio}>
            <div>
              <input
                type="radio"
                name="type"
                id="panelTruck"
                value="panelTruck"
                checked={type === 'panelTruck'}
                onChange={handlerChange}
              />
              <label htmlFor="panelTruck">
                 <Svg id="#van" width={36} height={36} />
                <p>Van</p>
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                id="fullyIntegrated"
                value="fullyIntegrated"
                checked={type === 'fullyIntegrated'}
                onChange={handlerChange}
              />
              <label htmlFor="fullyIntegrated">
                <Svg id="#van" width={36} height={36} />
                <p>Fully integrated</p>
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                id="alcove"
                value="alcove"
                checked={type === 'alcove'}
                onChange={handlerChange}
              />
              <label htmlFor="alcove">
                <Svg id="#van" width={36} height={36} />
                <p>Alcove</p>
              </label>
            </div>
          </div>
        </fieldset>
        <Button showColor={true} text={'Send'} className={css.button} />
      </div>
    </form>
  );
};

export default FiltersForm;