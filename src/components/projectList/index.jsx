import React, { useContext } from 'react'
import ListaProjetos from './listaProjetos'
import './projectList.css'
import Context from '../../context/Context';


function ProjectList () {
  const { ajusteTelaWidth } = useContext(Context);

  return (
    <div id="list_proj_main " style={ajusteTelaWidth}>
      {/* <h2 className="h2Title projListTitle">projetos</h2> */}
      <ListaProjetos />
    </div>
  )
}

export default ProjectList
