import css from './CatalogListCard.module.css'

const CatalogListCard = ({ name, price}) => {
  return (
    <div className={css.card}>
        <div className={css.image}></div>
        <div className={css.cardInfo}>
          <h2 className={css.titlePrice}>{name}</h2>
          <p className={css.titlePrice}><span>&#8364;</span>{price},00</p>
          <button className={css.icon}type="button">

          </button>
        </div>
    </div>
  )
}

export default CatalogListCard