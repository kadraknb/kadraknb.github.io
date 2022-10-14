// {
//   id: 0,
//   name: '',
//   icon: '',
//   gif: '',
//   tecFocus: '',
//   listTec: [''],
//   projectGroup: false,
//   infGroup: [''],
//   repository: '',
//   description: '',
// },

import iconDOM from '../images/jsDom.png'
import gifDOM from '../images/giphy.gif'
import iconTec from '../images'

const { react, redux } = iconTec
const projectList = [
  {
    id: 'Trybewallet',
    name: 'Trybewallet',
    icon: iconDOM,
    gif: gifDOM,
    tecFocus: 'react-redux',
    listTec: [react, redux],
    projectGroup: false,
    infGroup: [''],
    repository: '',
    description: `Neste projeto esta desenvolvido uma carteira de controle de gastos com conversor de moedas,
     ao utilizar essa aplicação um usuário deverá ser capaz de:
      Adicionar, remover e editar um gasto;
     Visualizar uma tabelas com seus gastos;
     Visualizar o total de gastos convertidos para uma moeda de escolha;`
  },
  {
    id: 'Trybetunes',
    name: 'Trybetunes',
    icon: iconDOM,
    gif: gifDOM,
    tecFocus: 'JSON',
    listTec: ['html', 'js', 'DOM', 'JSON'],
    projectGroup: false,
    infGroup: [''],
    repository: 'ajust',
    description: 'Página web de E-commerce, projeto focado na utilização de API.'
  },
  {
    id: 'ShoppingCart',
    name: 'Shopping cart',
    icon: iconDOM,
    gif: gifDOM,
    tecFocus: 'JSON',
    listTec: ['html', 'js', 'DOM', 'JSON'],
    projectGroup: false,
    infGroup: [''],
    repository: 'ajust',
    description: 'Página web de E-commerce, projeto focado na utilização de API.'
  },
  {
    id: 'PixelsArt',
    name: 'Project pixels art',
    icon: iconDOM,
    gif: gifDOM,
    tecFocus: 'DOM',
    listTec: ['html', 'js', 'DOM'],
    projectGroup: false,
    infGroup: [''],
    repository: 'ajust',
    description:
      'página web que contém uma paleta de cores que poderá ser utilizada para criar desenhos em pixels'
  }

]

export default projectList
