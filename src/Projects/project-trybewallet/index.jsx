import React, { useState } from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'
import Login from './pages/Login'
import Wallet from './pages/Wallet'

function Trybewallet () {
  const [router, setRouter] = useState('Login')

  const routers = {
    Login: <Login router={setRouter} />,
    Wallet: <Wallet router={setRouter} />
  }

  return (
    <>
      <Provider store={ store }>
      {routers[router]}
    </Provider>
    </>
  )
}

export default Trybewallet
