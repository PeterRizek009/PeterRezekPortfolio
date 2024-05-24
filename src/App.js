import './App.css';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs'
import Header from './header/header';
import { useEffect, useState } from 'react';
import Loading from './loading/loading';
import Skills from './skills/skills';
import Projects from './projects/projects';
import Footer from './footer/footer';
import WordWritingAnimation from './wirtingAnimation';
import ContactSection from './contact/contact';
import WahtICanDo from './whatcanido/whaticando';



function App() {
  const [showComponent, setShowComponent] = useState(false);
  const [dispaly, setDisaply] = useState(false);


  useEffect(() => {
    const delay = 3000; // Delay in milliseconds

    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleModal = () => {
    setDisaply(true);
  }
  const closeModal = () => {
    setDisaply(false);
  }





  return (
    <>
      {
        showComponent === true ?


          <div className="App dark:bg-newBlack bg-[#ede6e6] font-custom dark:text-gray text-newBlack relative">
            <nav className='flex flex-wrap justify-between items-center py-5 md:max-w-[80%]  mx-auto'>
              <WordWritingAnimation text="PETER REZEIK" styleData="md:font-bold md:text-4xl  text-xl border-b-4 border-violet-800 py-2 md:mx-2 mx-1" />

              <div className='icons flex justify-between'>
                <a className='cursor-pointer mx-4' href='https://github.com/PeterRizek009'>
                  <BsGithub size={32} className='hover:text-violet-800' />
                </a>
                <a className='cursor-pointer mx-2' href='https://www.linkedin.com/in/peter-rezik-a84408123/'>
                  <BsLinkedin size={32} className='hover:text-violet-800' />
                </a>
                <a className='cursor-pointer mx-2' href='https://www.youtube.com/channel/UC7NM1ljXzljX2suo-Wjjr_w'>
                  <BsYoutube size={32} className='hover:text-violet-800' />
                </a>


              </div>
            </nav>

            {/* <div className='w-[445px] h-[720px] top-0 absolute bg-darkgray md:right-[600px]'>
              <img src={peterimage} className=''></img>
            </div> */}

            <Header />
            <WahtICanDo/>
            <Skills />
            <Projects handleModal={handleModal} closeModal={closeModal} dispaly={dispaly} />
            <ContactSection />
            <Footer />

          </div>

          :
          <Loading />
      }

    </>
  );
}

export default App;
