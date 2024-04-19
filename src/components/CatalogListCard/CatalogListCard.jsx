import { Svg } from 'components/Icons/Icons'
import css from './CatalogListCard.module.css'
import List from 'components/List/List'
import Button from 'components/Button/Button'
import { useState } from 'react'
import Advert from 'components/Advert/Advert'
import { useDispatch } from 'react-redux'
import { getCamperInfoThunk } from 'store/camper/camperThunk'
import RatingLocationList from 'components/RatingLocationList/RatingLocationList'

const CatalogListCard = ({ id, image, transmission, engine, children, name, price, rating, reviews, location, description, details, adults, }) => {
  
  const [showModal, setShowModal] = useState(false) 

  const showDescription = description.slice(0, 65)

  const dispatch = useDispatch()

  const handlerClick = () => {
    dispatch(getCamperInfoThunk(id))
    .unwrap()
      .then((payload) => {
        setShowModal(true)
        // Notify.success("You have successfully exited")
       })
      .catch((error) => {
        // Notify.failure("Something went wrong with your logout!")
    })

  }

  const handlerClose = () => {
    setShowModal(false)
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
        <RatingLocationList
          rating={rating}
          reviews={reviews}
          location={location}
        />
        <p className={css.description}>{showDescription}...</p>
        <List
          adults={adults}
          children={children}
          engine={engine}
          transmission={transmission}
          details={details}
        />
        <Button showColor={true} text={'Show more'} onClick={handlerClick}/>
      </div>
      <Advert active={showModal} onClose={handlerClose} />
    </div>
  )
}

export default CatalogListCard