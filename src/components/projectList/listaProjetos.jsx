import React, { useContext, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

import Context from '../../context/Context';
import projectList from '../../../public/projectList';
import ProjectDetail from './projectDetail';

function ListaProjetos() {
  const { showDetalhe, setShowDetalhe, iconTecFocada } = useContext(Context);
  const [selectedProject, setSelectedProject] = useState();
  const [load, setLoad] = useState(false);
  useEffect(() => removeLoad(), []);
  const removeLoad = () => {
    setTimeout(() => setLoad(true), 1000);
  };

  return (
    <ul id="list_proj">
      {projectList.map((project, index) => (
        <li
          key={project.id}
          className={`${ project.listTec.includes(iconTecFocada) && 'ListP_IconFoco'
          }`}
        >
          <div className='card efeito_vidro'>
            <div className='flax_center'>
            <img className='img' src={project.icon} alt="ícone do projeto" />
            </div>
            <div className='box_texto'>
              <div className='nome'>{project.name}</div>
              <div className='descricao'>{project.descriptionShort}</div>
            </div>
            <button className='button_card' onClick={() => {
                  setSelectedProject(index);
                  !showDetalhe && setShowDetalhe(!showDetalhe);
                }}>Mais detalhe</button>
          </div>
          {selectedProject === index && (
            <ProjectDetail
              setSelectedProject={setSelectedProject}
              project={project}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default ListaProjetos;
