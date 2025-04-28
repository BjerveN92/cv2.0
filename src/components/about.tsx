import { useEffect, useState } from "react";

export const About = () => {
    const [aboutData, setAboutData] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/aboutData.json");
                const data = await response.json();
                setAboutData(data[0].about);
            } catch (error) {
                console.error("Det går inte att fetcha data", error)
            }
        };
        fetchData();
    }, []);

    return (
        <div className="section">
            <h1 className="section-title">Om mig</h1>
                <div className="entry-card">
                    {aboutData.map((paragraph, index) => (
                    <p className="entry-description" key={index}>{paragraph}</p>
                    ))}
                </div>
       </div>
    );
};