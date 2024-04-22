import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPageAdvertsThunk} from 'store/camper/camperThunk'
import CatalogList from 'components/CatalogList/CatalogList'

import css from './Catalog.module.css'
import Button from 'components/Button/Button'
import { advertsSelector, loadMoreSelector, totalSelector } from 'store/camper/selectors'
import FiltersForm from 'components/Filter/Filter'

const Catalog = () => {

  const [limit, setLimit] = useState(4)
  const [isShowButton, setIsShowButton] = useState(true)

  const dispatch = useDispatch()

  const total = useSelector(totalSelector)
  const adverts = useSelector(advertsSelector)
  const loadMore = useSelector(loadMoreSelector)

  useEffect(() => {
      
    dispatch(getPageAdvertsThunk({
      limit
    }))

}, [dispatch, limit])
    
  const hendlerClick = () => {

    if (total.length <= adverts.length + 4) {
      setLimit(limit + 4)
      setIsShowButton(false)
    } else {
      setLimit(limit + 4)
    }
  }

  return (
    <section className={css.section}>
      <div className={`container ${css.catalog}`}>
        <FiltersForm />
        <div>
          <CatalogList />
          {loadMore && isShowButton && adverts.length !== 0 &&
            <Button text={"Load more"} onClick={hendlerClick} />
          }
        </div>
      </div>
    </section>
  )
}

export default Catalog
