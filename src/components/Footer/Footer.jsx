import css from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
      <div className={css.wrapper}>
        <img src="./logo.png" alt="Logo" width={70} height={70} className={css.logo} />
        <h1 className={css.logoText}>Camper in UKRAINE</h1> 
      </div>
        <p></p>
      </div>
    </footer>
  )
}

export default Footer