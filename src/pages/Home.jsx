import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import marcelle from '../images/perfil_img.jpg';
import { habilidades } from '../datas/datas';

const Home = () => {
  return (
      <>
      <Header/>
      <main class="main">
          <section>
              <article>
                  <h1>Olá, eu sou a Marcelle Monteiro</h1>
                  <p>Sou estudante de desenvolvimento web fullStack pela Trybe. Vivo em São Gonçalo, no Rio de Janeiro. Amo atividades físicas, mas principalmente crossfit e danças. Adoro filmes de super heróis porque me convidam a expandir minha mente sobre a realidade. E sou uma leitora, minhas casa tem um livro em cada canto que se olha porque nunca leio só um por vez.</p>
              </article>
            <hr />
            <article>
              <h2>Habilidades</h2>
                <ul>
                  { habilidades.map((hability, index) => <li className="lists" key={ index }>{ hability }</li>) }
                </ul>
            </article>
          </section>
          <img src={ marcelle } alt="Marcelle Monteiro" />
      </main>
      <Footer />
      </>
  );
}

export default Home;