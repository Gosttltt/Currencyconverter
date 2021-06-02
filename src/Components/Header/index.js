import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export default function Header() {
    let pages = [
        { url: '/', name: 'Home' },
        { url: '/currencyconverter', name: 'Currency Converter' },
        { url: '/currentcourses', name: 'Current Courses' },
    ]
    let linkArr = pages.map(l => <NavLink key={l.name} to={l.url} exact activeClassName={s.active}><div>{l.name}</div></NavLink>)
    return (
        <header className={s.header}>
            {linkArr}
        </header>
    )
}