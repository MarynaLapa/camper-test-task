import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import '../../index'

function Header() {
  return (
      <header className={style.header}>
        <div className="container">
              <nav className={style.navList}>
                    <div className={style.wrapper}>
                        <img src="./logo.png" alt="Logo" width={50} height={50} className={style.logo} />
                        <span className={style.span}>Camper in UKRAINE</span> 
                    </div>
                <ul className={style.list}>
                    <li>
                        <NavLink to="/" className={style.link}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalog" className={style.link}>Catalog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorites" className={style.link}>Favorites</NavLink>
                    </li>  
                </ul>
            </nav>
        </div>      
      </header>
  )
}

export default Header