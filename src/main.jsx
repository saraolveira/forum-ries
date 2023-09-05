import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div style={{
        width: 100 + 'vw', 
        height: 100 + 'vh',
         display: 'flex',
         justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          padding: 0,
         }}>

        <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 132 132"
              id="loader"
            >
              <g clipPath="url(#clip0_608_157)">
                <path
                  fill="#fff"
                  d="M116.6 50.9c-7.9 0-14.4 6.2-14.9 14.1 0 5.8-4.7 10.5-10.5 10.5S80.7 70.8 80.7 65c-.3-5-3.1-9.4-7.1-11.9 4.3-2.6 7.1-7.3 7.1-12.7C80.7 35 78 30.6 74 28c4.5-2.6 7.6-7.4 7.6-13C81.6 6.8 74.9.1 66.7.1S51.8 6.8 51.8 15s6.2 14.4 14 14.9c5.8 0 10.5 4.8 10.5 10.6S71.6 51 65.8 51s-10.1 2.9-12.7 7.1c-2.6-4.3-7.3-7.1-12.7-7.1-5.4 0-10.1 2.9-12.7 7.1C25.1 53.8 20.4 51 15 51 6.8 51 .1 57.7.1 65.9S6.8 80.8 15 80.8s14.9-6.7 14.9-14.9c0-5.8 4.7-10.5 10.5-10.5s10.5 4.7 10.5 10.5c0 5.4 2.9 10.1 7.1 12.7-4.3 2.6-7.1 7.3-7.1 12.7 0 5.4 2.9 10.1 7.1 12.7-4.3 2.6-7.1 7.3-7.1 12.7 0 8.2 6.7 14.9 14.9 14.9s14.9-6.7 14.9-14.9-6.7-14.9-14.9-14.9-10.5-4.7-10.5-10.5S60 80.8 65.8 80.8s10.4-3.1 13-7.6c2.7 4 7.3 6.7 12.5 6.7s9.8-2.7 12.5-6.7c2.6 4.5 7.4 7.6 13 7.6 8.2 0 14.9-6.7 14.9-14.9S125 51 116.8 51M56.2 14.9c0-5.8 4.7-10.5 10.5-10.5s10.5 4.7 10.5 10.5-4.7 10.5-10.5 10.5-10.5-4.7-10.5-10.5zM14.9 76.3c-5.8 0-10.5-4.7-10.5-10.5s4.7-10.5 10.5-10.5S25.4 60 25.4 65.8s-4.7 10.5-10.5 10.5zm61.4 40.4c0 5.8-4.7 10.5-10.5 10.5s-10.5-4.7-10.5-10.5 4.7-10.5 10.5-10.5 10.5 4.7 10.5 10.5zM65.8 76.3c-5.8 0-10.5-4.7-10.5-10.5S60 55.3 65.8 55.3 76.3 60 76.3 65.8s-4.7 10.5-10.5 10.5zm50.9 0c-5.8 0-10.5-4.7-10.5-10.5s4.7-10.5 10.5-10.5 10.5 4.7 10.5 10.5-4.7 10.5-10.5 10.5z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_608_157">
                  <path fill="#fff" d="M0 0H131.6V131.6H0z"></path>
                </clipPath>
              </defs>
            </svg>
      </div>}>
        <App />
      </Suspense> 
    </BrowserRouter>
    
  </React.StrictMode>,
)
