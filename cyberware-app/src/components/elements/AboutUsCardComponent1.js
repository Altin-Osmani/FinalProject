"use client";

export default function AboutUsCardComponent1({ Icon, title, body }) {
  return (
    <div className="w-full h-auto p-4 md:p-8 lg:p-10 bg-cybergray flex flex-col justify-start items-start gap-6 md:gap-8">
      <div className="w-full h-auto flex flex-col justify-start items-start gap-4 md:gap-6 space-y-6">
        {/* Render the Icon */}
        {Icon && (
          <div className="">
            {typeof Icon === "function" ? (
              <Icon className="w-full h-full" />
            ) : (
              <img src={Icon} alt={title} className="w-full h-full" />
            )}
          </div>
        )}

        <div className="w-full text-white text-2xl md:text-3xl font-bold leading-normal md:leading-[30px]">
          {title}
        </div>
        <div className="w-full text-white text-sm md:text-base font-normal leading-relaxed">
          {body}
        </div>
      </div>
    </div>
  );
}
