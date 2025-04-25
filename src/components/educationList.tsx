import {useState, useEffect} from "react";

interface EducationData {
    id: number,
    name: string,
    location: string,
    "date&year": string,
    description: string
}
export const Educationlist = () => {
    const [educationData, setEducationData] = useState<EducationData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/src/data/educationData.json");
                const data = await response.json();
                setEducationData(data);
            } catch (error) {
                console.error("du kan inte se mina jobb..fel med fetchen :D", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="section">
            <h1 className="section-title">Education</h1>
                {educationData.map((edu) => (
                    <div key={edu.id} className="entry-card">
                        <h2 className="entry-title">{edu.name}</h2>
                        <p className="entry-location">{edu.location}</p>
                        <p className="entry-dates">
                        {Array.isArray(edu["date&year"])
                            ? edu["date&year"].join(", ")
                            : edu["date&year"]}
                        </p>
                        {Array.isArray(edu.description) ? (
                                <ul className="entry-description">
                                    {edu.description.map((desc, index) =>( 
                                        <div key={index}>{desc}</div>
                                    ))}
                                </ul>
                        ) : (
                            <p className="entry-description">{edu.description}</p>
                        )}
                    </div>
                ))}
        </div>        
    );
};