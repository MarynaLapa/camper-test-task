import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPageAdvertsThunk} from 'store/camper/camperThunk'
import AsideFilter from 'components/AsideFilter/AsideFilter'
import CatalogList from 'components/CatalogList/CatalogList'

import css from './Catalog.module.css'
import Button from 'components/Button/Button'
import { advertsSelector, totalSelector } from 'store/camper/selctors'

const Catalog = () => {

  const [limit, setLimit] = useState(4)

  const dispatch = useDispatch()

  const total = useSelector(totalSelector)
  const adverts = useSelector(advertsSelector)
  
  useEffect(() => {
      
    dispatch(getPageAdvertsThunk({
      limit
    }))

}, [dispatch, limit])
    
  const hendlerClick = () => {

    if (total.length >= adverts.length) {
        setLimit(limit+4)
    }
  }

  return (
    <section className={css.section}>
      <div className={`container ${css.catalog}`}>
        <AsideFilter />
        <div>
          <CatalogList />
          <Button text={"Load more"} onClick={hendlerClick} />
        </div>
      </div>
    </section>
  )
}

export default Catalog