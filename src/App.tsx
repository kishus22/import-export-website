import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import TopBar from './components/TopBar';
import About from './components/About';
import Products from './components/Products';
import ReadyToShip from './components/ReadyToShip';
import TrustBadges from './components/TrustBadges';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import LoadingScreen from './components/LoadingScreen';
import CursorEffect from './components/CursorEffect';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#F5EFE7]">
      <CursorEffect />
      <TopBar />
      <Hero />
      <About />
      <Products />
      <ReadyToShip />
      <TrustBadges />
      <QuoteForm />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
