import { useSelector } from 'react-redux';
import { camperInfoSelector } from 'store/camper/selctors';
import RatingLocationList from 'components/RatingLocationList/RatingLocationList'

import css from "./AdvertCard.module.css"
import GalleryList from 'components/GalleryList/GalleryList';
import { Svg } from 'components/Icons/Icons';
import { useState } from 'react';

const AdvertCard = ({onClose}) => {

    const [hidden, setHidden] = useState(false)

    const camperInfo = useSelector(camperInfoSelector)
    const { reviews, rating, location, name, price, gallery, description } = camperInfo

    return (
      
        <div className={css.wrapp}>
            <h2 className={css.titlePrice}>{name}</h2>
            <button className={css.btn} type="button" onClick={onClose}>
                <Svg id="#close" width={32} height={32} icon={css.icon} />
            </button>
            <RatingLocationList modal={true}
                rating={rating}
                reviews={reviews}
                location={location}
            />
            <p className={css.titlePrice + ' ' + css.bottom}><span>&#8364;</span>{price},00</p>
            <div className={css.scroll}>
                <GalleryList 
                    gallery={gallery}
                    name={name}
                />
                <p className={css.description}>{description}</p>
            </div>
            <ul className={css.list}>
                <li>
                    <button type="button" className={css.button}>Features</button>
                </li>
                <li>
                    <button type="button" className={css.button}>Reviews</button>
                </li>
            </ul>
            <hr className={css.hr} />
            <div className={css.position}>
                <div className={css.features}></div>
                <div className={css.form}></div>
            </div>
        </div>
    
    )
}

export default AdvertCard