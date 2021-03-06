import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <div className='app-container'>
        {/* Navbar */}
        <Navbar></Navbar>

        {/* End Navbar */}

        {/* Banner */}
        <Banner></Banner>
        {/* End Banner */}

        {/* Row Component */}
        <section className='section-center row-center'>
          <Row
            title='NEW RELEASES'
            fetchUrl={requests.fetchNewReleases}
            isLargeRow
          ></Row>
          <Row title='Trending Now' fetchUrl={requests.fetchTrending}></Row>
          <Row title='Top Rated' fetchUrl={requests.fetchTopRated}></Row>
          <Row
            title='Action Movies'
            fetchUrl={requests.fetchActionMovies}
          ></Row>
          <Row
            title='Comedy Movies'
            fetchUrl={requests.fetchComedyMovies}
          ></Row>
          <Row
            title='Horror Movies'
            fetchUrl={requests.fetchHorrorMovies}
          ></Row>
          <Row
            title='Romance Movies'
            fetchUrl={requests.fetchRomanceMovies}
          ></Row>
          <Row
            title='Documentaries'
            fetchUrl={requests.fetchDocumentaries}
          ></Row>
        </section>
        {/* End Row Component */}

        {/* Footer */}
        <Footer></Footer>
        {/* End Footer */}
      </div>
    </React.Fragment>
  );
}

export default App;
