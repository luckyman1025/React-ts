import React from 'react';
import './App.css';
import '../node_modules/mini.css/dist/mini-default.min.css'
import ProjectsPage from './projects/ProjectsPage'


function App() {
  // return (
  //   <blockquote cite="Benjamin FrankLin">
  //     Tell me and I forget, teach me and I may remember, involve me and I learn.
  //   </blockquote>
  // );
  return(
    <div className='container'>
      <ProjectsPage/>
    </div>
  );

}

export default App;
