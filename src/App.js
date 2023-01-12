import React from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import { MDBContainer } from 'mdb-react-ui-kit';

/**
 * Entrypoint
 * @return {function}
 */
export default function App() {
  return (
    <MDBContainer fluid>
      <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
        <Header />
        <hr />
        <Intro />
        <hr />
        <Body />
        <hr />
        <Footer />
      </article>
    </MDBContainer>
  );
}
