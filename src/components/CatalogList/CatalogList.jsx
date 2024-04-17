import CatalogListCard from 'components/CatalogListCard/CatalogListCard'
// import css from './CatalogList.module.css'
import campers from "./car.json"

const CatalogList = () => {
  console.log('car', campers)
  return (
    <ul>
      {campers.map(camper => 
        <li key={camper._id}>
          <CatalogListCard
            name={camper.name}
            price={camper.price}
            rating={camper.rating}
            location={camper.location}
            reviews={camper.reviews}
            description={camper.description}
            details={camper.details}
            adults={camper.adults}
            children={camper.children}
            engine={camper.engine}
            transmission={camper.transmission}
          />  
        </li>
        )} 
    </ul>
  )
}

export default CatalogList