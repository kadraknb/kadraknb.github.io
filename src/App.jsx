import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';

import CenterBody from './components/centerBody';
import Profile from './components/profile';
import ProjectList from './components/projectList';
import Context from './context/Context';
import Header from './components/header';

function App() {
  const { showDetalhe, windowWidth, ajusteTelaWidth, nav } =
    useContext(Context);

  const ajusteTelaZoom = {
    zoom:
      windowWidth > 700 && windowWidth < 1000
        ? `${100 - (1000 - windowWidth) / 10}%`
        : 100 + '%',
  };

  const navSelecionada = {
    Perfil: <Profile />,
    SobreMim: <CenterBody />,
    Projetos: <ProjectList />,
  };

  return (
    <>
      {windowWidth < 700 ? (
        <>
          <Header />
          {navSelecionada[nav]}
        </>
      ) : (
        <main id="Body_All" style={ajusteTelaZoom}>
          <aside
            id="itemAppProfile"
            className="efeito-vidro"
            style={ajusteTelaWidth}
          >
            <Profile />
          </aside>
          <section
            className="itensApp transition centerBody"
            id={showDetalhe ? 'ocultarSobreMim' : ''}
          >
            <CenterBody />
          </section>
          <aside className="itensApp ">
            <ProjectList />
          </aside>
        </main>
      )}
    </>
  );
}

export default App;
