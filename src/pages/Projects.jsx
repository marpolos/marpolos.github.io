import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import timer from '../images/projetos/timer.png';
import trivia from '../images/projetos/trivia.png';
import wallet from '../images/projetos/wallet.png';


class Projects extends React.Component {
  render() {
    return (
      <>
      <Header />
      <main class="infos-sobre-mim">
        <h1>Projetos</h1>
        <hr />
        <article class="projetos">
          <h2>HTML/CSS básicos</h2>
        </article>
        <article class="projetos">
          <h2>React</h2>
          <ol>
            <li>
              <a href='https://marpolos.github.io/wallet-conversor/'><img src={ wallet } alt="wallet" /></a>
            </li>
          </ol>
        </article>
        <article class="projetos">
          <h2>Redux</h2>
        </article>
        <article class="projetos">
          <h2>Componentes funcionais e hooks</h2>
        </article>
        <article class="projetos">
          <h2>Projetos em grupo</h2>
            <ol>
              <li><a href='https://game-trivia.surge.sh/'><img src={ trivia } alt="trivia" /></a></li>
            </ol>
        </article>
        <article class="projetos">
          <h2>Pessoais</h2>
          <ol>
            <li>
              <a href='https://marpolos.github.io/project-timer/'><img src={ timer } alt="timer" /></a>
            </li>
          </ol>
        </article>
      </main>
      <Footer />
      </>
    );
  };
}

export default Projects;
