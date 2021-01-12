import s from "./navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => (
    <nav>
        <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>Home</NavLink>
        <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>Movies</NavLink>
    </nav>
)

export default Navigation;