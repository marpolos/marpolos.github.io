import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import marcelle from '../images/perfil_img.jpg';
import { habilidades, aboutMe } from '../datas/datas';

const Home = () => {
  return (
      <>
      <Header/>
      <main class="main">
          <section class="infos-main">
              <article>
                  <h1>Olá, eu sou a Marcelle Monteiro</h1>
                  <p>{ aboutMe }</p>
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