import CategoriesList from 'components/CategoriesList/CategoriesList'
import css from './Features.module.css'
import VehicleDetailsList from 'components/VehicleDetailsList/VehicleDetailsList'

const Features = () => {

  return (
    <div className={css.features}>
      <CategoriesList />
      <div>
        <h3 className={css.title}>Vehicle details</h3>
        <VehicleDetailsList/>
      </div>
      
    </div>
  )
}

export default Features