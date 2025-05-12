//import './App.css'
import { Header } from "./components/header.jsx";
import { EsquinaFLor } from "./components/esquinaFlor.jsx";
import { Descripcion } from "./components/descripcion.jsx";
import { Ubicacion } from "./components/ubicacion.jsx";
import { Vestuario } from "./components/vestuario.jsx";
import { Lluvia } from "./components/lluvia.jsx";
import { Footer } from "./components/footer.jsx";
import { Layout } from "./layout/layout.jsx";

export function App() {
  return (
    <>
      <Layout>
        {" "}
        {/* Envuelve el contenido con Layout */}
        <EsquinaFLor></EsquinaFLor>
        <Header />
        <Descripcion></Descripcion>
        <Ubicacion></Ubicacion>
        <Vestuario></Vestuario>
        <Lluvia></Lluvia>
        <Footer></Footer>
      </Layout>
    </>
  );
}
