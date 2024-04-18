import { Svg } from 'components/Icons/Icons'
import css from './VehicleTypeList.module.css'

const VehicleTypeList = () => {
  return (
    <ul className={css.list}>
        <li>
            <button type="button">
                <Svg id="#van" width={40} height={28} />
                <span>Van</span>
            </button>
        </li>
        <li>
            <button type="button">
                <Svg id="#van" width={40} height={28} />
                <span>Fully Integrated</span>
            </button>
        </li>
        <li>
            <button type="button">
                <Svg id="#van" width={40} height={28} />
                <span>Alcove</span>
            </button>
        </li>
    </ul>
  )
}

export default VehicleTypeList