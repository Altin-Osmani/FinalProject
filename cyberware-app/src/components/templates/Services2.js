import React from 'react'
import ServiceHero from '../elements/ServiceHero'
import ServiceCards from '../ServiceCards';

export default function Services2() {
  
  const services = [
    {
      title: 'Reconnaissance',
      body: 'Gathering information about the target system, which may include identifying network services and potential entry points.',
    },
    {
      title: 'Scanning',
      body: 'Using tools to discover live hosts, open ports, and services running on those ports. This phase helps in mapping the attack surface.',
    },
    {
      title: 'Gaining Access',
      body: 'Exploiting identified vulnerabilities using various tools and techniques to gain unauthorized access to the system.',
    },
    {
      title: 'Maintaining Access',
      body: 'Establishing a persistent presence within the target environment to gather further data and assess the extent of control that can be achieved.',
    },
  ];

    return (
  <>
 
<ServiceHero
  orangeTitle='Penetration'
  title='Testing'
  body='"Identify and eliminate vulnerabilities in your network with our comprehensive penetration testing services."'
  btnTxt='Get a Demo'
/>

{/* Cards */}
<ServiceCards cards={services} />
<div className=' text-white bg-cybergray flex justify-center'>
  <div className='container px-40 text-2xl py-20'>
<p className='text-center text-cyberorange'>Overview of Penetration Testing</p>
<br/>
<p>Penetration testing, often referred to as "pentesting," is an authorized simulated cyberattack on a computer system, designed to evaluate its security. Unlike vulnerability assessments, which merely identify potential weaknesses, penetration tests actively exploit vulnerabilities to demonstrate their impact and assess the overall security posture of the system.</p>
<br/>
<p className='text-center text-cyberorange'>Purpose and Importance</p>
<br/>
<p>The primary goal of penetration testing is to identify and address security vulnerabilities before they can be exploited by malicious actors. By simulating real-world attacks, organizations can understand their weaknesses and implement necessary defenses. Regular penetration testing is crucial for maintaining robust cybersecurity measures, especially in light of increasing cyber threats.</p>
<br/>
<br/>
<p className='text-center text-cyberorange'>Types of Penetration Testing</p>
<br/>
<p>Different types of penetration tests focus on various aspects of an organization's security:
</p>
<br/>
<ul>
 <li>1. Web Application Testing: Evaluates web applications for vulnerabilities such as SQL injection and cross-site scripting (XSS).</li>
 <li>2. Internal Network Testing: Assesses vulnerabilities from within the network, simulating an insider threat.</li>
<li> 3. External Network Testing: Identifies vulnerabilities that could be exploited from outside the organization.</li>
 <li> 4. Social Engineering Testing: Tests employees' susceptibility to phishing and other social engineering tactics.</li>
 <li> 5. Wireless Network Testing: Examines the security of wireless networks against unauthorized access.</li>
</ul>
<br/>
<br/>
<p className='text-center text-cyberorange'>Conclusion</p>
<br/>
<p>Penetration testing is an essential component of a comprehensive cybersecurity strategy. By simulating attacks and identifying vulnerabilities, organizations can take proactive measures to strengthen their defenses against real-world threats. Regularly scheduled penetration tests not only enhance security but also ensure compliance with industry regulations, ultimately protecting sensitive data and maintaining trust with stakeholders.</p>
  </div>
  </div>
  </>
    )
}
