import css from "./Button.module.css"

const Button = ({ text, showColor, onClick }) => {

  return (
    <button type="button" className={showColor ? css.btn + " " + css.color : css.btn} onClick={onClick}>{text}</button>
  )
}

export default Button