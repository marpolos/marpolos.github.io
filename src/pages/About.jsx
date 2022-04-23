import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import { cursos } from '../datas/datas'

class About extends React.Component {
  render() {
    return (
      <>
      <Header />
      <main class="main">
        <h1>Sobre mim</h1>
        <hr />
        <article>
          <h2>Histórico</h2>
            <ol>
          { cursos.map((curso, index) => <li className="lists itens-menu" key={ index }>{ curso }</li>)}
            </ol>
        </article>
      </main>
      <Footer />
      </>
    );
  };
}

export default About;
