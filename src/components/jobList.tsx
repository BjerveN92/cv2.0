import { useEffect, useState } from "react";

interface WorkEntry {
    id: number;
    companyName: string;
    location: string;
    "date&year": string | string[];
    description: string | string[];
}
export const Joblist = () => {
    const [workData, setWorkData] = useState<WorkEntry[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/src/data/workData.json");
                const data = await response.json();
                setWorkData(data);
            } catch (error) {
                console.error("du kan inte se mina jobb..fel med fetchen :D", error)
            }
        };
        fetchData();
    }, []);

    return (
        <div className="section">
            <h1 className="section-title">Arbetslivserfarenhet</h1>
                {workData.map((job) => (
                    <div key={job.id} className="entry-card">
                        <h2 className="entry-title">{job.companyName}</h2>
                        <p className="entry-location">{job.location}</p>
                        <p className="entry-dates">
                            {Array.isArray(job["date&year"])
                            ? job["date&year"].join(", ")
                            : job["date&year"]}
                        </p>
                            {Array.isArray(job.description) ? (
                                <ul className="entry-description">
                                    {job.description.map((desc, index) =>( 
                                        <div key={index}>{desc}</div>
                                    ))}
                                </ul>
                        ) : (
                            <p className="entry-description">{job.description}</p>
                        )}
                    </div>
                ))}
        </div>
    );
};