import { useSelector } from 'react-redux';
import { camperInfoSelector } from 'store/camper/selctors';
import RatingLocationList from 'components/RatingLocationList/RatingLocationList'

import css from "./AdvertCard.module.css"
import GalleryList from 'components/GalleryList/GalleryList';
import { Svg } from 'components/Icons/Icons';
// import { useState } from 'react';
import Features from 'components/Features/Features';

const AdvertCard = ({ onClose }) => {

    // const [hidden, setHidden] = useState(false)

    const camperInfo = useSelector(camperInfoSelector)
    const { id, reviews, rating, location, name, price, gallery, description } = camperInfo

    return (
        <>
            {camperInfo ? (<div className={css.wrapp}>
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
                        id={id}
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

                <div className={css.position}>
                    <Features />
                    <div className={css.form}></div>
                </div>
            </div>) : null}
    </>
    )
}

export default AdvertCard