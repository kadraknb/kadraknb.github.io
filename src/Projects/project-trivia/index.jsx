import React, { useState } from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'
import Login from './pages/Login'
import Game from './pages/Game'
// import Settings from './pages/Settings'
import Feedback from './pages/Feedback'
import Ranking from './pages/Ranking'

import './index.css'
// <Switch>
//   <Route path="/ranking" exact component={ Ranking } />
//   <Route path="/feedback" exact component={ Feedback } />
//   <Route path="/settings" exact component={ Settings } />
//   <Route path="/game" exact component={ Game } />
//   <Route path="/" exact component={ Login } />
// </Switch>

export default function Trivia () {
  const [router, setRouter] = useState('Login')
  const routers = {
    Login: <Login router={setRouter} />,
    Game: <Game router={setRouter} />,
    Feedback: <Feedback router={setRouter} />,
    Ranking: <Ranking router={setRouter} />
    // Profile: <Profile setRouter={setRouter} />,
    // ProfileEdit: <ProfileEdit setRouter={setRouter} />
  }
  return (
    <Provider store={ store }>
    {routers[router]}
  </Provider>

  )
}
