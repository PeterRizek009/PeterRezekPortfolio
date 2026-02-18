import { FaCloud } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdWeb } from "react-icons/md";
import { SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const WahtICanDo = () => {
  const services = [
    {
      icon: <MdWeb size={40} />,
      color: "from-orange-400 to-yellow-500",
      title: "Business Websites",
      description:
        "Professional websites designed to attract customers, build trust, and strengthen your online presence.",
      details: [
        "Company websites",
        "Mobile optimized",
        "Fast performance",
        "SEO-ready",
      ],
    },
    {
      icon: <BiSupport size={40} />,
      color: "from-green-400 to-green-600",
      title: "IT Support",
      description:
        "Reliable technical support to keep your business systems running smoothly with minimal downtime.",
      details: [
        "Issue troubleshooting",
        "Remote assistance",
        "System maintenance",
        "Performance optimization",
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
      title: "Business Systems",
      description:
        "Custom backend systems and integrations that automate processes and improve workflow efficiency.",
      details: [
        "API integrations",
        "Automation",
        "Secure data systems",
        "Custom logic",
      ],
    },
    {
      icon: <FaCloud size={40} />,
      color: "from-blue-400 to-blue-600",
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud environments and infrastructure setups tailored for business growth and security.",
      details: [
        "Cloud setup",
        "Server configuration",
        "Access control",
        "Backup solutions",
      ],
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-600 to-indigo-600 p-6">
      {/* CARD */}
      <div className="relative w-full max-w-[1300px] rounded-2xl bg-white shadow-2xl overflow-hidden p-14 z-8">
        {/* TITLE */}
        <div className="relative z-10 mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Business Solutions
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-violet-600 to-purple-500 mt-3 rounded-full" />
        </div>

        {/* SLIDER */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!flex items-stretch"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i} className="!h-auto flex items-stretch">
              <div className="group rounded-2xl border border-gray-300 bg-white p-8 shadow-md hover:shadow-2xl transition w-full flex flex-col h-full">
                {/* icon */}
                <div
                  className={`mb-5 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${service.color} text-white shadow-lg`}
                >
                  {service.icon}
                </div>

                {/* title */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>

                {/* desc */}
                <p className="text-gray-600 leading-relaxed text-base flex-grow">
                  {service.description}
                </p>

                <ul className="text-gray-600 text-sm space-y-1">
                  {service.details.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WahtICanDo;
