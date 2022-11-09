import AboutImg from '../assets/about.svg'
import '../style/about.css'


function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="section__text">
                    <h2>Sobre mi</h2>
                </div>
                <div className="cont__about">
                    <article className="about__article">
                        <img src={AboutImg} alt="" />
                    </article>
                    <aside className="about__aside">
                        <p>Hola soy César, Desarrollador web.</p>
                        <p>Soy un apasionado de la tecnología en general, me gusta aprender continuamente, hagamos proyectos increibles juntos.</p>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default About