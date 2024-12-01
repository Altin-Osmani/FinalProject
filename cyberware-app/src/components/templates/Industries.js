import React from 'react'
import IndustriesCard from '@/components/IndustriesCard';
import CoverIndustry from '../CoverIndustry';

export default function Industries() {
  return (
    <>
    <div className="container mx-auto px-4 py-12 space-y-8 w-full">
      <IndustriesCard
        Icon="/people/path15@2x.png"
        title="Healthcare"
        body="Cyber services in the health sector are crucial for protecting sensitive patient data and ensuring the integrity of healthcare systems. The healthcare industry faces significant cybersecurity challenges, including outdated software, inadequate network protections, and a lack of employee training, making it a prime target for cybercriminals. Common threats include ransomware attacks, phishing schemes, and vulnerabilities in Internet of Medical Things (IoMT) devices. Effective cybersecurity measures must include robust data protection protocols, regular security audits, and comprehensive employee training to foster awareness. Additionally, implementing advanced technologies like threat intelligence can help healthcare organizations anticipate and mitigate risks. As the sector continues to evolve, prioritizing cybersecurity is essential to safeguard patient safety and maintain trust in healthcare services."
      />

      <IndustriesCard
        Icon="/people/path13.png"
        title="eGame"
        body="Cyber services for the eGaming industry are increasingly vital due to a surge in cyber threats, including Distributed Denial-of-Service (DDoS) attacks, data breaches, and account fraud. Recent reports indicate a staggering increase in bot activity and web attacks, with a 94% rise in web attacks from Q1 2023 to Q1 2024, particularly during major gaming events. The industry also faces challenges from social engineering tactics and malware, which can compromise player data and disrupt gameplay. Effective cybersecurity measures must include robust encryption protocols, real-time threat intelligence, and regular security audits to protect sensitive information and maintain player trust. Additionally, fostering a culture of security awareness among developers and gamers is essential to mitigate risks and ensure a safe gaming environment. As the landscape evolves, prioritizing cybersecurity will be crucial for safeguarding both players and the integrity of gaming platforms."
      />

      <IndustriesCard
        Icon="/people/path11.png"
        title="eGame"
        body="Cyber services for the eGaming industry are increasingly vital due to a surge in cyber threats, including Distributed Denial-of-Service (DDoS) attacks, data breaches, and account fraud. Recent reports indicate a staggering increase in bot activity and web attacks, with a 94% rise in web attacks from Q1 2023 to Q1 2024, particularly during major gaming events. The industry also faces challenges from social engineering tactics and malware, which can compromise player data and disrupt gameplay. Effective cybersecurity measures must include robust encryption protocols, real-time threat intelligence, and regular security audits to protect sensitive information and maintain player trust. Additionally, fostering a culture of security awareness among developers and gamers is essential to mitigate risks and ensure a safe gaming environment. As the landscape evolves, prioritizing cybersecurity will be crucial for safeguarding both players and the integrity of gaming platforms."
      />

      <IndustriesCard
        Icon="/people/path9.png"
        title="eGame"
        body="Cyber services for the eGaming industry are increasingly vital due to a surge in cyber threats, including Distributed Denial-of-Service (DDoS) attacks, data breaches, and account fraud. Recent reports indicate a staggering increase in bot activity and web attacks, with a 94% rise in web attacks from Q1 2023 to Q1 2024, particularly during major gaming events. The industry also faces challenges from social engineering tactics and malware, which can compromise player data and disrupt gameplay. Effective cybersecurity measures must include robust encryption protocols, real-time threat intelligence, and regular security audits to protect sensitive information and maintain player trust. Additionally, fostering a culture of security awareness among developers and gamers is essential to mitigate risks and ensure a safe gaming environment. As the landscape evolves, prioritizing cybersecurity will be crucial for safeguarding both players and the integrity of gaming platforms."
      />

      <IndustriesCard
        Icon="/people/path7.png"
        title="eGame"
        body="Cyber services for the eGaming industry are increasingly vital due to a surge in cyber threats, including Distributed Denial-of-Service (DDoS) attacks, data breaches, and account fraud. Recent reports indicate a staggering increase in bot activity and web attacks, with a 94% rise in web attacks from Q1 2023 to Q1 2024, particularly during major gaming events. The industry also faces challenges from social engineering tactics and malware, which can compromise player data and disrupt gameplay. Effective cybersecurity measures must include robust encryption protocols, real-time threat intelligence, and regular security audits to protect sensitive information and maintain player trust. Additionally, fostering a culture of security awareness among developers and gamers is essential to mitigate risks and ensure a safe gaming environment. As the landscape evolves, prioritizing cybersecurity will be crucial for safeguarding both players and the integrity of gaming platforms."
      />
    </div>
    <div className="p2 border-t-4 border-cyberorange">
      <CoverIndustry
        title="Not sure if we cover your industry?"
        description="Cyber threats are constantly evolving, and every industry faces unique challenges. If you don't see your sector listed or want to learn more about how we can tailor our solutions to your specific needs, we're here to help. Contact us today, and let's discuss how we can protect your business."
        placeholder="Your Email Address"
        buttonText="Discuss Your Security Needs"
      />
  
    </div>
  </>
  )
}
