// {
//   id: 0,
//   name: '',
//   icon: '',
//   gif: '',
//   tecFocus: '',
//   listTec: [''],
//   projectGroup: false,
//   linkPreview: '',
//   repository: '',
//   habilidadeFocada: [],
//   description: '',
// },

import imgProjetos from './images'
import gifProjetos from './gif'

const projectList = [
  {
    id: 'Trivia',
    name: 'Trivia',
    icon: imgProjetos.Trivia,
    gif: gifProjetos.Trivia,
    tecFocus: 'Redux, Redux-thunk',
    listTec: ['React', 'Redux', 'JavaScript', 'CSS', 'GitHub', 'Trello'],
    preview: true,
    projectGroup: true,
    linkPreview: '',
    repository: 'https://github.com/kadraknb/Project-trivia',
    habilidadeFocada: [
      'Criar um store Redux em aplicações React.',
      'Conectar Redux aos componentes React.',
      'Criar actions assíncronas na sua aplicação React que faz uso de Redux.',
      'Escrever testes para garantir que sua aplicação possua uma boa cobertura de testes.'
    ],
    descriptionShort: 'Jogo de perguntas e respostas.',
    description:
      'Um jogo de perguntas e respostas baseado no jogo Trivia (tipo um show do milhão norte americano) utilizado React e Redux, desenvolvido em grupo de 4 pessoas'
  },
  {
    id: 'Wallet',
    name: 'Wallet',
    icon: imgProjetos.Wallet,
    gif: gifProjetos.Wallet,
    tecFocus: 'react-redux',
    listTec: ['React', 'Redux', 'JavaScript', 'CSS', 'GitHub'],
    preview: true,
    projectGroup: false,
    linkPreview: '',
    repository: '',
    habilidadeFocada: [
      'Criar um store Redux em aplicações React.',
      'Criar reducers no Redux em aplicações React.',
      'Criar actions no Redux em aplicações React.',
      'Criar dispatchers no Redux em aplicações React.',
      'Conectar Redux aos componentes React.',
      'Criar actions assíncronas na sua aplicação React que faz uso de Redux.'
    ],
    descriptionShort: 'Controle de gastos.',
    description: `Neste projeto foi desenvolvido uma aplicação de controle de gastos com conversor de moedas,
     ao utilizar essa aplicação um usuário deverá ser capaz de:
      Adicionar, remover e editar um gasto,
      Visualizar uma tabelas com seus gastos,
      Visualizar o total de gastos convertidos para uma moeda de escolha;`
  },
  {
    id: 'Tunes',
    name: 'Tunes',
    icon: imgProjetos.Tunes,
    gif: gifProjetos.Tunes,
    tecFocus: 'React Router',
    listTec: ['React', 'JavaScript', 'CSS', 'GitHub'],
    preview: true,
    projectGroup: false,
    linkPreview: '',
    repository: 'https://github.com/kadraknb/trybetunes',
    habilidadeFocada: [
      'Fazer requisições e consumir dados vindos de uma API.',
      'Utilizar os ciclos de vida de um componente React.',
      'Utilizar a função setState de forma a garantir que um determinado código só é executado após o estado ser atualizado.',
      'Utilizar o componente BrowserRouter corretamente.',
      'Criar rotas, mapeando o caminho da URL com o componente correspondente, via Route.',
      'Utilizar o Switch do React Router.',
      'Criar links de navegação na aplicação com o componente Link.'
    ],
    descriptionShort: 'Streaming de música.',
    description: `Neste projeto foi criado um serviço de streaming de música,
      uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, 
      criar uma lista de músicas favoritas e editar o perfil da pessoa usuária.`
  },
  {
    id: 'ShoppingCart',
    name: 'Shopping cart',
    icon: imgProjetos.ShoppingCart,
    gif: gifProjetos.ShoppingCart,
    tecFocus: 'JavaScript.DOM',
    listTec: ['DOM', 'JavaScript', 'HTML', 'CSS', 'GitHub'],
    preview: true,
    projectGroup: false,
    linkPreview: 'https://kadraknb.github.io/shopping-cart/',
    repository: 'https://github.com/kadraknb/shopping-cart',
    habilidadeFocada: [
      'Usar dados diretamente de uma API',
      'prática o desenvolvimento orientado a testes, o famoso TDD (Test Driven Development)'
    ],
    descriptionShort: 'E-commerce.',
    description:
      'Página web de E-commerce usando HTML e js.DOM, projeto focado na utilização de API.'
  },
  {
    id: 'PixelsArt',
    name: 'pixels art',
    icon: imgProjetos.PixelsArt,
    gif: gifProjetos.PixelsArt,
    tecFocus: 'JavaScript.DOM',
    listTec: ['DOM', 'JavaScript', 'HTML', 'CSS', 'GitHub'],
    preview: true,
    projectGroup: false,
    linkPreview: 'https://kadraknb.github.io/pixels-art/',
    repository: 'https://github.com/kadraknb/pixels-art',
    habilidadeFocada: [
      'Criar elementos usando JS.DOM',
      'Criar eventos no elementos usando JS.DOM'
    ],
    descriptionShort: 'Crie desenhos em pixels',
    description:
      'página web que contém uma paleta de cores que poderá ser utilizada para criar desenhos em pixels'
  }
]

export default projectList
