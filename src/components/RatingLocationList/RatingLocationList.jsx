import { Svg } from 'components/Icons/Icons'
import css from "./RatingLocationList.module.css"

const RatingLocationList = ({ reviews, rating, location, modal }) => {

    const numberOfReviews = reviews?.length

  return (
    <ul className={modal ? css.list + " " + css.bottom : css.list}>
      <li className={css.item}>
        <Svg id="#rating-star" width={16} height={16} />
        <p className={css.rating}>{rating} ({numberOfReviews} Reviews)</p>
      </li>
      <li className={css.item}>
        <Svg id="#location" width={16} height={16} icon={css.icon} />
        <p>{location}</p>
      </li>
    </ul>
  )
}

export default RatingLocationList