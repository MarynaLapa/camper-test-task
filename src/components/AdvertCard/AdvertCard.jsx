import { useSelector } from 'react-redux';
import { camperInfoSelector } from 'store/camper/selctors';
import RatingLocationList from 'components/RatingLocationList/RatingLocationList'

import css from "./AdvertCard.module.css"

const AdvertCard = () => {

    const camperInfo = useSelector(camperInfoSelector)
    console.log('camperInfo', camperInfo)
    // const { reviews, rating, location } = camperInfo

    return (
        <>
            {camperInfo ?
                (<div className={css.wrapp}>
                    <RatingLocationList modal={true}
                        rating={camperInfo.rating}
                        reviews={camperInfo.reviews}
                        location={camperInfo.location}
                    />
                </div>)
                : null}
        </>
       
    )
}

export default AdvertCard