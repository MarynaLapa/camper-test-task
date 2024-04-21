import { Svg } from 'components/Icons/Icons';
import css from './RatingStar.module.css'

const RatingStars = ({ rating }) => {

    const yellowStars = Math.floor(rating);
    const stars = 5 - yellowStars;

    return (
        <ul className={css.list}>
            {[...Array(yellowStars)].map((el, i) => 
                <li key={i}>
                    <Svg id="#rating-star" width={16} height={16} icon={css.icon} />
                </li>
            )}
            {[...Array(stars)].map((el, i) => 
                <li key={i}>
                    <Svg id="#star" width={18} height={18} icon={css.icon} />
                </li> 
            )}
        </ul>
    );
};

export default RatingStars;