import React from 'react';
import news from './newsapp.png';
import library from './library.png'
import company from './landing.png'
import transfer from './Transfer.jpg'

const Projects = () => {


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
            url: 'https://newsapptoday.netlify.app/',
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
            url: 'https://footballtransfermarkets-app.netlify.app/',
            name: 'football transfers web app',
            tools: ['HTML', 'CSS', 'Bootstrap', 'React JS']
        },

    ]

    // const handleOnDragStart = () => {
    //     index === projectData.length - 1 ? setIndex(0) : setIndex(index + 1)

    // }

    return (
        <div className='md:max-w-[1200px] lg:max-w-[1600px]   mx-auto py-4'>
            <div className='block text-white text-2xl md:text-5xl font-bold leading-10 md:pb-4 p-2  border-b-4 border-violet-800 md:w-[400px] w-[200px] md:text-left text-center mx-auto md:mx-2'>Projects</div>

          
                <div className='projects w-full p-8  flex md:justify-between items-start justify-center flex-wrap'>
                    {projectData.map((project, index) => (
                        <div className='project md:w-[547px] w-[80%] h-[400px]  my-8 mx-2 py-14 flex flex-col justify-start items-star' key={project.name}>
                            <a href={project.url}>
                                <div className='relative md:h-[290px] md:w-[547px] h-[240px] w-[350px]  bg-cover bg-center shadow-sm rounded-sm hover:drop-shadow-lg hover:shadow-violet-800' style={{ backgroundImage: `url(${project.image})` }}></div>
                                <h1 className='uppercase py-4 text-xl font-bold hover:text-violet-800'>{project.name}</h1>
                                <div className='relative flex justify-start items-start'>
                                    {(project.tools).map((tool) => (
                                        <h3 className='uppercase me-2 text-sm'>{tool}</h3>

                                    ))}
                                </div>
                            </a>
                        </div>
                    )
                    )
                    }
                </div>
            
            <div className="md:max-w-[1800px]  h-px bg-white mx-auto mt-28 mb-8" />
        </div>

    );
}

export default Projects;