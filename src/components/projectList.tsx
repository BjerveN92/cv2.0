import { useState, useEffect } from "react";

interface ProjectData {
    id: number,
    name: string,
    description: string,
    url: string
}

export const ProjectList = () => {
    const [projectData, setProjectData] = useState<ProjectData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("data/projectData.json");
                const data = await response.json();
                setProjectData(data);
            } catch (error) {
                console.error("du kan inte se mina projekt..fel med fetchen :(")
            }
        };
        fetchData();
    }, []);

    return (
        <div className="section">
            <h1 className="section-title">Projekt</h1>
                {projectData.map((project) => (
                    <div key={project.id} className="entry-card">
                        <h2 className="entry-title">{project.name}</h2>
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="probutton">
                            {project.url}
                        </a>
                        <p className="entry-description">{project.description}</p>
                    </div>
                ))}
        </div>        
    );
};

