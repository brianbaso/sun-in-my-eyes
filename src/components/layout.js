import * as React from 'react'
import { Link } from 'gatsby'
import '../index.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className="container">
            <header className="site-title">Sun In My Eyes</header>
            <nav>
                <ul className="nav-links">
                    <li className="nav-link-item">
                        <Link to="/" className="nav-link-text">
                            Home
                        </Link>
                    </li>
                    <li className="nav-link-item">
                        <Link to="/about" className="nav-link-text">
                            About
                        </Link>
                    </li>
                    <li className="nav-link-item">
                        <Link to="/blog" className="nav-link-text">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className="heading">{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout