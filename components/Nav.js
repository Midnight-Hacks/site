import navStyles from '../styles/Nav.module.css';
import { NextRouter, withRouter } from 'next/router';
import Link from 'next/link';

const routes = [
    { name: 'About', href: '#about', current: false },
    { name: 'Sponsors', href: '#sponsors', current: false },
    { name: 'Prizes', href: '#prizes', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }  

const Nav = ({ router }) => {
    return (
        <nav className={`relative bg-charcoal-black navbar ${navStyles.navbar}`}>
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                        className={`inline-block whitespace-nowrap text-white ${navStyles.logo}`}
                        href="/"
                    >
                        <span className={`object-scale-down ${navStyles.logo}`}>Midnight Hacks</span>
                    </a>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center flex"
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        {routes.map((route, index) => (
                            <li className="nav-item" key={index}>
                                <Link
                                href={route.href}
                                className="px-3 py-2 flex items-center text-base leading-snug text-white hover:opacity-75">
                                    <a className={classNames(router.pathname == route.href ? 'bg-white text-black' : 'text-white hover:opacity-75', "px-3 py-2 flex items-center text-base leading-snug rounded-xl")}>
                                        <span>{route.name}</span>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(Nav);