import { useEffect, useRef, useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { StickyCta } from "@/components/StickyCta";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";

const LenisContext = createContext(null);
export const useLenis = () => useContext(LenisContext);

const PageShell = ({ children }) => {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
  }, [location.pathname, lenis]);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <PageShell key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageShell>
  );
};

function App() {
  const [lenis, setLenis] = useState(null);
  const [booted, setBooted] = useState(!!window.__mlBooted);
  const rafRef = useRef(null);

  useEffect(() => {
    const instance = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.95,
    });
    const loop = (time) => {
      instance.raf(time);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    setLenis(instance);
    return () => {
      cancelAnimationFrame(rafRef.current);
      instance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <div className="App grain bg-obsidian min-h-screen text-cream">
        <AnimatePresence>
          {!booted && (
            <Preloader
              onDone={() => {
                window.__mlBooted = true;
                setBooted(true);
              }}
            />
          )}
        </AnimatePresence>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
          <div className="h-16" />
          <StickyCta />
        </BrowserRouter>
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: "#0E3827",
              border: "1px solid rgba(212,184,134,0.3)",
              color: "#F4F1EA",
            },
          }}
        />
      </div>
    </LenisContext.Provider>
  );
}

export default App;
