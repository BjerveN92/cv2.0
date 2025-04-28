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
                const response = await fetch("/src/data/contactData.json");
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
            <h1 className="section-title">Kontakt</h1>
            {contactData.length > 0 && (
            <div className="entry-card">
                <p className="entry-description"><strong className="entry-title">Fullname:</strong> {contactData[0].Fullname}</p>
                <p className="entry-description"><strong className="entry-title">Gmail:</strong> {contactData[0].Gmail}</p>
                <p className="entry-description"><strong className="entry-title">Github:</strong> <a href={contactData[0].Github} target="_blank" rel="noopener noreferrer">{contactData[0].Github}</a></p>
                <p className="entry-description"><strong className="entry-title">Linkedin:</strong> <a href={contactData[0].Linkedin} target="_blank" rel="noopener noreferrer">{contactData[0].Linkedin}</a></p>
                <p className="entry-description"><strong className="entry-title">Cellphone:</strong> {contactData[0].Cellphone}</p>
            </div>
            )}
        </div>
    );
};