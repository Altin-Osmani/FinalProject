"use client";

export default function CertCardComponent({ Icon, title, body }) {
  return (
    <div className="w-full h-auto p-4 md:p-6 lg:p-[30px] bg-[#292929] flex flex-col gap-6 justify-between items-center md:gap-8 border-b-2 border-white">
      <div className="w-full h-auto flex flex-col justify-center items-center text-center gap-4 md:gap-6">
        {/* Render the Icon */}
        {Icon && (
          <div>
            {typeof Icon === "function" ? (
              <Icon className="w-full h-full" />
            ) : (
              <img src={Icon} alt={title} className="w-full h-full" />
            )}
          </div>
        )}

        <div className="w-full text-white text-balance text-xl md:text-2xl font-bold leading-normal md:leading-[30px]">
          {title}
        </div>
        <div className="w-full text-white text-sm md:text-base !font-light leading-relaxed">
          {body}
        </div>
      </div>

      <button className="w-2/3 h-auto py-2 bg-[#ff6f0f] flex justify-center items-center">
        <div className="text-white text-sm md:text-base font-bold leading-tight">
          See More
        </div>
      </button>
    </div>
  );
}
