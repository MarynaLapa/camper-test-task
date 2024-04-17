import { Svg } from 'components/Icons/Icons'
import css from './List.module.css'

const List = ({ adults, children, engine, transmission}) => {
    console.log('adults', adults)
    console.log('children', children)
    console.log('engine', engine)
    console.log('transmission', transmission)

  return (
      <ul className={css.list}>
          <li>
              <Svg id="#adults" width={20} height={20} />
              <p className={css.text}></p>
          </li>
          <li>
              <Svg id="#adults" width={20} height={20} />
          </li>
          <li>
              <Svg id="#automatic" width={20} height={20} />
          </li>
          <li>
              <Svg id="#petrol" width={20} height={20}/>
          </li>
      {/* {listDetails.map((el, i) =>  */}
          {/* el[1] ? (
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
        : null */}
      {/* )} */}
    </ul>
  )
}

export default List