import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPageAdvertsThunk} from 'store/camper/camperThunk'
import { advertsSelector, loadMoreSelector } from 'store/camper/selectors'

import Button from 'components/Button/Button'
import FiltersForm from 'components/Filter/Filter'
import CatalogList from 'components/CatalogList/CatalogList'

import css from './Catalog.module.css'

const Catalog = () => {

  const limit = 4;
  const [page, setPage] = useState(1)

  const dispatch = useDispatch()

  // const total = useSelector(totalSelector)
  const adverts = useSelector(advertsSelector)
  const loadMore = useSelector(loadMoreSelector)

  useEffect(() => {

    dispatch(getPageAdvertsThunk({
      page,
      limit
    }))
       
}, [dispatch, page, limit])

  const hendleClick = () => {
    setPage(page + 1)
  }

  return (
    <section className={css.section}>
      <div className={`container ${css.catalog}`}>
        <FiltersForm />
        <div>
          <CatalogList />
          {loadMore && adverts.length !== 0 &&
            <Button text={"Load more"} onClick={hendleClick} />
          }
        </div>
      </div>
    </section>
  )
}

export default Catalog
