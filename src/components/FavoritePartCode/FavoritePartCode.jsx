import { useDispatch, useSelector } from 'react-redux'

import { Svg } from 'components/Icons/Icons'
import { ReactComponent as Favorite } from '../../images/favorite.svg'

import { advertsSelector } from 'store/camper/selectors'
import { toggleFavorite } from 'store/favorites/favoritesSlice'
import { favoriteSelector } from 'store/favorites/selectors'

import css from './FavoritePartCode.module.css'

const FavoritePartCode = ({name, price, id }) => {

    const adverts = useSelector(advertsSelector)
    const favoriteList = useSelector(favoriteSelector)
 
    const dispatch = useDispatch()
   
    const handlerToggle = () => {

        const findAdvert = adverts.find(element => element.id === id)
        dispatch(toggleFavorite(findAdvert))
        
    }

    return (
        <div className={css.position}>
            <h2 className={css.titlePrice}>{name}</h2>
            <div className={css.positionPrice}>
                <p className={css.titlePrice}><span>&#8364;</span>{price.toFixed(2)}</p>
                {favoriteList?.findIndex(el => el.id === id ) === -1 &&
                    <button className={css.btn} type="button" onClick={handlerToggle} id={id}>
                        <Svg id="#not-favorite" width={24} height={24} icon={css.icon} />
                    </button>
                }  
                {favoriteList?.findIndex(el => el.id === id ) !== -1 &&
                    <button className={css.button} type="button" onClick={handlerToggle}>
                        <Favorite icon={css.icon} />
                    </button>
                } 
                
            </div>
        </div>
    )
}

export default FavoritePartCode
