import React, { useMemo } from "react";
import { FaCloud } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdWeb } from "react-icons/md";
import { SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layouts/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const WahtICanDo = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const services = [
    {
      icon: <MdWeb size={40} />,
      color: "from-orange-400 to-yellow-500",
      title: "Front-End Development",
      description:
        "Building modern, responsive, fast, and user-friendly web interfaces using React, Tailwind CSS, HTML, CSS, and JavaScript.",
      details: [
        "Responsive UI/UX Design",
        "Reusable React Components",
        "API Integration",
        "Tailwind CSS Styling",
      ],
    },
    {
      icon: <BiSupport size={40} />,
      color: "from-green-400 to-green-600",
      title: "Technical Support",
      description:
        "Providing IT assistance, troubleshooting issues, installing software, and ensuring smooth system functionality.",
      details: [
        "Hardware/Software Troubleshooting",
        "Remote Support",
        "Network Diagnostics",
        "System Monitoring & Maintenance",
      ],
    },
    {
      icon: (
        <div className="flex gap-1">
          <SiNodedotjs size={26} />
          <SiExpress size={26} />
          <SiMongodb size={26} />
        </div>
      ),
      color: "from-slate-700 to-emerald-500",
      title: "Back-End Development",
      description:
        "Building RESTful APIs and backend architecture using Node.js, Express.js, and MongoDB.",
      details: [
        "Node.js API Development",
        "Express.js Middleware",
        "MongoDB / Mongoose",
        "Authentication (JWT)",
      ],
    },
    {
      icon: <FaCloud size={40} />,
      color: "from-blue-400 to-blue-600",
      title: "System Administration & Cloud",
      description:
        "Managing cloud systems, Windows server administration, and AWS infrastructure.",
      details: [
        "AWS (IAM, VPC, EC2)",
        "Windows Server",
        "Active Directory",
        "Monitoring & Backups",
      ],
    },
  ];

const Card = ({ service, index }) => (
  <motion.div
    key={index}
    variants={scrollAnimation}
    className="
      bg-white 
      shadow-lg hover:shadow-xl 
      rounded-xl md:rounded-2xl 
      p-4 md:p-8 
      text-center 
      transition-all duration-300 
      hover:-translate-y-2
      max-w-xs md:max-w-none 
      mx-auto
    "
  >
    {/* Icon */}
    <div
      className={`mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${service.color} text-white shadow-md`}
    >
      {service.icon}
    </div>

    {/* Title */}
    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
      {service.title}
    </h3>

    {/* Description */}
    <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base px-2">
      {service.description}
    </p>

    {/* Bullet points */}
    <ul className="text-gray-600 text-sm list-disc list-inside text-left max-w-[200px] md:max-w-xs mx-auto space-y-1">
      {service.details.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </motion.div>
);


  return (
    <div className="md:max-w-[80%] mx-auto mt-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold">What I Can Do</h2>
        <div className="w-24 h-1 bg-violet-600 mx-auto mt-2 rounded-full"></div>
      </div>

      <ScrollAnimationWrapper>
 
        <div className="block md:hidden">
          <Swiper spaceBetween={20} slidesPerView={1}>
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <Card service={service} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card service={service} index={index} />
          ))}
        </div>

      </ScrollAnimationWrapper>
    </div>
  );
};

export default WahtICanDo;
