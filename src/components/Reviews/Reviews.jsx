import css from './Reviews.module.css'

import { Svg } from "components/Icons/Icons"
import { useSelector } from "react-redux"
import { camperInfoSelector } from "store/camper/selectors"

const Reviews = () => {
  
  const camperInfo = useSelector(camperInfoSelector)
  const { reviews } = camperInfo

  console.log(' reviewer_rating', reviews)
  return (
    <ul>
        {reviews.map((review, i) => (
          <li key={i} className={css.item}>
            <div className={css.wrapper}>
              <span className={css.avatar}>{review.reviewer_name?.slice(0, 1).toUpperCase()}</span>    
              <div>
                <p className={css.name}>{review.reviewer_name}</p>
                <Svg id="#rating-star" width={16} height={16} />
              </div>
            </div>
            <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  )
}

export default Reviews