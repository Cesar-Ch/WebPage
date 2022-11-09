import '../style/skills.css'
import htmlImg from '../assets/skills/iconhtml.svg'
import cssImg from '../assets/skills/iconcss.svg'
import jsImg from '../assets/skills/iconjs.svg'
import bootsImg from '../assets/skills/iconbootstrap.svg'
import reactImg from '../assets/skills/react.svg'
import tailwindImg from '../assets/skills/icontailwindcss.svg'
import gitImg from '../assets/skills/icongit.svg'
import viteImg from '../assets/skills/iconvite.svg'


const set__skills = [
    {
        id: 1,
        src: htmlImg,
        language: 'Html'
    },
    {
        id: 2,
        src: cssImg,
        language: 'Css'
    },
    {
        id: 3,
        src: bootsImg,
        language: 'Bootstrap'
    },
    {
        id: 4,
        src: jsImg,
        language: 'Javascript'
    },
    {
        id: 5,
        src: reactImg,
        language: 'React'
    },
    {
        id: 6,
        src: tailwindImg,
        language: 'TailwindCss'
    },
    {
        id: 7,
        src: viteImg,
        language: 'Vite'

    },
    {
        id: 8,
        src: gitImg,
        language: 'Git'
    }
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
                            <div className='skill' key={item.id}>
                                <div>
                                    <img src={item.src} alt="" />
                                </div>
                                <h4>{item.language}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Skills