import css from "./CategoriesList.module.css"
import Icons from '../../images/icons.svg';

const CategoriesList = ({ details }) => {

  const listDetails = Object.entries(details)
  
  return (
    <ul className={css.list}>
      {listDetails.map((el, i) => 
          el[1] ? (
            <li key={i} className={css.item}>
              <svg className={css.icon} width="20" height="20">
                <use href={Icons + `#${el[0]}`}></use>
              </svg>
            {el[1] === 1 ?
              (<p className={css.text}>{el[0]}</p>)
              : (<div className={css.wrapp}>
                  <span className={css.number}>{el[1]}</span> 
                  <p className={css.text}>{el[0]}</p>
                </div>)
              }
          </li>)
        : null
      )}
    </ul>
  )
}

export default CategoriesList