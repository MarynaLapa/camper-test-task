import { Svg } from 'components/Icons/Icons'
import css from './FavoritePartCode.module.css'
import { ReactComponent as Favorite } from '../../images/favorite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { advertsSelector } from 'store/camper/selctors'
import { toggleFavorite } from 'store/favorites/favoritesSlice'
// import { favoriteSelector } from 'store/favorites/selectors'
import { useState } from 'react'

const FavoritePartCode = ({name, price, id }) => {
    
    const [favorite, setFavorite] = useState(false)

    const adverts = useSelector(advertsSelector)
    // const favoriteList = useSelector(favoriteSelector)
    const dispatch = useDispatch()
    
    // for (let i = 0; i < favoriteList.length; i += 1){
    //     const index = adverts.findIndex(element => element.id === favoriteList[i].id)

    // }
   
    const handlerToggle = () => {

        const findAdvert = adverts.find(element => element.id === id)
        dispatch(toggleFavorite(findAdvert))
        
        if (!favorite) {
            setFavorite(true)
        } else {
            setFavorite(false)
        }
       
        // const index = adverts.findIndex(element => element.id === findAdvert.id)
        // if (index !== -1) {
        //     let favorite = true
        // } 
    }

    return (
        <div className={css.position}>
            <h2 className={css.titlePrice}>{name}</h2>
            <div className={css.positionPrice}>
                <p className={css.titlePrice}><span>&#8364;</span>{price},00</p>
                {!favorite &&
                    <button className={css.btn} type="button" onClick={handlerToggle} id={id}>
                        <Svg id="#not-favorite" width={24} height={24} icon={css.icon} />
                    </button>
                } 
                {favorite &&
                    <button className={css.button} type="button" onClick={handlerToggle}>
                        <Favorite icon={css.icon} />
                    </button>
                }
                
            </div>
        </div>
    )
}

export default FavoritePartCode