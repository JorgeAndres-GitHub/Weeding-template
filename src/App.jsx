import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Prueba } from './Components/prueba.jsx'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="Container">
        <div className="row">
          <div className="col">
            <div className="px-4 py-5 my-5 text-center">
              <h1 className="display-5 fw-bold">Boostrap en React!</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Esta es una prueba de Boostrap en React</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg px-4 gap-3"
                    onClick={() => setCount((count) => count + 1)}
                  >
                    Count is {count}
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Prueba />
    </>
  )
}


