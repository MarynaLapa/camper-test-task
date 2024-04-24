import { useSelector } from 'react-redux';
import { camperInfoSelector } from 'store/camper/selectors';
import RatingLocationList from 'components/RatingLocationList/RatingLocationList'
import css from "./AdvertCard.module.css"
import GalleryList from 'components/GalleryList/GalleryList';
import { Svg } from 'components/Icons/Icons';
import { useState } from 'react';
import Features from 'components/Features/Features';
import Form from 'components/Form/Form';
import Reviews from 'components/Reviews/Reviews';

const AdvertCard = ({ onClose }) => {

    const [showFeatures, setShowFeatures] = useState(false)
    const [showReviews, setShowReviews] = useState(false)
    const [hidden, setHidden] = useState(false)
    const camperInfo = useSelector(camperInfoSelector)
    const { id, reviews, rating, location, name, price, gallery, description } = camperInfo

    const hadlerClick = (e) => {

        setHidden(true)

        switch (e.target.dataset.action) {
            case "Features":
                setShowFeatures(true)
                setShowReviews(false)
                break
            
            case "Reviews": 
                setShowFeatures(false)
                setShowReviews(true)
                break;
            
            default:
                return;
        }

    }

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
                <p className={css.titlePrice + ' ' + css.bottom}><span>&#8364;</span>{price?.toFixed(2)}</p>
                <div className={css.scroll}>
                    <GalleryList
                        gallery={gallery}
                        name={name}
                        id={id}
                    />
                    <p className={css.description}>{description}</p>
                </div>
                <ul className={css.list} onClick={hadlerClick}>
                    <li>
                        <button type="button" className={showFeatures ? `active ${css.button}` : css.button} data-action="Features">Features</button> 
                    </li>
                    <li>
                        <button type="button" className={showReviews ? `active ${css.button}` : css.button}  data-action="Reviews">Reviews</button>
                    </li>
                </ul>

                {hidden &&
                    <div className={css.position}>
                        {showFeatures &&
                            <Features active={true}/>
                        }
                        {showReviews &&
                            <Reviews active={true}/>
                        }
                        <div className={css.form}>
                            <Form onClose={onClose} />
                        </div>
                    </div>
                } 
        </div>) : null}
    </>
    )
}

export default AdvertCard