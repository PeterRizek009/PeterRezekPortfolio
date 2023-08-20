import './App.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs'



function App() {
  return (
    <div className="App bg-newBlack font-custom text-gray">
      <nav className='flex flex-wrap justify-between items-center py-5 md:w-[1800px] mx-auto'>
        <h1 className='text-white font-bold border-b-4 border-violet-800 py-2 md:mx-5 mx-1 tracking-widest'>PETER REZEIK</h1>
        <div className='icons flex justify-between'>
          <a className='cursor-pointer mx-4' href='https://github.com/PeterRizek009'>
            <BsGithub size={40} className='hover:text-violet-800' />
          </a>
          <a className='cursor-pointer mx-2' href='https://github.com/PeterRizek009'>
            <BsLinkedin size={40} className='hover:text-violet-800' />
          </a>
        </div>
      </nav>

      {/* <div className='w-[445px] h-[720px] top-0 absolute bg-darkgray md:right-[600px]'>
         <img src={peterimage} className=''></img>
      </div> */}

      <div className='header md:w-[1800px] mx-auto'>



        <svg className="opacity-25 md:w-[530px] w-[350px] h-[129px] absolute left-0 top-[150px]">
          <ellipse cx="15%" cy="35%" rx="48%" ry="35%" fill="none" stroke="white" stroke-width="1" />
          <ellipse cx="15%" cy="42%" rx="48%" ry="35%" fill="none" stroke="white" stroke-width="1" />
          <ellipse cx="15%" cy="50%" rx="48%" ry="35%" fill="none" stroke="white" stroke-width="1" />
          <ellipse cx="15%" cy="58%" rx="48%" ry="35%" fill="none" stroke="white" stroke-width="1" />
          <ellipse cx="15%" cy="63%" rx="48%" ry="35%" fill="none" stroke="white" stroke-width="1" />
        </svg>


        <div className="w-auto h-auto my-10 flex flex-col flex-wrap justify-between md:items-start items-center gap-[20px]">

          <div className="w-[400px]  md:w-auto  text-white md:text-[80px] text-[50px] font-bold">Nice to meet you! <br />I’m <span className='border-b-4 border-violet-800'>Peter Rezeik</span> </div>

          <p className="md:w-[600px] w-[320px]  h-auto text-zinc-300 text-lg font-medium leading-7 my-10">With extensive programming experience since age 9, I've cultivated a fervent passion for machine learning. Committed to continuous learning, I aspire to leverage my competencies in this field to eventually build my career.</p>
          <div className="text-white text-base font-bold leading-relaxed tracking-widest py-4 border-b-4 border-violet-800 w-[120px]">CONTACT ME</div>



        </div>
      </div>

    </div>
  );
}

export default App;
