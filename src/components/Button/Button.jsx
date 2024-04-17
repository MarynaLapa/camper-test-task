import css from "./Button.module.css"

const Button = ({text, showColor}) => {
  return (
    <button type="button" className={showColor ? css.btn + " " + css.color : css.btn}>{text}</button>
  )
}

export default Button