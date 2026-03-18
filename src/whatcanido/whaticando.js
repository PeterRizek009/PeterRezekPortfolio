
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { services } from "./../data/content";
import { iconMap } from "./../data/iconMap";

const WahtICanDo = () => {


  return (
    <section className="flex justify-center px-6">
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
              <SwiperSlide key={i} className="!h-auto flex ">
                <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md hover:shadow-xl transition w-full flex flex-col h-full">
                  {/* icon */}
                  <div
                    className={`mb-2 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${service.color} text-white shadow-md`}
                  >
                    {iconMap[service.icon]}
                  </div>

                  {/* title */}
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">
                    {service.title}
                  </h3>

                  {/* desc */}
                  <p className="text-gray-600 leading-relaxed text-[15px] flex-grow">
                    {service.description}
                  </p>

                  {/* list */}
                  <ul className="text-gray-600 text-sm space-y-1 mt-1">
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
