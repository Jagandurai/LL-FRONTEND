import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { BookingProvider } from './components/Booking/BookingContext';
import Booking from './components/Booking/Booking';
import 'bootstrap/dist/css/bootstrap.min.css';
import Advertisement from './components/Advertisement/Advertisment';
import ScrollToTop from './ScrollToTop';   // ✅ Import ScrollToTop

// Lazy load components
const Experties = lazy(() => import('./components/Experties/Experties'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Header = lazy(() => import('./components/Header/Header'));
// const Hero = lazy(() => import('./components/Hero/Hero'));
const People = lazy(() => import('./components/People/People'));
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'));
const Work = lazy(() => import('./components/Work/Work'));
const Exclusively = lazy(() => import('./components/Exclusively/Exclusively'));
const TrailService = lazy(() => import('./components/TrailService/TrailService'));
const WhatsApp = lazy(() => import('./WhatsApp/WhatsApp'));
const Service = lazy(() => import('./components/Service/Service'));
const Gallery = lazy(() => import('./components/Gallery/Gallery'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Welcome = lazy(() => import('./components/Welcome/Welcome'));
const Notification = lazy(() => import('./components/Notification/Notification'));

// SCSS styles
import css from './styles/App.module.scss';

const App = () => {
  return (
    <BookingProvider>
      <Router>
        <ScrollToTop />   {/* ✅ This ensures scroll resets on route change */}
        <div className={`${css.container}`}>
          <Suspense fallback={null}>
            <Header />
          </Suspense>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <Suspense fallback={<div>Welcome To Lovely Looks Beauty Salon...</div>}>
                    <Hero />
                  </Suspense> */}
                  <Suspense fallback={null}>
                    <Welcome />
                  </Suspense>
                  <Suspense fallback={null}>
                    <Experties />
                  </Suspense>
                  <Suspense fallback={null}>
                    <Exclusively />
                  </Suspense>
                  <Suspense fallback={null}>
                    <Work />
                  </Suspense>
                  <Suspense fallback={null}>
                    <TrailService />
                  </Suspense>
                  <Suspense fallback={null}>
                    <Portfolio />
                  </Suspense>
                  <Suspense fallback={null}>
                    <People />
                  </Suspense>
                </>
              }
            />

            <Route
              path="/service"
              element={
                <Suspense fallback={null}>
                  <Service />
                </Suspense>
              }
            />
            <Route
              path="/gallery"
              element={
                <Suspense fallback={null}>
                  <Gallery />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={null}>
                  <Contact />
                </Suspense>
              }
            />
          </Routes>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>

          <Suspense fallback={null}>
            <WhatsApp />
          </Suspense>
          <Suspense fallback={null}>
            {/* <Notification /> */}
          </Suspense>
          <Suspense fallback={null}>
            <Booking />
          </Suspense>
          <Advertisement />
        </div>
      </Router>
    </BookingProvider>
  );
};

export default App;
