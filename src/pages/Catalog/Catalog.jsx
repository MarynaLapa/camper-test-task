import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPageAdvertsThunk } from 'store/camper/camperThunk'
import AsideFilter from 'components/AsideFilter/AsideFilter'
import CatalogList from 'components/CatalogList/CatalogList'

import css from './Catalog.module.css'
import Button from 'components/Button/Button'
import { totalSelector } from 'store/camper/selctors'

const Catalog = () => {

  let limit = 4
  const [page, setPage] = useState(1)
  const [showMore, setShowMore] = useState(true)

  const dispatch = useDispatch()

  const total = useSelector(totalSelector)
  
  useEffect(() => {

    dispatch(getPageAdvertsThunk({
      limit, 
      page
    }))

  }, [dispatch, limit, page])
  
  const hendlerClick = () => {

    if (total.length - limit*page > limit) {
      setPage(page + 1)
      setShowMore(true)
    } else {
      setShowMore(false)
      // setPage(1)
    }
  }

  return (
    <section className={css.section}>
      <div className={`container ${css.catalog}`}>
        <AsideFilter />
        <div>
          <CatalogList />
          {showMore && <Button text={"Load more"} onClick={hendlerClick} />}
        </div>
      </div>
    </section>
  )
}

export default Catalog