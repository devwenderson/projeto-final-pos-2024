import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav className='navbar'>
            <Link to={'/'} className="brand">
                <h1>Meu belo CRUD</h1>
            </Link>
            <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'ul open' : 'ul'}>
                <li>
                    <NavLink to={'/'}>Início</NavLink>
                </li>
                <li>
                    <NavLink to={'usuarios/'}>Usuários</NavLink>
                </li>
                <li>
                    <NavLink to={'tarefas/'}>Tarefas</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
