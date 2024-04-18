import { useSelector } from 'react-redux'
import { advertsSelector } from 'store/camper/selctors'

import CatalogListCard from 'components/CatalogListCard/CatalogListCard'

import css from './CatalogList.module.css'

const CatalogList = () => {

  const adverts = useSelector(advertsSelector)
  let set = new Set();
  set.add(adverts)
  const campers =  set.values().next().value

  console.log('campers', campers)
  


  return (
    <ul className={css.list}>
      {campers.length && campers.map(camper => 
        <li key={camper._id} className={css.item}>
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
            image={camper.gallery[0]}
          />  
        </li>
        )} 
    </ul>
  
  )
}

export default CatalogList