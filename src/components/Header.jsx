import { useEffect, useRef } from 'react'
import logo from '../assets/logo.svg';
import '../style/header.css'

const nav__links = [
    {
        path: '#',
        link: 'Inicio'
    },
    {
        path: '#about',
        link: 'Sobre mi'
    },
    {
        path: '#skills',
        link: 'Habilidades'
    },
    {
        path: '#portfolio',
        link: 'Portafolio'
    },
    {
        path: '#contact',
        link: 'Contacto'
    },
]

function Header() {

    const headerRef = useRef(null)

    const menuRef = useRef(null)

    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('header2')
            headerRef.current.classList.remove('header1')

        } else {
            headerRef.current.classList.add('header1')
            headerRef.current.classList.remove('header2')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', headerFunc);
    }, [])

    const toggleMenu = () => {
        menuRef.current.classList.toggle('botoneraOpen')
    }

    const body = document.body;
    const light = 'light';
    const dark = 'dark-theme';
    let theme

    if(localStorage){
        theme = localStorage.getItem('theme')
    }

    if(theme  === light || theme === dark){
        body.classList.add(theme)
    } else{
        body.classList.add(light)
    }

    const switchTheme = () =>{
        if(theme === dark){
            body.classList.replace(dark,light);
            localStorage.setItem('theme','light');
            theme = light
        } else {
            body.classList.replace(light,dark);
            localStorage.setItem('theme','dark-theme')
            theme = dark
        }
    }


    return (
        <header className="header1" ref={headerRef}>
            <div className="container">
                <div className="cont__header" >
                    <div className="img__header" >
                        <img src={logo} alt="Logo" />
                    </div>
                    <nav className="botonera" ref={menuRef}>
                        <ul>
                            {
                                nav__links.map((item, index) => (
                                    <li key={index} className='li__header'>
                                        <a href={item.path} className="link__header">
                                            {item.link}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <div className="menu">
                        <div className="switch" onClick={switchTheme}>
                            <div className="ball"></div>
                            <div className="ball--two"></div>
                        </div>
                        <div className="bars--menu" onClick={toggleMenu}>
                            <span className="line1--bars"></span>
                            <span className="line2--bars"></span>
                            <span className="line3--bars"></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header