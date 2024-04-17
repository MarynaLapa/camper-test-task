import { Svg } from 'components/Icons/Icons'
import css from './CatalogListCard.module.css'
import List from 'components/List/List'
import Button from 'components/Button/Button'
// import CategoriesList from 'components/CategoriesList/CategoriesList'

const CatalogListCard = ({ image, transmission, engine, children, name, price, rating, reviews, location, description, details, adults, }) => {
  
  const numberOfReviews = reviews.length
  const showDescription = description.slice(0, 65)

  return (
    <div className={css.card}>
      <div className={css.image}>
        <img src={image} alt={name} width={290} height={310}/>
      </div>
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
        {/* <CategoriesList details={details}/> */}
        <List
          adults={adults}
          children={children}
          engine={engine}
          transmission={transmission}
          details={details}
        />
        <Button showColor={true} text={'Show more'}/>
      </div>
    </div>
  )
}

export default CatalogListCard