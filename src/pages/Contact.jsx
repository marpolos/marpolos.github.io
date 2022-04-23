import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import { linksUteis } from '../datas/datas'

class Contact extends React.Component {
  render() {
    return (
      <>
      <Header />
      <main class="main">
        <h1>Contatos</h1>
        <hr />
        <article>
          <h2>Links úteis</h2>
          <ol>
          { linksUteis.map((url, index) => {
            return (
              <li key={ index } className="lists">
                <a href={ url.url}
                  className="lists utilities"
                  _blank>{ url.page }
                </a>
              </li>
            );
          })}
          </ol>
        </article>
      </main>
      <Footer />
      </>
    );
  };
}

export default Contact;
