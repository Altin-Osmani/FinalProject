import React from 'react'
import ServiceHero from '../elements/ServiceHero'
import ServiceCards from '../ServiceCards';

export default function Services5() {

  const services = [
    {
      title: 'Customized Content',
      body: 'Tailor training materials to different roles within the organization to ensure relevance and engagement.',
    },
    {
      title: 'Regular Training Sessions',
      body: 'Conduct training sessions every four to six months, as retention of knowledge tends to decline after this period.',
    },
    {
      title: 'Diverse Learning Methods',
      body: 'Utilize various formats such as videos, quizzes, and simulations to cater to different learning styles and keep content engaging.',
    },
    {
      title: 'Phishing Simulations',
      body: 'Regularly test employees with simulated phishing attacks to reinforce learning and gauge awareness levels.',
    },
  ];
  

  return (
    <>
    <ServiceHero
      orangeTitle='Security'
      title='Awareness Training'
      body='"Empower your employees to recognize and respond to potential cyber threats. Our comprehensive security awareness programs equip your workforce with the knowledge they need to prevent attacks."'
      btnTxt='Get a Demo'
    />
         {/* Cards */}
<ServiceCards cards={services} />

<div className=' text-white bg-cybergray flex justify-center'>
  <div className='container px-40 text-2xl py-20'>
<p className='text-center text-cyberorange'>Security Awareness Training: Importance and Best Practices</p>
<br/>
<p>Security awareness training is a strategic initiative aimed at educating employees about cybersecurity risks and best practices. By enhancing awareness, organizations can significantly reduce the likelihood of security breaches caused by human error.</p>
<br/>
<p className='text-center text-cyberorange'>Objectives of Security Awareness Training</p>
<br/>
<p>Educate Employees: Teach staff about the importance of cybersecurity and their role in protecting organizational assets.
Reduce Human Error: Equip employees with the knowledge to recognize and respond to potential threats, thus minimizing incidents caused by negligence.
Cultivate a Cybersecurity Mindset: Foster a culture of security where employees feel responsible for safeguarding sensitive information.</p>
<br/>
<br/>
<p className='text-center text-cyberorange'>Best Practices for Implementation</p>
<br/>
<p>Onboarding Training: Integrate security awareness training into the onboarding process for new employees to establish a security-first culture from the start.
Continuous Learning: Provide ongoing education through newsletters, updates on emerging threats, and refresher courses throughout the year.
Positive Reinforcement: Use humor and engaging content rather than fear-based tactics to improve retention and participation in training programs.
Measure Effectiveness: Implement metrics to assess the impact of training, such as tracking phishing susceptibility rates before and after training sessions
</p>
<br/>
<br/>
<br/>
<p className='text-center text-cyberorange'>Conclusion</p>
<br/>
<p>Security awareness training is essential for building a resilient organizational culture against cyber threats. By educating employees on best practices and fostering a proactive approach to cybersecurity, organizations can significantly mitigate risks associated with human error. Regularly updated training programs that engage employees will help maintain high levels of awareness and readiness against evolving cyber threats.</p>
  </div>
  </div>
      </>
  )
}
