import projectList from '../services/getProjectList'

const validarRota = () => {
  const pathname = global.location.pathname.slice(1)
  const pathnameValido = projectList.map((project) => project.id).includes(pathname)

  return pathnameValido
}

export default validarRota
