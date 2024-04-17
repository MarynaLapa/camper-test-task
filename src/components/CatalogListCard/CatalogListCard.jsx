import { Svg } from 'components/Icons/Icons'
import css from './CatalogListCard.module.css'
import CategoriesList from 'components/CategoriesList/CategoriesList'

const CatalogListCard = ({ name, price, rating, reviews, location, description, details}) => {
  
  const numberOfReviews = reviews.length
  const showDescription = description.slice(0, 65)

  return (
    <div className={css.card}>
      <div className={css.image}></div>
      <div className={css.cardInfo}>
        <div className={css.position}>
           <h2 className={css.titlePrice}>{name}</h2>
            <div className={css.positionPrice}>
              <p className={css.titlePrice}><span>&#8364;</span>{price},00</p>
              <button className={css.btn} type="button">
                <Svg id="#not-favorite" width={24} height={24} icon={css.icon} />
              </button>
            </div>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <Svg id="#rating-star" width={16} height={16} />
            <p className={css.rating}>{rating} ({numberOfReviews} Reviews)</p>
          </li>
          <li className={css.item}>
            <Svg id="#location" width={16} height={16} icon={css.icon} />
            <p>{location}</p>
          </li>
        </ul>
        <p className={css.description}>{showDescription}...</p>
        <CategoriesList details={details}/>
      </div>
    </div>
  )
}

export default CatalogListCard