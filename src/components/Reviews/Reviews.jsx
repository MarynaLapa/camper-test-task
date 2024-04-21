import { useSelector } from "react-redux"
import { camperInfoSelector } from "store/camper/selectors"

import RatingStars from 'components/RatingStar/RatingStar'

import css from './Reviews.module.css'

const Reviews = () => {
  
  const camperInfo = useSelector(camperInfoSelector)
  const { reviews } = camperInfo

  return (
    <ul>
        {reviews.map((review, i) => (
          <li key={i} className={css.item}>
            <div className={css.wrapper}>
              <span className={css.avatar}>{review.reviewer_name?.slice(0, 1).toUpperCase()}</span>    
              <div>
                <p className={css.name}>{review.reviewer_name}</p>
                <RatingStars rating={review.reviewer_rating}/>
              </div>
            </div>
            <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  )
}

export default Reviews