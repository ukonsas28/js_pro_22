import React from 'react';
import { Main } from 'Containers/Main';
import { Posts } from 'Containers/Posts';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import { NotFound } from 'Containers/NotFound';
import { About } from 'Containers/About';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.posts} element={<Posts />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.notFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;
