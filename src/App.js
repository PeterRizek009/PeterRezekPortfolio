import "./App.css";
import Header from "./header/header";
import { useEffect, useState } from "react";
import Loading from "./loading/loading";
import Projects from "./projects/projects";
import Footer from "./footer/footer";
import ContactSection from "./contact/contact";
import WahtICanDo from "./whatcanido/whaticando";

function App() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const delay = 1000; // Delay in milliseconds

    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {showComponent === true ? (
        <div className="App dark:bg-violet-900 bg-[#fafaf7] font-custom  relative">
          <Header />
          <WahtICanDo />
          {/* <Skills /> */}
          <Projects />
          <ContactSection />
          {/* <ResumeSection /> */}
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
