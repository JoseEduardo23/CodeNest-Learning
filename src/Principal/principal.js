import React from 'react';
import logo from './EstiloP/IMG/Logo.png';
import IMG1 from './EstiloP/IMG/Java.png';
import IMG2 from './EstiloP/IMG/Css.png';
import IMG3 from './EstiloP/IMG/Python.png';
import './EstiloP/stylep.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Principal() {
  return (
    <div>
      <img src={logo} className="IMG1" alt="Logo" />
      <ul className="BarraP">
        <li className="A">Cursos</li>
        <li className="B">Información</li>
        <li className="C">Contacto</li>
        <p className="IS">Iniciar Sesión</p>
        <p className="Re">Registrarse</p>
      </ul>

      <div className="carousel-container">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={IMG1} className="d-block w-100" alt="Java" />
            </div>
            <div className="carousel-item">
              <img src={IMG2} className="d-block w-100" alt="CSS" />
            </div>
            <div className="carousel-item">
              <img src={IMG3} className="d-block w-100" alt="Python" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Principal;