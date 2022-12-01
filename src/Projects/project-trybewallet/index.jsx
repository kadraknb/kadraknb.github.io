import React, { useState } from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'
import Login from './pages/Login'
import Wallet from './pages/Wallet'
import './wallet.css'

function Trybewallet () {
  const [router, setRouter] = useState('Login')

  const routers = {
    Login: <Login router={setRouter} />,
    Wallet: <Wallet router={setRouter} />
  }

  return (
    <div id='W_main'>
      <Provider store={ store }>
      {routers[router]}
    </Provider>
    </div>
  )
}

export default Trybewallet
