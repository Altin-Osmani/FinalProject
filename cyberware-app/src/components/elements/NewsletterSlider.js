import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import NewsletterCardComponent from "./NewsletterCardComponent";

export default function SliderComponent() {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto py-10 px-4 ≈">
        <div className="newsletter slider-container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              type: "progressbar",
            }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              400: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {/* Slides */}
            <SwiperSlide>
            <div className="relative h-full">

  <div className="absolute -bottom-[540px] w-full flex border-b border-cyberorange px-4 py-2">
    <span className="text-cyberorange text-3xl">Read more</span>
  </div>
</div>
            </SwiperSlide>
            <SwiperSlide className="pb-20">
              <NewsletterCardComponent 
                subtitle="Iranian Hackers Target Critical Infrastructure"
                date="October 20, 2024"
                title="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
                body="Recent reports reveal that Iranian hackers are infiltrating critical infrastructure organizations to collect credentials and network data. This information is being sold on cybercriminal forums, enabling further cyberattacks by other threat actors."
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsletterCardComponent
                subtitle="Iranian Hackers Target Critical Infrastructure"
                date="October 20, 2024"
                title="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
                body="Recent reports reveal that Iranian hackers are infiltrating critical infrastructure organizations to collect credentials and network data. This information is being sold on cybercriminal forums, enabling further cyberattacks by other threat actors."
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsletterCardComponent
                subtitle="Iranian Hackers Target Critical Infrastructure"
                date="October 20, 2024"
                title="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
                body="Recent reports reveal that Iranian hackers are infiltrating critical infrastructure organizations to collect credentials and network data. This information is being sold on cybercriminal forums, enabling further cyberattacks by other threat actors."
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsletterCardComponent
                subtitle="Iranian Hackers Target Critical Infrastructure"
                date="October 20, 2024"
                title="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
                body="Recent reports reveal that Iranian hackers are infiltrating critical infrastructure organizations to collect credentials and network data. This information is being sold on cybercriminal forums, enabling further cyberattacks by other threat actors."
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsletterCardComponent
                subtitle="Iranian Hackers Target Critical Infrastructure"
                date="October 20, 2024"
                title="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
                body="Recent reports reveal that Iranian hackers are infiltrating critical infrastructure organizations to collect credentials and network data. This information is being sold on cybercriminal forums, enabling further cyberattacks by other threat actors."
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsletterCardComponent
                subtitle="Iranian Hackers Target Critical Infrastructure"
                date="October 20, 2024"
                title="Iranian Hackers Breaching Critical Infrastructure for Credential Theft"
                body="Recent reports reveal that Iranian hackers are infiltrating critical infrastructure organizations to collect credentials and network data. This information is being sold on cybercriminal forums, enabling further cyberattacks by other threat actors."
              />
            </SwiperSlide>

            {/* Custom Navigation */}
            <div className="swiper-button-prev-custom">
              <span>
                <svg
                  width="18"
                  height="26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M.696 13 13.6 25.904l3.705-3.704-9.2-9.2 9.2-9.2L13.6.095.696 13Z"
                    fill="#2A2A2A"
                  />
                </svg>
              </span>
            </div>
            <div className="swiper-button-next-custom">
              <span>
                <svg
                  width="18"
                  height="26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.304 13 4.4 25.904.695 22.2l9.2-9.2-9.2-9.2L4.4.095 17.304 13Z"
                    fill="#2A2A2A"
                  />
                </svg>
              </span>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}
