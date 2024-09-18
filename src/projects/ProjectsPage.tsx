import React,{Fragment,useState} from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import { Project } from "./Project";
import ProjectList from "./ProjectList";

function ProjectsPage(){
    const [projects,setProjects] = useState<Project[]>(MOCK_PROJECTS);
    const saveProject = (project: Project) => {
        // console.log("Saving project:", project);
        let updatedProject = projects.map((p: Project) =>{
            return p.id === project.id ? project : p;
        });
        setProjects(updatedProject);
        console.log("project", updatedProject);
    }
    
    // second
    return(
        <>
            <h1>FNGU.D</h1>
            <ProjectList onSave={saveProject} projects={projects}></ProjectList>
        </>
    )
}

export default ProjectsPage;