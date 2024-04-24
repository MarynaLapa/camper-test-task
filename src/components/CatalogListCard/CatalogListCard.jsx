import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCamperInfoThunk } from 'store/camper/camperThunk'
import { Notify } from 'notiflix'
import css from './CatalogListCard.module.css'
import List from 'components/List/List'
import Button from 'components/Button/Button'
import RatingLocationList from 'components/RatingLocationList/RatingLocationList'
import FavoritePartCode from 'components/FavoritePartCode/FavoritePartCode'
import Modal from 'components/Modal/Modal'
import AdvertCard from 'components/AdvertCard/AdvertCard'

const CatalogListCard = ({
  id,
  image,
  transmission,
  engine,
  children,
  name,
  price,
  rating,
  reviews,
  location,
  description,
  details,
  adults }) => {

  const [showModal, setShowModal] = useState(false) 

  const showDescription = description.slice(0, 65)

  const dispatch = useDispatch()

  const handlerClick = () => {
    dispatch(getCamperInfoThunk(id))
    .unwrap()
      .then((payload) => {
        setShowModal(true)
       })
      .catch((error) => {
        Notify.failure("Something wrong!")
    })
  }

  return (
    <div className={css.card}>
      <div className={css.image}>
        <img src={image} alt={name} width={290} height={310}/>
      </div>
      <div className={css.cardInfo}>
        <FavoritePartCode 
          name={name}
          price={price}
          id={id}
        />
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
       <Modal active={showModal} onClose={()=> setShowModal(false)}>
           <AdvertCard onClose={()=> setShowModal(false)} />
        </Modal>
    </div>
  )
}

export default CatalogListCard