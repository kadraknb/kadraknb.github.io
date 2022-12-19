import React, { useContext } from 'react'
import ListaProjetos from './listaProjetos'
import './projectList.css'
import Context from '../../context/Context';


function ProjectList () {
  const { windowWidth } = useContext(Context);

    const ajusteTela = {
      height: windowWidth < 1000 ? `1${(1100 - windowWidth) / 10}%` : 100 + '%'
  };
  return (
    <div className="listProject " style={ajusteTela}>
      <h2 className="h2Title projListTitle">projetos</h2>
      <ListaProjetos />
    </div>
  )
}

export default ProjectList
