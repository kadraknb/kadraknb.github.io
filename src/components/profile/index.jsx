import React from 'react'
// import { GithubOriginalIcon, GithubOriginalWordmarkIcon } from 'react-devicons'
// import ReactOriginalIcon from 'react-devicons/react/original'
import photoProfile from '../.././images/image.jpg'
import iconTec from '../../images/iconTec'

function Profile () {
  // add contato, add soft skills, add sobre mim, add front-end
  return (
    <div className='profile'>
      <link rel="stylesheet" href="devicon.min.css"></link>
      <img src={photoProfile} alt="photoProfile" width="200" height="200" />
      <i className="devicon-devicon-plain imgTec"></i>
      {/* <ReactOriginalIcon className="my-class" /> */}
      {/* <GithubOriginalWordmarkIcon /> */}
{/* <GithubOriginalIcon size="2em" /> */}
      <div>
        {/* <p>
          Ola, estou iniciando na programação pelo curso da <span>TRYBE.....</span>
        </p>
        <p>.....................</p> */}
      </div>
      <ul className='ulIconTec'>{Object.entries(iconTec).map((technology) => (
        <li key={technology[0]} className='liIconTec'>
          <img src={technology[1]} alt='technology icon' className='imgTec'/>
        </li>
      ))}</ul>
    </div>
  )
}

export default Profile
