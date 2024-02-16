import React, { useContext } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';

import CenterBody from './components/centerBody';
import Profile from './components/profile';
import ProjectList from './components/projectList';
import Context from './context/Context';
import Header from './components/header';

function App() {
  const { showDetalhe, windowWidth, ajusteTelaWidth } = useContext(Context);

  const ajusteTelaZoom = {
    zoom:
      windowWidth > 700 && windowWidth < 1000
        ? `${100 - (1000 - windowWidth) / 10}%`
        : 100 + '%',
  };

  return (
    <>
      {windowWidth < 700 ? (
        <>
          <Header />
        </>
      ) : (
        <main id="Body_All" style={ajusteTelaZoom}>
          <aside
            id="appProfile"
            className="efeito_vidro"
            style={ajusteTelaWidth}
          >
            <Profile />
          </aside>
          <section
            className={`transition centerBody ${
              showDetalhe ? 'ocultarSobreMim' : ''
            }`}
          >
            <CenterBody />
          </section>
          <aside>
            <ProjectList />
          </aside>
        </main>
      )}
    </>
  );
}

export default App;
