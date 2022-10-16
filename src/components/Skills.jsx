import '../style/skills.css'
import htmlImg from '../assets/skills/iconhtml.svg'
import cssImg from '../assets/skills/iconcss.svg'
import jsImg from '../assets/skills/iconjs.svg'
import bootsImg from '../assets/skills/iconbootstrap.svg'
import reactImg from '../assets/skills/react.svg'


const set__skills = [
    {
        id: 1,
        src: htmlImg,
    },
    {
        id: 2,
        src: cssImg,
    },
    {
        id: 3,
        src: bootsImg,
    },
    {
        id: 4,
        src: jsImg,
    },
    {
        id: 5,
        src: reactImg,
    },
]


function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="section__text">
                    <h2>Habilidades</h2>
                </div>
                <div className="cont__skills">
                    {
                        set__skills.map(item => (
                            <div className="skill " key={item.id}>
                                <img src={item.src} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Skills