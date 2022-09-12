import React from 'react'

import photoProfile from '../../images/image.jpg'

function Profile () {
  const technologyList = [{}] // ajust
  // add contato, add soft skills, add sobre mim, add front-end
  return (
    <div>
      <img src={photoProfile} alt="photoProfile" width="200" height="200" />
      <div>
        <p>
          Ola, estou iniciando na programação pelo curso da <span>TRYBE.....</span>
        </p>
        <p>.....................</p>
      </div>
      <ul>{technologyList.map((technology) => (
        <li key={technology.name}>
          <img src={technology.img} alt='technology icon' width="20" height="20" />
          <p>{technology.name}</p>
        </li>
      ))}</ul>
    </div>
  )
}

export default Profile
