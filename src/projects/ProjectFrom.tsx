import React,{SyntheticEvent, useState} from "react";
import { Project } from "./Project";

interface ProjectFromProps{
  onSave: (project: Project) => void;
  onCancel: () => void;
  project: Project;
}

function ProjectFrom({ onSave,onCancel, project: initialProject}: ProjectFromProps){

  const[project, setProject] = useState(initialProject);
  const[errors, setErrors] = useState({
    name:'',
    description:'',
    budget:'',
  });

  const handleChange = (event: any) => {
    const {type, name, value, checked} = event.target;
    let updatedValue = type === 'checkbox' ? checked :value;

    if(type === 'number'){
      updatedValue = Number(updatedValue);
    }

    const change = {
      [name]: updatedValue,
    }

    let updatedProject: Project;
    setProject((p) => {
      updatedProject = new Project({...p, ...change});
      return updatedProject;
    })
    setErrors(() => validate(updatedProject));
  };

  const handleSubmit = (event: SyntheticEvent) =>{
    event.preventDefault();
    // onSave(new Project({name: 'Updated Project'}));
    // console.log(isValid());
    if (!isValid()) return;
    onSave(project);
    // return true;
  };

  function validate(project: Project){
    let errors: any = {name: '', description:'', budget:''};
    if(project.name.length === 0){
      errors.name = 'Name is required';
    }

    if(project.name.length > 0 && project.name.length < 3){
      errors.name = 'Name need to be at 3 characters.'
    }

    if(project.description.length === 0){
      errors.description = 'Descrition is required.';
    }

    if(project.budget === 0){
      errors.budget = 'Budget must be more than $0.'
    }
    return errors;
  }

  function isValid(){
    return(
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.description.length === 0
    );
  }

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={project.name}
        onChange={handleChange}
      />
      {errors.name.length > 0 && (
        <div className="card error">
          <p>{errors.name}</p>
        </div>
      )}

      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        placeholder="enter description"
        value={project.description}
        onChange={handleChange}
      />
      {errors.description.length > 0 && (
        <div className="card error">
          <p>{errors.description}</p>
        </div>
      )}

      <label htmlFor="budget">Project Budget</label>
      <input
        type="number"
        name="budget"
        placeholder="enter budget"
        value={project.budget}
        onChange={handleChange}
      />
      {errors.budget.length > 0 && (
        <div className="card error">
          <p>{errors.budget}</p>
        </div>
      )}

      <label htmlFor="isActive">Active?</label>
      <input
        type="checkbox"
        name="isActive"
        checked={project.isActive}
        onChange={handleChange}
      />
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered medium" onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectFrom;


