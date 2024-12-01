import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ClientCardComponent from "./ClientCardComponent";

export default function DiscoverWhySlider() {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto py-10 px-4 ">
        <div className="slider-container slider-about">
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
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {/* Slides */}

            <SwiperSlide className="pb-20">
              <ClientCardComponent
                image="/quote.jpg"
                body={
                  <>
                    <p>
                      <strong>Company: </strong> A small rural hospital
                      <br />
                      <strong>Challenge: </strong> Difficulty in managing
                      patient records and scheduling appointments due to
                      outdated systems
                      <br />
                      <strong>Solution: </strong> Implemented an Electronic
                      Health Record (EHR) system integrated with telemedicine
                      capabilities
                      <br />
                      <strong>Outcome: </strong>Improved patient care, reduced
                      medical errors, increased patient satisfaction, and
                      expanded access to healthcare services in remote areas.
                    </p>
                  </>
                }
                imgClass="w-14"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ClientCardComponent
                image="/quote.jpg"
                body={
                  <>
                    <p>
                      <strong>Company: </strong> A small rural hospital
                      <br />
                      <strong>Challenge: </strong> Difficulty in managing
                      patient records and scheduling appointments due to
                      outdated systems
                      <br />
                      <strong>Solution: </strong> Implemented an Electronic
                      Health Record (EHR) system integrated with telemedicine
                      capabilities
                      <br />
                      <strong>Outcome: </strong>Improved patient care, reduced
                      medical errors, increased patient satisfaction, and
                      expanded access to healthcare services in remote areas.
                    </p>
                  </>
                }
                imgClass="w-14"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ClientCardComponent
                image="/quote.jpg"
                body={
                  <>
                    <p>
                      <strong>Company: </strong> A small rural hospital
                      <br />
                      <strong>Challenge: </strong> Difficulty in managing
                      patient records and scheduling appointments due to
                      outdated systems
                      <br />
                      <strong>Solution: </strong> Implemented an Electronic
                      Health Record (EHR) system integrated with telemedicine
                      capabilities
                      <br />
                      <strong>Outcome: </strong>Improved patient care, reduced
                      medical errors, increased patient satisfaction, and
                      expanded access to healthcare services in remote areas.
                    </p>
                  </>
                }
                imgClass="w-14"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ClientCardComponent
                image="/quote.jpg"
                body={
                  <>
                    <p>
                      <strong>Company: </strong> A small rural hospital
                      <br />
                      <strong>Challenge: </strong> Difficulty in managing
                      patient records and scheduling appointments due to
                      outdated systems
                      <br />
                      <strong>Solution: </strong> Implemented an Electronic
                      Health Record (EHR) system integrated with telemedicine
                      capabilities
                      <br />
                      <strong>Outcome: </strong>Improved patient care, reduced
                      medical errors, increased patient satisfaction, and
                      expanded access to healthcare services in remote areas.
                    </p>
                  </>
                }
                imgClass="w-14"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ClientCardComponent
                image="/quote.jpg"
                body={
                  <>
                    <p>
                      <strong>Company: </strong> A small rural hospital
                      <br />
                      <strong>Challenge: </strong> Difficulty in managing
                      patient records and scheduling appointments due to
                      outdated systems
                      <br />
                      <strong>Solution: </strong> Implemented an Electronic
                      Health Record (EHR) system integrated with telemedicine
                      capabilities
                      <br />
                      <strong>Outcome: </strong>Improved patient care, reduced
                      medical errors, increased patient satisfaction, and
                      expanded access to healthcare services in remote areas.
                    </p>
                  </>
                }
                imgClass="w-14"
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
