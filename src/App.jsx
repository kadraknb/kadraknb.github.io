import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';

import CenterBody from './components/centerBody';
import Profile from './components/profile';
import ProjectList from './components/projectList';
import Context from './context/Context';

function App() {
  const { showDetalhe } = useContext(Context);

  return (
    <>
      <main id="Body_All">
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
