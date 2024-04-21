import { useSelector } from 'react-redux'
import { advertsSelector } from 'store/camper/selctors'

import CatalogListCard from 'components/CatalogListCard/CatalogListCard'

import css from './CatalogList.module.css'
import { favoriteSelector } from 'store/favorites/selectors'

const CatalogList = () => {

  const campers = useSelector(advertsSelector)
  const favoriteList = useSelector(favoriteSelector)

  return (
    <ul className={css.list}>
      {campers.length !== 0 && campers.map((camper, i) => 
        <li key={camper.id} className={css.item}>
          <CatalogListCard
            id={camper.id}
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
            favorite={favoriteList[i]?.favorite}
          />  
        </li>
        )} 
    </ul>
  
  )
}

export default CatalogList