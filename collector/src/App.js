import sound from './components/Sound-of-Metal-01.jpg'
import mank from './components/Mank-023.jpg';
import no_country from './components/no-country-for-old-men-2007-1639.png';
import portada_sound from './components/UrNlfWgNeBSPUZtpsIDTa1BAlEmwFr_large.jpg'
import ikiru from './components/KEnmrGEhKGIUoIrMqG2vVjSk0nkr1h_large.jpg'
import fauno from './components/5i7NGnwsubXRYF6luLdSi6iC9ICn5O_large.jpg'
import mrfox from './components/WQjpoVqOb1CWcVmG1ZoaiEu0gJF0ez_large.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>The Collector</h1>
    </header>
    <p class="Descripcion">Publicacion de importantes Peliculas clasicas y contemporaneas ofreciendo la mayor calidad tecnica posible </p>
    <div class="carousel">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={no_country} class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={mank} class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
            <img src={sound} class="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>    
    </div>
    <section class="Catalogo">
      <p>Catalogo de Peliculas</p>
      <section class="Catalogo-inner">
        <div class="Item-catalogo">
          <img src={portada_sound}></img>
          <button>Comprar</button>
        </div>
        <div class="Item-catalogo">
          <img src={fauno}></img>
          <button>Comprar</button>
        </div>
        <div class="Item-catalogo">
          <img src={ikiru}></img>            
          <button>Comprar</button>
        </div>
        <div class="Item-catalogo">
          <img src={mrfox}></img>
          <button>Comprar</button>
        </div>
      </section>
    </section>
    <section class="formulario">
      <h2>Formulario de Contacto</h2>
      <div class="formulario-inner">
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
