import CatalogListCard from 'components/CatalogListCard/CatalogListCard'
import css from "./Favorites.module.css"
import { useSelector } from 'react-redux'
import { favoriteSelector } from 'store/favorites/selectors'

const Favorites = () => {

  const favoriteList = useSelector(favoriteSelector)

  return (
    <section className={css.section}>
      <div className='container'>
        <ul className={css.list}>
          {favoriteList.length !== 0 &&
            favoriteList.map(favorite =>
              <li key={favorite.id} className={css.item}>
                <CatalogListCard
                  id={favorite.id}
                  name={favorite.name}
                  price={favorite.price}
                  rating={favorite.rating}
                  location={favorite.location}
                  reviews={favorite.reviews}
                  description={favorite.description}
                  details={favorite.details}
                  adults={favorite.adults}
                  children={favorite.children}
                  engine={favorite.engine}
                  transmission={favorite.transmission}
                  image={favorite.gallery[0]}
                  // favorite={favoriteList[i]?.favorite}
                />
              </li>
            )
          }
            </ul>
        
    </div>
  </section>
  )
}

export default Favorites