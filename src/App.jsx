//import './App.css'
import { Header } from './components/header.jsx'
import { EsquinaFLor } from './components/esquinaFlor.jsx'
import { Descripcion } from './components/descripcion.jsx'
import { Layout } from './layout/layout.jsx'

export function App() {

  return (
    <>
      <Layout> {/* Envuelve el contenido con Layout */}
        <EsquinaFLor></EsquinaFLor>
        <Header />
        <Descripcion></Descripcion>
      </Layout>
    </>
  )
}


