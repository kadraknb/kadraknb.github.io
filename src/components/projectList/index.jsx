import React, { useContext, useState } from 'react'
// import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Context from '../../context/Context'

import ProjectDetail from './projectDetail'
import projectList from '../../services/getProjectList'

function ProjectList () {
  const [selectedProject, setSelectedProject] = useState()
  const { showDetalhe, setShowDetalhe } = useContext(Context)
  const { iconTecFocada } = useContext(Context)

  return (
    <div className="listProject ">
      <h2 className="h2Title projListTitle">projetos</h2>

      <ul className="ulProj">
        {projectList.map((project, index) => (
          <li
            key={index}
            className={`liProj hover-proj ${
              project.listTec.includes(iconTecFocada) && 'ListP_IconFoco'
            }`}
          >
            <Card className="efeito-vidro" /* style={{ width: '10rem' }} */>
              <Card.Img className="imgLP" variant="top" src={project.icon} />
              <Card.Body>
                <Card.Title className="ProjList_li_nome">
                  {project.name}
                </Card.Title>
                <Card.Text className="ProjList_li_txt">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </Card.Text>
                <button
                  className="ProjList_li_BT"
                  onClick={() => {
                    setSelectedProject(index)
                    !showDetalhe && setShowDetalhe(!showDetalhe)
                  }}
                >
                  Mais detalhe
                </button>
                {/* <Button className='ProjList_li_BT' variant="primary">Mais detalhe</Button> */}
              </Card.Body>
            </Card>
            {/* <img src={project.icon} alt="project icon" className="imgLP" />
            <p className="projListTitle p-li-title">
              {project.name}
              <hr className="p-li-hr" />
            </p> */}
            {selectedProject === index && (
              <ProjectDetail
                setSelectedProject={setSelectedProject}
                project={project}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectList
