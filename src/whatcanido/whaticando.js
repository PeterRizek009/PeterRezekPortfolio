import { FaCloud } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdWeb } from "react-icons/md";
import { SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const WahtICanDo = () => {
  const services = [
    {
      icon: <MdWeb size={34} />,
      color: "from-orange-400 to-yellow-400",
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
      icon: <BiSupport size={34} />,
      color: "from-green-400 to-green-500",
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
          <SiNodedotjs size={22} />
          <SiExpress size={22} />
          <SiMongodb size={22} />
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
      icon: <FaCloud size={34} />,
      color: "from-blue-400 to-blue-500",
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
    <section className="flex justify-center bg-[#f4f6fb] px-6">

      {/* CARD */}
      <div className="relative w-full max-w-[1300px] rounded-2xl bg-white shadow-xl overflow-hidden">

        {/* RIGHT SHAPE — same header style */}
        <div className="absolute right-0 top-0 h-full w-[40%]">

          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 to-purple-500" />

          <div className="absolute left-[-160px] top-0 h-full w-[420px] bg-white rounded-r-[240px]" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 p-14">

          {/* TITLE */}
          <div className="mb-16 max-w-[520px]">
            <h2 className="text-4xl font-bold text-gray-900">
              Business Solutions
            </h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 mt-3 rounded-full" />
          </div>

          {/* SLIDER */}
          <Swiper
            spaceBetween={28}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!flex items-stretch"
          >
            {services.map((service, i) => (
              <SwiperSlide key={i} className="!h-auto flex items-stretch">

                <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md hover:shadow-xl transition w-full flex flex-col h-full">

                  {/* icon */}
                  <div
                    className={`mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${service.color} text-white shadow-md`}
                  >
                    {service.icon}
                  </div>

                  {/* title */}
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>

                  {/* desc */}
                  <p className="text-gray-600 leading-relaxed text-[15px] flex-grow">
                    {service.description}
                  </p>

                  {/* list */}
                  <ul className="text-gray-600 text-sm space-y-1 mt-5">
                    {service.details.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>

    </section>
  );
};

export default WahtICanDo;
