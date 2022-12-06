import React, { useContext, useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

import Context from '../../context/Context'
import projectList from '../../services/getProjectList'
import ProjectDetail from './projectDetail'

function ListaProjetos () {
  const { showDetalhe, setShowDetalhe, iconTecFocada } = useContext(Context)
  const [selectedProject, setSelectedProject] = useState()
  const [load, setLoad] = useState(false)
  useEffect(() => seila(), [])
  const seila = () => {
    setTimeout(() => setLoad(true), 1000)
  }
  return (
    <ul className="ulProj">
        {projectList.map((project, index) => (
          <li
            key={index}
            className={`liProj hover-proj ${!load && 'load'} ${
              project.listTec.includes(iconTecFocada) && 'ListP_IconFoco'
            }`}
          >
            <Card className="efeito-vidro">
              <Card.Img className="imgLP" variant="top" src={project.icon} />
              <Card.Body>
                <Card.Title className="ProjList_li_nome">
                  {project.name}
                </Card.Title>
                <Card.Text className="ProjList_li_txt">
                  {project.descriptionShort}
                </Card.Text>
                <button
                  className={`ProjList_li_BT ${!load && 'load'}`}
                  onClick={() => {
                    setSelectedProject(index)
                    !showDetalhe && setShowDetalhe(!showDetalhe)
                  }}
                >
                  Mais detalhe
                </button>
              </Card.Body>
            </Card>
            {selectedProject === index && (
              <ProjectDetail
                setSelectedProject={setSelectedProject}
                project={project}
              />
            )}
          </li>
        ))}
      </ul>
  )
}

export default ListaProjetos
