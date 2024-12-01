import React from 'react'

export default function NewsletterHero() {
  return (
    <>
     <div className="flex w-full !min-h-[65vh]  bg-[url('/HeroBG/newsletterHero.jpg')] bg-cover bg-center mx-auto items-end p-10">
        <div className="container w-full mx-auto flex justify-between">
            <div className="w-1/4 p-10"></div>
            <div className="w-3/4">
                <span className='text-3xl font-semibold'>Phishing Attacks and Prevention Strategies.</span>
                <h1 className='text-3xl md:text-8xl font-bold'>
                The Evolving Landscape of Phishing Attacks: What You Need to Know
                </h1>
                <div className="flex justify-start space-x-6 mt-10">
                    <span>Posted: October 20, 2024</span> <span className='text-cyberorange'>By: Cybersecurity Insights Team</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
