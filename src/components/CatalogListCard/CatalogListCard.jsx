import { Svg } from 'components/Icons/Icons'
import css from './CatalogListCard.module.css'
import List from 'components/List/List'
import Button from 'components/Button/Button'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Advert from 'components/Advert/Advert'
// import CategoriesList from 'components/CategoriesList/CategoriesList'

const CatalogListCard = ({ id, image, transmission, engine, children, name, price, rating, reviews, location, description, details, adults, }) => {
  
  const [showModal, setShowModal] = useState(false) 

  const numberOfReviews = reviews.length
  const showDescription = description.slice(0, 65)

  const navigate = useNavigate()

  const handlerClick = () => {
    navigate('catalog/:catalogId')
  }

  const handlerClose = () => {
    setShowModal(!showModal)
  }
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
        <Link to={`/adverts/${id}`} state={{ from: location }} onClick={handlerClick}>Show more</Link>
        {/* <Button showColor={true} text={'Show more'} onClick={handlerClick}/> */}
      </div>
      <Advert active={showModal} onClose={handlerClose}>
        <div style={{ width: 200, height: 200, background: "#fff"}} ></div>
      </Advert>
    </div>
  )
}

export default CatalogListCard