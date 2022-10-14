import React from 'react'
// import { GithubOriginalIcon } from 'react-devicons'
import photoProfile from '../.././images/image.jpg'
import iconTec from '../../images'

function Profile () {
  // add contato, add soft skills, add sobre mim, add front-end
  return (
    <div className="profile">
      <img
        src={photoProfile}
        alt="photoProfile"
        className="imgTec"
        width="200"
        height="200"
      />
      <div>
        <p>Ola, sou o Vagner</p>
      </div>
      <div className="contatos">
        <div>
          <img src={iconTec.email} alt="technology icon" className="imgTec" />
          <p className='Clink'>vagner_cardoso_s@outlook.com</p>
        </div>
        <div>
          <img src={iconTec.linkedin} alt="technology icon" className="imgTec" />
          <a href="https://www.linkedin.com/in/vagner-cardos-santos/" className='Clink'>GitHub</a>
        </div>
        <div>
          <img src={iconTec.tec.gitHub} alt="technology icon" className="imgTec" />
          <a href="https://github.com/kadraknb" className='Clink'>Linkedin</a>
        </div>
      </div>
      <ul className="ulIconTec">
        {Object.entries(iconTec.tec).map((technology) => (
          <li key={technology[0]} className="liIconTec">
            <img src={technology[1]} alt="technology icon" className="imgTec" />
          </li>
        ))}
      </ul>
      {/*
<i className="imgTec devicon-adonisjs-original colori"></i>
<i className=" devicon-apache-plain imgTec" ></i>
<i className="devicon-adonisjs-original "></i> */}
    </div>
  )
}

export default Profile
