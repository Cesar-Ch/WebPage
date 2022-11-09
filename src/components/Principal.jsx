import '../style/principal.css'
import programming from '../assets/principal.svg'


function Principal() {
    return (
        <main>
            <div className=" container">
                <div className="cont__main">
                    <div className="main__text">
                        <h1>César Chafloque</h1>
                        <h3>Desarrollador Web</h3>
                    </div>
                    <img src={programming} alt="Programming" className='img__main' />
                </div>
            </div>
            <div style={{ height: '150px', overflow: 'hidden', marginTop: '-100px' }} >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}><path d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: 'var(--light-color-secundary)' }}></path></svg>
            </div>
        </main>
    )
}

export default Principal