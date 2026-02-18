import "./App.css";
import Header from "./header/header";
import { useEffect, useState } from "react";
import Loading from "./loading/loading";
import Projects from "./projects/projects";
import Footer from "./footer/footer";
import ContactSection from "./contact/contact";
import WahtICanDo from "./whatcanido/whaticando";
import ResumeSection from "./resumesection/ResumeSection";

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
        <div className="App dark:bg-newBlack bg-[#fafaf7] font-custom dark:text-gray text-newBlack relative">
          

          {/* <div className='w-[445px] h-[720px] top-0 absolute bg-darkgray md:right-[600px]'>
              <img src={peterimage} className=''></img>
            </div> */}

          <Header />
          <WahtICanDo />
          {/* <Skills /> */}
          <Projects />
          <ContactSection />
          <ResumeSection />
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
