
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Sofia Hosken</span>
            </Link>
            <nav>
                <Link to="/">Prova</Link>
                <Link to="/sobre">B</Link>
                <Link to="/projetos">Turma</Link>
                <Link to="/contatos">3c2</Link>
            </nav>
        </header>
    )    
}

export default Header
