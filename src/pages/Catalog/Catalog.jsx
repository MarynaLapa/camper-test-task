import AsideFilter from 'components/AsideFilter/AsideFilter'
import CatalogList from 'components/CatalogList/CatalogList'

import css from './Catalog.module.css'

const Catalog = () => {
  return (
    <section>
      <div className={`container ${css.catalog}`}>
        <AsideFilter />
        <CatalogList />
      </div>
    </section>
  )
}

export default Catalog