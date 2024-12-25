import { Link, NavLink } from "react-router-dom";
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to={'/'}>
                <h1>Meu belo CRUD</h1>
            </Link>
            <ul className={styles.ul}>
                <li>
                    <NavLink to={'/'}>Início</NavLink>
                </li>
                <li>
                    <NavLink to={'usuarios/'}>Usuários</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
