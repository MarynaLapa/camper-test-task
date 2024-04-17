import CatalogListCard from 'components/CatalogListCard/CatalogListCard'
// import css from './CatalogList.module.css'
import cars from "./car.json"

const CatalogList = () => {
  console.log('car', cars)
  return (
    <ul>
      {cars.map(car => 
        <li>
          <CatalogListCard
            name={car.name}
            price={car.price}
          />  
        </li>
        )} 
    </ul>
  )
}

export default CatalogList