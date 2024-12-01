import React from "react";
import JobCardComponent from "../elements/JobCardComponent";

export default function Jobs() {

    const jobs = [
        {
          title: "Cybersecurity Analyst",
          date: "1 May, 2024",
          description:
            "Join our team as a Cybersecurity Analyst, where you will monitor and analyze security systems to identify vulnerabilities and respond to incidents, ensuring our organization's data remains secure.",
          workTypes: ["Full-Time", "On-Site", "Hybrid"],
        },
        {
          title: "Security Engineer",
          date: "10 May, 2024",
          description:
            "We are seeking a Security Engineer to design and implement robust security solutions that protect our infrastructure and data from cyber threats.Your expertise will be crucial in developing innovative security architectures and staying ahead of evolving risks.",
          workTypes: ["Full-Time", "On-Site", "Hybrid"],
        },
        {
          title: "Penetration Tester",
          date: "1 June, 2024",
          description:
            "As a Penetration Tester, you will simulate attacks to identify and exploit vulnerabilities, providing critical insights to enhance our security posture.",
          workTypes: ["Full-Time", "On-Site", "Hybrid"],
        },
        {
          title: "Incident Response Specialist",
          date: "10 June, 2024",
          description:
            "Join us as an Incident Response Specialist, where you will manage and respond to security incidents, conducting investigations and implementing strategies to mitigate future threats.",
          workTypes: ["Full-Time", "On-Site", "Hybrid"],
        },
        {
          title: "Threat Intelligence Analyst",
          date: "1 June, 2024",
          description:
            "We are looking for a Threat Intelligence Analyst to gather and analyze threat data, helping us stay ahead of emerging cyber threats.",
          workTypes: ["Full-Time", "On-Site", "Hybrid"],
        },
        {
          title: "Information Security Officer",
          date: "10 June, 2024",
          description:
            "We are seeking an Information Security Officer to lead our security initiatives, develop policies, and ensure compliance.",
          workTypes: ["Full-Time", "On-Site", "Hybrid"],
        },
      ];
      
  return (
    <>
     <div className="w-full mx-auto max-w-screen-2xl  py-10">
        <div className="container flex w-full !min-h-[65vh] bg-white items-center justify-center ">
            <div className="flex flex-col text-center ">
                <h1 className="text-3xl md:text-8xl font-bold text-cyberorange text-center leading-tight">
                    Join Our Team{" "}
                    <span className="text-black font-medium">of Cybersecurity</span>
                    <br /> <span className="text-black font-medium"> Innovators</span>
                </h1>
                <span className="text-black font-semibold text-3xl leading-loose">
                    Protecting the Digital World, One Threat at a Time
                </span>
            </div>
        </div>
      </div>
      <div className="w-full mx-auto max-w-screen-2xl container pb-24">
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-10 space-y-10 md:space-y-0">
            <div className="flex items center justify-between border border-cyberorange py-1.5 px-4 w-full md:w-1/6">Job title  
                <span className="cursor-pointer">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7 10 5 5 5-5" stroke="#000" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
            <div className="flex items center justify-between border border-cyberorange py-1.5 px-4 w-full md:w-1/6">Salary Range 
                <span className="cursor-pointer">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7 10 5 5 5-5" stroke="#000" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
    
            </div>
            <div className="flex items center justify-between border border-cyberorange py-1.5 px-4 w-full md:w-1/6">Posted Date 
                <span className="cursor-pointer">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7 10 5 5 5-5" stroke="#000" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {jobs.map((job, index) => (
          <JobCardComponent
            key={index}
            title={job.title}
            date={job.date}
            description={job.description}
            workTypes={job.workTypes}
          />
        ))}
      </div>
    </div>
    </>
  );
}
