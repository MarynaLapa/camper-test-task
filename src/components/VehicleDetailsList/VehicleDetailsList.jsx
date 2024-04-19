import { useSelector } from 'react-redux'
import { camperInfoSelector } from 'store/camper/selctors'

import css from './VehicleDetailsList.module.css'

const VehicleDetailsList = () => {

    const camperInfo = useSelector(camperInfoSelector)
    const { form, length, width, height, tank, consumption } = camperInfo

  return (
    <ul>
        <li className={css.item}>
            <p className={css.text}>form</p>
            <p className={css.text}>{form}</p>
        </li>
        <li className={css.item}>
            <p className={css.text}>length</p>
            <p className={css.text}>{length}</p>
        </li>
        <li className={css.item}>
            <p className={css.text}>width</p>
            <p className={css.text}>{width}</p>
        </li>
        <li className={css.item}>
            <p className={css.text}>height</p>
            <p className={css.text}>{height}</p>
        </li>
        <li className={css.item}>
            <p className={css.text}>tank</p>
            <p className={css.text}>{tank}</p>
        </li>
        <li className={css.item}>
            <p className={css.text}>consumption</p>
            <p className={css.text}>{consumption}</p>
        </li> 
    </ul>
  )
}

export default VehicleDetailsList