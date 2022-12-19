import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';

import CenterBody from './components/centerBody';
import Profile from './components/profile';
import ProjectList from './components/projectList';
import Context from './context/Context';

function App() {
  const { showDetalhe, windowWidth } = useContext(Context);

  const ajusteTela = {
    zoom:
      windowWidth < 1000 ? `${100 - (1000 - windowWidth) / 10}%` : 100 + '%'
  };

  return (
    <>
      <main id="Body_All" style={ajusteTela}>
        <aside className="transition">
          <Profile />
        </aside>
        <section
          className="transition centerBody"
          id={showDetalhe ? 'ocultarSobreMim' : ''}
        >
          <CenterBody />
        </section>
        <aside className="transition">
          <ProjectList />
        </aside>
      </main>
    </>
  );
}

export default App;
