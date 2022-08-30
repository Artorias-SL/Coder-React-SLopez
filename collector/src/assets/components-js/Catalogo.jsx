import React from "react";
import portada_sound from '../images/UrNlfWgNeBSPUZtpsIDTa1BAlEmwFr_large.jpg'
import ikiru from '../images/KEnmrGEhKGIUoIrMqG2vVjSk0nkr1h_large.jpg'
import fauno from '../images/5i7NGnwsubXRYF6luLdSi6iC9ICn5O_large.jpg'
import mrfox from '../images/WQjpoVqOb1CWcVmG1ZoaiEu0gJF0ez_large.jpg'
const Catalogo=()=>{
    const products=[{id:1,nombre:"Sound of Metal",precio:1500,imagen:portada_sound},
    {id:2,nombre:"Laberinto del Fauno",precio:1500,imagen:fauno},
    {id:3,nombre:"Ikiru",precio:1500,imagen:ikiru},
    {id:4,nombre:"Fantastic Mr.Fox",precio:1500,imagen:mrfox}
    ]
    return(
        <section className="Catalogo">
        <p>Catalogo de Peliculas</p>
        <section className="Catalogo-inner">
            <ul>
                {products.map(item =>(
                    <li>
                        <div className="Item-catalogo">
                            <img src={item.imagen} alt="Portada"></img>
                            <p>{item.nombre}</p>
                            <button>Comprar</button>
                        </div>
                    </li>
                ))
                }

            </ul>
        </section>
      </section>
    )
}
export default Catalogo;