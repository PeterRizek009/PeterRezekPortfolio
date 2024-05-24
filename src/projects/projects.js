import React from 'react';
import news from './newsapp.png';
import library from './library.png'
import company from './landing.png'
import ecommece from './Ecommercewithredux.PNG'
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
            tools: ['HTML', 'Tailwind CSS', 'React JS', 'Responsive design']

        },
        {
            image: library,
            url: 'https://books-ecommerceapp.netlify.app/',
            name: 'Books store web app',
            tools: ['HTML', 'CSS', 'Bootstrap', 'React JS', 'Responsive design']
        },
        {
            image: company,
            url: 'https://companylanpgtemplate.netlify.app/',
            name: 'Lamdung Page',
            tools: ['HTML', 'Tailwind CSS', 'React JS', 'Responsive design']
        },
        {
            image: ecommece,
            url: 'https://peterrizek009.github.io/ecommerce-redux',
            name: 'E-commerce Web Application with Redux ',
            tools: ['HTML', 'Tailwind CSS', 'React JS', 'Redux', 'Responsive design']
        },

    ]

    // const handleOnDragStart = () => {
    //     index === projectData.length - 1 ? setIndex(0) : setIndex(index + 1)

    // }

    return (
        <div className='block relative w-[80%] mx-auto py-4'>

            <div className='title'>Projects</div>


            <div className='projects w-full md:p-8 flex md:justify-between justify-start flex-wrap'>
                {projectData.map((project) => (
                    <div className='project xl:w-[40%] lg:w-[50%] w-full h-[400px]  m-4 py-14 flex flex-col' key={project.name}>
                        <a href={project.url}>
                            <div className='block md:w-[547px] md:h-[300px] w-full h-[250px]  bg-cover bg-center shadow-sm rounded-sm hover:drop-shadow-lg hover:shadow-violet-800' style={{ backgroundImage: `url(${project.image})` }}></div>
                        </a>
                        <div className='flex justify-between mt-3 w-full'>
                            <div >
                                <h1 className='uppercase  text-xl font-bold text-indigo-200 hover:text-violet-800'>{project.name}</h1>
                                <div className='relative flex justify-start items-start flex-wrap'>
                                    {(project.tools).map((tool) => (
                                        <h3 className='uppercase me-4 text-sm'>{tool}</h3>
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