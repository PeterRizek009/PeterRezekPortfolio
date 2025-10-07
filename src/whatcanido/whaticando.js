
import React  ,  {useMemo} from 'react';
import { FaChartLine , FaCloud } from 'react-icons/fa'
import { BiSupport } from "react-icons/bi";
import { MdWeb ,MdEmail} from "react-icons/md";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layouts/ScrollAnimationWrapper";
import { motion } from "framer-motion";


const WahtICanDo = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);


   const services = [
  {
    icon: <MdWeb color='orange' size={50} />,
    title: "Front-End Development",
    description: "Creating modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, and Tailwind CSS."
  },

  {
    icon: <BiSupport color='green' size={45} />, 
    title: "Technical Support",
    description: "Providing IT support, troubleshooting hardware/software issues, and ensuring smooth system operations."
  },
  {
    icon: <FaChartLine color='purple' size={45} />, 
    title: "IT Sales",
    description: "Managing IT sales activities, promoting services, and helping clients choose the right technical solutions."
  },
  {
    icon: <FaCloud color='skyblue' size={45} />, 
    title: "System Administration & Cloud",
    description: "Experienced in Windows Server administration, networking, and cloud services like AWS (VPC, EC2, IAM)."
  },
    {
    icon: <MdEmail color='teal' size={45} />,
    title: "Email Marketing",
    description: "Designing and managing email campaigns to reach customers, increase engagement, and boost sales."
  }
];



    return (

        <div className='md:max-w-[80%] mx-auto mt-8'>
            <div className='title'>What I can do</div>
            <ScrollAnimationWrapper>
            <div className="flex justify-start items-center text-center flex-wrap w-full my-4">
                {services.map((service, index) => (
                     
                    <motion.div key={index} className="p-4 text-center w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center" variants={scrollAnimation}>
                        <div className="mb-4 border-2  p-4 rounded-full">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className='w-2/3'>{service.description}</p>
                    </motion.div>
                ))}
            </div>
            </ScrollAnimationWrapper>
            <div className="md:max-w-[1800px]  h-px dark:bg-white bg-newBlack mx-auto mt-28 mb-8" />
        </div>

    );
};




export default WahtICanDo;