import { useSelector } from 'react-redux'
import { advertsSelector } from 'store/camper/selctors'

import CatalogListCard from 'components/CatalogListCard/CatalogListCard'

import css from './CatalogList.module.css'

const CatalogList = () => {

  // const adverts = useSelector(advertsSelector)
  const campers =  useSelector(advertsSelector)
  // let set = new Set();

  // adverts.forEach(element => {
  //   if (set.has(element)) return false
  //   else set.add(element)
  // });

  // console.log('set', set.values().next().value)

  // for (let i = 0; i < adverts.length; i += 1) {
  //          console.log('set', set)        
  //                 if (set[i].has(adverts[i])) return false
  //                   else set.add(adverts[i])
                    // console.log('element', adverts[i]._id)
                // }
                // set.add(payload)
                // console.log('set', set.values().next())
                // state.adverts = set.values().next().value
  // set.add(adverts)
  // const campers =  set.values().next().value
// console.log('set', set.values().next())
  // console.log('campers', campers)
  


  return (
    <ul className={css.list}>
      {campers.length && campers.map(camper => 
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
          />  
        </li>
        )} 
    </ul>
  
  )
}

export default CatalogList