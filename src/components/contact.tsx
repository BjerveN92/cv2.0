import { useState, useEffect } from "react";

interface ContactData {
    Fullname : string,
    Gmail : string,
    Github : string,
    Linkedin : string,
    Cellphone : string
}

export const Contact = () => {
    const [contactData, setContactData] = useState<ContactData[]>([]);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch("/data/contactData.json");
                const data = await response.json();
                setContactData(data);
            } catch (error) {
                console.error("du kan inte se min kontaktdata..fel med fetchen :(", error)
            }
        };
        fetchData();
    }, []);

    return (
  <div className="section">
    {contactData.map((contact, idx) => (
      <div key={idx} className="contact-icon-container">
        <a href={contact.Linkedin} target="_blank" rel="noopener noreferrer">
          <img className="contact-icon" src="/data/icons8-linkedin-480.png" alt="LinkedIn" role="button"/>
        </a>
        <a href={`mailto:${contact.Gmail}`}>
          <img className="contact-icon" src="/data/icons8-gmail-logo-375.png" alt="Gmail"/>
        </a>
        <a href={contact.Github} target="_blank" rel="noopener noreferrer">
          <img className="contact-icon" src="/data/icons8-github-250-white.png" alt="GitHub"/>
        </a>
      </div>
    ))}
  </div>
    );
};