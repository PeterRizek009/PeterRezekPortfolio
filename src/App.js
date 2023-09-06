import './App.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Header from './header/header';
import { useEffect, useState } from 'react';
import Loading from './loading/loading';
import Skills from './skills/skills';
import Projects from './projects/projects';
import Footer from './footer/footer';




function App() {
  const [showComponent, setShowComponent] = useState(false);



  useEffect(() => {
    const delay = 3000; // Delay in milliseconds

    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {
        showComponent === true ?


          <div className="App bg-newBlack font-custom text-gray">
            <nav className='flex flex-wrap justify-between items-center py-5 md:max-w-[1200px]  mx-auto'>
              <h1 className='text-white md:font-bold text-base border-b-4 border-violet-800 py-2 md:mx-5 mx-1'>PETER REZEIK</h1>
              <div className='icons flex justify-between'>
                <a className='cursor-pointer mx-4' href='https://github.com/PeterRizek009'>
                  <BsGithub size={32} className='hover:text-violet-800' />
                </a>
                <a className='cursor-pointer mx-2' href='https://www.linkedin.com/in/peter-rezik-a84408123/'>
                  <BsLinkedin size={32} className='hover:text-violet-800' />
                </a>
              </div>
            </nav>

            {/* <div className='w-[445px] h-[720px] top-0 absolute bg-darkgray md:right-[600px]'>
         <img src={peterimage} className=''></img>
      </div> */}

            <Header />
            <Skills />
            <Projects />

            <Footer />


          </div>
          :
          <Loading />
      }

    </>
  );
}

export default App;
