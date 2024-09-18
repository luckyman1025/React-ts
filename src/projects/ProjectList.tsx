import React, { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectFrom from './ProjectFrom';

interface ProjectListProps {
  projects: Project[];
  onSave : (project: Project) => void;
}

function ProjectList({ projects , onSave }: ProjectListProps) {

  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  }

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  const items = projects.map((project => 
    <div key={project.id} className="row">
      <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
      <ProjectFrom project={project} onSave={onSave} onCancel={cancelEditing}></ProjectFrom>
    </div>
  ));
  return <div className='row'>{items}</div>
  }

export default ProjectList;