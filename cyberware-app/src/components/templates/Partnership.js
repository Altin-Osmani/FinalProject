import React from "react";
import PartnersCard1Component from "../elements/PartnersCard1Component";
import PartnersCard2Component from "../elements/PartnersCard2Component";
import PartnersCard3Component from "../elements/PartnersCard3Component";
import QuotesCardComponent from "../elements/QuotesCardComponent";

export default function Partnership() {
  return (
    <>
      <div className="flex w-full !min-h-[55vh] bg-cybergray mx-auto items-center justify-between p-10 ">
        <div className="container  w-full mx-auto flex flex-col justify-between text-center  max-w-screen-xl ">
          <h1 className="text-3xl md:text-8xl !font-normal text-white text-center leading-tight pb-10">
            Meet Our{" "}
            <span className="text-cyberorange !font-bold">Partners</span>
            <br /> &{" "}
            <span className="text-cyberorange !font-bold">Collaborations</span>
          </h1>
          <span className="text-white">
            At Cyberware Global Defense, we are proud to collaborate with the
            following industry leaders and organizations to provide the best
            cybersecurity solutions to our clients:
          </span>
        </div>
      </div>
      <div className="bg-cybergray">
        <div className="w-full mx-auto max-w-screen-xl container px-10 pt-10 pb-24">
          <div className="space-y-8 md:space-y-24 mb-10">
            <PartnersCard1Component
              img1="/partners1.jpg"
              img2="/partners2.jpg"
              title="Partnership with"
              orangetitle="Brainster"
              body="Our partnership with Brainster enables us to recruit and train the next generation of cybersecurity professionals. Together, we bring fresh ideas and cutting-edge solutions to the forefront of cyber defense. By combining Brainster’s forward-thinking education programs with our industry expertise, we are building a stronger, more resilient cybersecurity workforce. This collaboration ensures that our team stays ahead of emerging threats, equipped with the skills and knowledge to protect businesses and individuals in an ever-evolving digital landscape."
            />

            <PartnersCard2Component
              img="/partners3.jpg"
              title="Partnership with"
              orangetitle="Azure"
              body="Lorem ipsum dolor sit amet consectetur. Tristique dignissim dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut convallis ac neque tristique faucibus integer. Amet donec maecenas vitae sollicitudin neque mauris etiam. Nibh dictum id ut vestibulum mattis neque cursus. Tortor eleifend egestas et lorem. Enim nisi non parturient malesuada sed. Scelerisque massa amet ut diam amet aliquam pulvinar aliquet. Lectus urna pellentesque eget lorem sed phasellus eget diam. Fermentum orci interdum ornare libero velit at pellentesque."
            />

            <PartnersCard3Component
              img="/partners4.jpg"
              title="Partnership with"
              orangetitle="Azure"
              body="Lorem ipsum dolor sit amet consectetur. Tristique dignissim dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut convallis ac neque tristique faucibus integer. Amet donec maecenas vitae sollicitudin neque mauris etiam. Nibh dictum id ut vestibulum mattis neque cursus. Tortor eleifend egestas et lorem. Enim nisi non parturient malesuada sed. Scelerisque massa amet ut diam amet aliquam pulvinar aliquet. Lectus urna pellentesque eget lorem sed phasellus eget diam. Fermentum orci interdum ornare libero velit at pellentesque."
            />

            <PartnersCard1Component
              img1="/partners1.jpg"
              img2="/partners5.jpg"
              title="Partnership with"
              orangetitle="Azure"
              body="Lorem ipsum dolor sit amet consectetur. Tristique dignissim dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut convallis ac neque tristique faucibus integer. Amet donec maecenas vitae sollicitudin neque mauris etiam. Nibh dictum id ut vestibulum mattis neque cursus. Tortor eleifend egestas et lorem. Enim nisi non parturient malesuada sed. Scelerisque massa amet ut diam amet aliquam pulvinar aliquet. Lectus urna pellentesque eget lorem sed phasellus eget diam. Fermentum orci interdum ornare libero velit at pellentesque."
            />
          </div>
          <div className="flex items-center justify-center">
            <span className="text-cyberorange px-10  py-1 border-b border-cyberorange justify-self-center cursor-pointer">
              View All Partners
            </span>
          </div>
        </div>
      </div>
      <div className="bg-cybergray border-cyberorange border-t-4">
        <div className="w-full mx-auto max-w-screen-xl container px-10 pt-10 pb-24">
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="flex w-2/3 items-center text-white text-4xl">
            <QuotesCardComponent
                image="/people/image1.png"
                person="Emily R"
                imgClass="w-64"
              />
            </div>
            <div className="flex flex-col w-1/3 items-center text-white">
            <QuotesCardComponent
                image="/people/image2.png" 
                person="Linda T"
                imgClass="w-14"
              />
               <QuotesCardComponent
                image="/people/image3.png"
                person="Jessica M. "
                imgClass="w-14"
              />
            </div>
          </div>
        </div> 
      </div>
    </>
  );
}
