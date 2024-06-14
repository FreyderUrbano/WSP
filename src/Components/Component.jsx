
export default function Component() {

    return (
        <div className="App">
            <image>
                <img className="wsp-img" src='https://th.bing.com/th/id/R.2339dde81a6aeb54b79104ce96463ed5?rik=ozbFVevME9vMeg&pid=ImgRaw&r=0' alt="logo" />
            </image>
            <nav className='nave' >
                <img className="logo-wsp" src='https://www.pngmart.com/files/23/Free-Logos-PNG-Clipart.png' alt='Logo' style={{ marginRight: '20px' }} />
                <ul className='menu'>
                    <li><a className="inicio" href="/inicio">Inicio</a></li>
                    <li><a className="planes" href="./Components/Component/planes">Planes</a></li>
                    <li><a className="ingresar" href="/ingresar">Ingresar</a></li>
                </ul>
            </nav>
            <div>
            </div>
            
        </div>
       
    )
}
