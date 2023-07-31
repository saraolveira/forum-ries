import { useState } from 'react'
import Circulos from "./Circulos.jsx"

const Hero23 = () => {
    const [fondo, setFondo] = useState(null)

    const handleLongevidad = () => {
        if (fondo === 'Longevidad') {
            setFondo(null)
        } else {
            setFondo('Longevidad')
        }
    }

    const handleBiotech = () => {
        if (fondo === 'Biotech') {
            setFondo(null)
        } else {
            setFondo('Biotech')
        }
    }

    const handleOnehealth = () => {
        if (fondo === 'Onehealth') {
            setFondo(null)
        } else {
            setFondo('Onehealth')
        }
    }

    const handleIA = () => {
        if (fondo === 'IA') {
            setFondo(null)
        } else {
            setFondo('IA')
        }
    }


    return (<div id="hero23">
        <div id="datos">
            <svg id="icono-23" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_706_47)">
                <path d="M69.1 30.1C64.4 30.1 60.5 33.8 60.3 38.4C60.3 41.8 57.5 44.6 54.1 44.6C50.7 44.6 47.9001 41.8 47.9001 38.4C47.7001 35.4 46.1001 32.8 43.7001 31.4C46.2001 29.8 47.9001 27.1 47.9001 23.9C47.9001 20.7 46.3001 18.1 43.9001 16.5C46.6001 15 48.4001 12.1 48.4001 8.8C48.4001 3.9 44.4 0 39.6 0C34.8 0 30.8 4 30.8 8.8C30.8 13.6 34.5 17.3 39.1 17.6C42.5 17.6 45.3 20.4 45.3 23.9C45.3 27.4 42.5 30.1 39.1 30.1C35.7 30.1 33.1 31.8 31.6 34.3C30 31.8 27.3001 30.1 24.1 30.1C20.9 30.1 18.1 31.8 16.6 34.3C15 31.8 12.3 30.1 9.10005 30.1C4.20005 30.1 0.300049 34.1 0.300049 38.9C0.300049 43.7 4.30005 47.7 9.10005 47.7C13.9 47.7 17.9 43.7 17.9 38.9C17.9 34.1 20.7 32.7 24.1 32.7C27.5001 32.7 30.3 35.5 30.3 38.9C30.3 42.1 32 44.9 34.5 46.4C32 48 30.3 50.7 30.3 53.9C30.3 57.1 32 59.9 34.5 61.4C32 63 30.3 65.7 30.3 68.9C30.3 73.8 34.3 77.7 39.1 77.7C43.9 77.7 47.9001 73.7 47.9001 68.9C47.9001 64.1 43.9 60.1 39.1 60.1C34.3 60.1 32.9001 57.3 32.9001 53.9C32.9001 50.5 35.7 47.7 39.1 47.7C42.5 47.7 45.3 45.9 46.8 43.2C48.4 45.6 51.1001 47.2 54.2001 47.2C57.3001 47.2 60 45.6 61.6 43.2C63.1 45.9 66 47.7 69.3 47.7C74.2 47.7 78.1 43.7 78.1 38.9C78.1 34.1 74.1 30.1 69.3 30.1H69.1ZM33.3 8.8C33.3 5.4 36.1 2.6 39.5 2.6C42.9 2.6 45.7001 5.4 45.7001 8.8C45.7001 12.2 42.9 15 39.5 15C36.1 15 33.3 12.2 33.3 8.8ZM8.80005 45.2C5.40005 45.2 2.60005 42.4 2.60005 39C2.60005 35.6 5.40005 32.8 8.80005 32.8C12.2 32.8 15 35.6 15 39C15 42.4 12.2 45.2 8.80005 45.2ZM45.2001 69.1C45.2001 72.5 42.4 75.3 39 75.3C35.6 75.3 32.8 72.5 32.8 69.1C32.8 65.7 35.6 62.9 39 62.9C42.4 62.9 45.2001 65.7 45.2001 69.1ZM39 45.2C35.6 45.2 32.8 42.4 32.8 39C32.8 35.6 35.6 32.8 39 32.8C42.4 32.8 45.2001 35.6 45.2001 39C45.2001 42.4 42.4 45.2 39 45.2ZM69.1 45.2C65.7 45.2 62.9001 42.4 62.9001 39C62.9001 35.6 65.7 32.8 69.1 32.8C72.5 32.8 75.3 35.6 75.3 39C75.3 42.4 72.5 45.2 69.1 45.2Z" fill="#C48B28"/>
                </g>
                <defs>
                <clipPath id="clip0_706_47">
                <rect width="78" height="78" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <img src="/logo-azul.png" id="logo-23" alt="RIES23" />
            <div id="datos-imagen">
                <p className="datos-imagen">8 y 9 de noviembre de 2023</p>
                <p className="datos-imagen">Vigo</p>
            </div>
            <div id="tematicas">
                <p className="tema" onClick={handleLongevidad}>Longevidad</p>
                <span className="border"></span>
                <p className="tema" onClick={handleBiotech}>Biotech</p>
                <span className="border"></span>
                <p className="tema" onClick={handleOnehealth}>Onehealth</p>
                <span className="border"></span>
                <p className="tema" onClick={handleIA}>IA</p>
            </div>
        </div>

        <div id="circulos">
            <div id="circulos-wrap">
                <Circulos />
                <img src="/ries-circulo.png" id="circulo-img" />
            </div>
        </div>

        <div id="colab">

        </div>
    </div>)
}

export default Hero23