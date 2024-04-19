import css from "./CategoriesList.module.css"
import { ReactComponent as Ac } from '../../images/ac.svg'
import { Svg } from "components/Icons/Icons";
import { useSelector } from "react-redux";
import { camperInfoSelector } from "store/camper/selctors";

const CategoriesList = () => {

  const camperInfo = useSelector(camperInfoSelector)
  const { details, adults, children, transmission, engine } = camperInfo
           
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <Svg id="#adults" width={20} height={20} />
        <div className={css.wrapp}>
            <span className={css.number}>{adults}</span> 
            <p className={css.text}>adults</p>
        </div>
      </li>

      {children &&
        <li className={css.item}>
          <Svg id="#adults" width={20} height={20} />
          <div className={css.wrapp}>
              <span className={css.number}>{children}</span> 
              <p className={css.text}>children</p>
          </div>
        </li>
      }

      <li className={css.item}>
        <Svg id="#automatic" width={20} height={20} />
        <p className={css.text}>{transmission}</p>
      </li>
      
      <li className={css.item}>
        <Svg id="#petrol" width={20} height={20} />
        <p className={css.text}>{engine}</p>
      </li>

      {details?.airConditioner !== 0 &&
        <li className={css.item}>
            <Ac width={20} height={20} />
            <p className={css.text}>AC</p>
        </li>
      }

      {details?.beds !== 0 &&
        <li className={css.item}>
          <Svg id="#beds" width={20} height={20} icon={css.icon} />
          <div className={css.wrapp}>
            <span className={css.number}>{details?.beds}</span> 
            <p className={css.text}>beds</p>
          </div>
        </li>
      }

      {details?.TV !== 0 && 
        (<li className={css.item}>
          <Svg id="#TV" width={20} height={20} icon={css.icon} />
          <p className={css.text}>TV</p>
        </li>) 
      }

      {details?.bathroom !== 0 &&
        <li className={css.item}> 
          <Svg id="#bathroom" width={20} height={20} icon={css.icon} />
          <p className={css.text}>bathroom</p>
        </li>
      }

      {details?.kitchen !== 0 && <li className={css.item}>
        <Svg id="#kitchen" width={20} height={20} icon={css.icon} />
        <p className={css.text}>kitchen</p>
      </li>
      }
       
      {details?.radio !== 0 &&
        <li className={css.item}>
          <Svg id="#radio" width={20} height={20} icon={css.icon} />
          <p className={css.text}>radio</p>
        </li>
      }
      
       {details?.CD !== 0 &&
        <li className={css.item}>
          <Svg id="#CD" width={20} height={20} icon={css.icon} />
          <p className={css.text}>CD</p>
        </li>
      }
      
      {details?.shower !== 0 &&
        <li className={css.item}>
          <Svg id="#shower" width={20} height={20} icon={css.icon} />
          <p className={css.text}>shower</p>
        </li>
      }

      {details?.toilet !== 0 &&
        <li className={css.item}>
          <Svg id="#toilet" width={20} height={20} icon={css.icon} />
          <p className={css.text}>toilet</p>
        </li>
      }

      {details?.freezer !== 0 &&
        <li className={css.item}>
          <Svg id="#freezer" width={20} height={20} icon={css.icon} />
          <p className={css.text}>freezer</p>
        </li>
      }

      {details?.hob !== 0 &&
        <li className={css.item}>
          <Svg id="#hob" width={20} height={20} icon={css.icon} />
          <div className={css.wrapp}>
            <span className={css.number}>{details?.hob}</span> 
            <p className={css.text}>hob</p>
          </div>
        </li>
      }

      {details?.microwave !== 0 &&
        <li className={css.item}>
          <Svg id="#microwave" width={20} height={20} icon={css.icon} />
          <p className={css.text}>microwave</p>
        </li>
      }

      {details?.gas !== 0 &&
        <li className={css.item}>
          <Svg id="#gas" width={20} height={20} icon={css.icon} />
          <div className={css.wrapp}>
            <span className={css.number}>{details?.gas}</span> 
            <p className={css.text}>gas</p>
          </div>
        </li>
      }

      {details?.water !== 0 &&
        <li className={css.item}>
          <Svg id="#water" width={20} height={20} icon={css.icon} />
          <div className={css.wrapp}>
            <span className={css.number}>{details?.water}</span> 
            <p className={css.text}>water</p>
          </div>
        </li>
      }

    </ul>
  )
}

export default CategoriesList
