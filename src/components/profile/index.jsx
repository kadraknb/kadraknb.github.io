import React from 'react'
import clipboardCopy from 'clipboard-copy'
// import { Link } from 'react-router-dom'

// import { GithubOriginalIcon } from 'react-devicons'
import './profile.css'
import photoProfile from '../.././images/image (1).jpg'
import iconTec from '../../images'

function Profile () {
  // add contato, add soft skills, add sobre mim, add front-end
  return (
    <div className="profile efeito-vidro">
      <img
        src={photoProfile}
        alt="photoProfile"
        className="imgProfile"
      />
      <div>
        <h5 className='nomeP'>Vagner Cardoso dos Santos</h5>
      </div>
      <div className="contatos">
        <div>
          <img
            src={iconTec.tec.gitHub}
            alt="technology icon"
            className="imgC"
          />
          <a target='_blank' href="https://github.com/kadraknb" className="Clink" rel="noreferrer">
             GitHub
          </a>
        </div>
        <div>
          <img
            src={iconTec.linkedin}
            alt="technology icon"
            className="imgC"
          />
          <a target='_blank'
            href="https://www.linkedin.com/in/vagner-cardos-santos/"
            className="Clink" rel="noreferrer"
          >
            Linkedin
          </a>
        </div>
        <div className='emailCopy'>
          <img src={iconTec.email} alt="technology icon" className="imgC" />
          <h7
            className="Clink"
            onClick={() => clipboardCopy('vagner_cardoso_s@outlook.com')}
          >
            Copiar email <strong>AQUI</strong>
          </h7>
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
