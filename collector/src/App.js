import './App.css';
import Header from './assets/components-js/Header';
import Carousel from './assets/components-js/Carousel';
import Catalogo from './assets/components-js/Catalogo';


function App() {
  return (
    <div className="App">
    <Header />
    <p className="Descripcion">Publicacion de importantes Peliculas clasicas y contemporaneas ofreciendo la mayor calidad tecnica posible </p>
    <Carousel />
    <Catalogo />
    <section className="formulario">
      <h2>Formulario de Contacto</h2>
      <div className="formulario-inner">
        <form>
          <label>Ingrese Email</label>
          <input type="Email" placeholder='Email'></input>
          <label>Ingrese Nombre y Apellido</label>
          <input placeholder="Nombre Apelido" type="text"></input>
        </form>
      </div>
    </section>
    <footer>Hola Coder</footer>
  </div>
  );
}

export default App;
