import VehicleTypeList from 'components/VehicleTypeList/VehicleTypeList'
import VehicleEquipmentList from 'components/VehicleEquipmentList/VehicleEquipmentList'

import css from './AsideFilter.module.css'

const AsideFilter = () => {
  return (
    <aside className={css.aside}>
      <p>Location</p>
      <select name="" id="">
        
      </select>
      <p>Filters</p>
      <ul className={css.list}>
        <li className={css.item}>
          <h3 className={css.title}>Vehicle equipment</h3>
          <hr className={css.hr} />
          <VehicleEquipmentList />
        </li>
        <li className={css.item}>
          <h3 className={css.title}>Vehicle type</h3>
          <hr className={css.hr} />
          <VehicleTypeList />
        </li>
      </ul>
    </aside>
  )
}

export default AsideFilter