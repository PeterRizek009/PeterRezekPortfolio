import React from 'react';
import news from './newsapp.png';
import library from './library.png'
import company from './landing.png'
import transfer from './Transfer.jpg'
import Modal from '../modal/modal';

const Projects = ({ handleModal, dispaly, closeModal }) => {


    //const [index, setIndex] = useState(0)

    // const [width, setWidth] = useState(1400);


    // useEffect(() => {
    //     const updateWindowDimensions = () => {
    //         const newWidth = window.innerWidth;
    //         setWidth(newWidth);

    //     };

    //     window.addEventListener("resize", updateWindowDimensions);

    //     return () => window.removeEventListener("resize", updateWindowDimensions)

    // }, []);



    const projectData = [
        {
            image: news,
            url: 'https://thetodaynews.netlify.app/',
            name: 'News Web APP',
            tools: ['HTML', 'Tailwind CSS', 'React JS']

        },
        {
            image: library,
            url: 'https://books-ecommerceapp.netlify.app/',
            name: 'Books store web app',
            tools: ['HTML', 'CSS', 'Bootstrap', 'React JS']
        },
        {
            image: company,
            url: 'https://companylanpgtemplate.netlify.app/',
            name: 'Company Landing page',
            tools: ['HTML', 'Tailwind CSS', 'React JS']
        },
        {
            image: transfer,
            url: 'https://peterrizek009.github.io/',
            name: 'E-commerce Web Application with Redux ',
            tools: ['HTML', 'Tailwind CSS', 'React JS' , 'Redux']
        },

    ]

    // const handleOnDragStart = () => {
    //     index === projectData.length - 1 ? setIndex(0) : setIndex(index + 1)

    // }

    return (
        <div className='block relative md:max-w-[80%]  mx-auto py-4'>

            <div className='block text-white text-2xl md:text-5xl font-bold leading-10 md:pb-4 p-2  border-b-4 border-violet-800 md:w-[360px] w-[200px] md:text-left text-center mx-auto md:mx-2'>Projects</div>


            <div className='projects w-full p-8  flex md:justify-between items-start justify-center flex-wrap'>
                {projectData.map((project, index) => (
                    <div className='project md:w-[40%] w-[90%] h-[400px]  m-4 py-14 flex flex-col justify-start items-star' key={project.name}>
                        <a href={project.url}>
                        <div className='relative h-[320px] md:w-[547px]  w-[100%]  bg-cover bg-center shadow-sm rounded-sm hover:drop-shadow-lg hover:shadow-violet-800 ' style={{ backgroundImage: `url(${project.image})` }}></div>
                        </a>
                        <div className='flex justify-between mt-3 max-w-[90%]'>
                            <div >
                                <h1 className='uppercase  text-xl font-bold hover:text-violet-800'>{project.name}</h1>
                                <div className='relative flex justify-start items-start'>
                                    {(project.tools).map((tool) => (
                                        <h3 className='uppercase me-2 text-sm'>{tool}</h3>
                                    ))}

                                </div>
                            </div>
                            {/* <button className='bg-violet-800 text-white rounded-md px-2 max-h-[40px] text-base font-medium hover:bg-green-300 
                              hover:text-black     focus:outline-none focus:ring-2 focus:ring-green-300 shadow-md' onClick={handleModal}>Show case</button> */}
                        </div>


                    </div>
                )
                )
                }
            </div>
            {
                dispaly && (
                    <Modal closeModal={closeModal} />
                )
            }
            <div className="md:max-w-[1800px]  h-[2px] bg-violet-800 mx-auto mt-28 mb-8" />
        </div>

    );
}

export default Projects;