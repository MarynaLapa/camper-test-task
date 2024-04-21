import { Svg } from 'components/Icons/Icons'
import { ReactComponent as Ac } from '../../images/ac.svg'

import css from './List.module.css'

const List = ({ adults, children, engine, transmission, details}) => {

  return (
      <ul className={css.list}>
        <li className={css.item}>
            <Svg id="#adults" width={20} height={20} />
            <div className={css.wrapp}>
                <span className={css.number}>{adults}</span> 
                <p className={css.text}>adults</p>
            </div>
        </li>
            {children ?
                (<li className={css.item}>
                    <Svg id="#adults" width={20} height={20} />
                    <div className={css.wrapp}>
                        <span className={css.number}>{children}</span> 
                        <p className={css.text}>children</p>
                    </div>
                </li>) : null
            }
        <li className={css.item}>
            <Svg id="#automatic" width={20} height={20} />
              <p className={css.text}>{transmission}</p>
        </li>
        <li className={css.item}>
            <Svg id="#petrol" width={20} height={20} />
            <p className={css.text}>{engine}</p>
        </li>
        {details.kitchen && <li className={css.item}>
            <Svg id="#kitchen" width={20} height={20} icon={css.icon} />
            <p className={css.text}>kitchen</p>
        </li>}
        <li className={css.item}>
            <Svg id="#beds" width={20} height={20} icon={css.icon}/>
            <div className={css.wrapp}>
                <span className={css.number}>{details.beds}</span> 
                <p className={css.text}>beds</p>
            </div>
        </li>
        {details.airConditioner && <li className={css.item}>
            <Ac width={20} height={20} />
            <p className={css.text}>AC</p>
        </li>}
    </ul>
  )
}

export default List