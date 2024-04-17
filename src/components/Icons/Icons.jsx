import Icons from '../../images/icons.svg'

export const Svg = ({id, width, height, icon}) => {

  return (
    <svg width={width} height={height} className={icon}>
        <use href={Icons + id}></use>
    </svg>
  )
}

